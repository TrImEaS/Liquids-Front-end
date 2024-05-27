import { useEffect, useState } from "react"
import { Parser } from 'expr-eval'
import Swal from 'sweetalert2'

export default function Preparar() {
  const [concepts, setConcepts] = useState([])
  const [formulas, setFormulas] = useState([])
  const [filteredConcepts, setFilteredConcepts] = useState([])
  const [modifiedFormulas, setModifiedFormulas] = useState({})
  const [modifiedStatuses, setModifiedStatuses] = useState({})
  const [modifiedValues, setModifiedValues] = useState({})
  const [variables, setVariables] = useState({})
  const [loading, setLoading] = useState(true)
  const [sueldo, setSueldo] = useState(1000)

  let formulaChangeTimeout = null

  useEffect(() => {
    getConcepts()
  },[])

  const getConcepts = () => {
    setLoading(true)
    fetch('https://line-technology.com.ar/concepts')
    .then(response => {
      if(response.ok) {
        return response.json()
      }

      return console.error('Error getting concepts')
    })
    .then(data => {
      const filterData = data.sort((a,b) => b.type.localeCompare(a.type))
      const formulas = filterData.map((concept) => ({
        id: concept.id,
        formula: concept.formula ? concept.formula : '',
      }))

      const variables = createVariablesMap(data)

      data.forEach((concept) => {
        if (concept.formula) {
          concept.value = evaluateFormula(concept.formula, variables)
        }
      })
      
      setConcepts(filterData)
      setFormulas(formulas)
      setFilteredConcepts(filterData)
      setLoading(false)
    })
    .catch(e => {
      console.error('Error fetching data:', e)
      setLoading(false)
    })
  }

  const createVariablesMap = (concepts) => {
    const variables = {}
    concepts.forEach((concept) => {
      const variableName = concept.name.toLowerCase().replace(/\s/g, '')
      variables[variableName] = concept.value !== undefined ? concept.value : 0
    })
    return variables
  }

  const evaluateFormula = (formula, variables) => {
    // Comprobación de validez básica para prevenir problemas de seguridad y errores sintácticos
    const allowedCharacters = /^[a-zA-Z0-9\s+\-*/().]+$/ // Letras, números, operadores, y paréntesis
    
    if (!allowedCharacters.test(formula)) {
      console.error("Fórmula inválida:", formula)
      Swal.fire({
        title: "Fórmula no válida",
        text: "La fórmula contiene caracteres no permitidos.",
        icon: "error",
      })
      return null
    }
  
    // Inicializar el analizador de expresiones
    const parser = new Parser()
  
    try {
      // Parsear la fórmula
      const expression = parser.parse(formula)
  
      // Definir variables con valores por defecto para evitar errores de evaluación
      const safeVariables = { ...variables }
      expression.symbols().forEach((symbol) => {
        if (safeVariables[symbol] === undefined) {
          safeVariables[symbol] = 0 // Valor por defecto para variables indefinidas
        }
      })
  
      // Evaluar la fórmula con las variables seguras
      return expression.evaluate(safeVariables)
    } catch (error) {
      console.error("Error evaluando fórmula:", error)
      Swal.fire({
        title: "Error en la fórmula",
        text: "Hubo un problema al evaluar la fórmula.",
        icon: "error",
      })
      return null
    }
  }

  const filterConcepts = (value) => {
    setLoading(true)
  
    if (value === 'default') {
      setFilteredConcepts(concepts)
    } 
    
    if (value === 'disabled') {
      setFilteredConcepts(concepts.filter((concept) => concept.active === 0))
    } 
    
    if (value === 'active') {
      setFilteredConcepts(concepts.filter((concept) => concept.active === 1))
    }
  
    setLoading(false)
  }

  const handleFormulaChange = (id, newFormula) => {
    // Debounce para esperar 2 segundos antes de evaluar la fórmula
    if (formulaChangeTimeout) {
      clearTimeout(formulaChangeTimeout)
    }

    setModifiedFormulas((prev) => ({
      ...prev,
      [id]: newFormula,
    }))

  }

  const handleInputKeyDown = (e, id) => {
    // Evaluar cuando se presiona "Enter"
    if (e.key === "Enter") {
      const newFormula = e.target.value
      clearTimeout(formulaChangeTimeout)
      const newValue = evaluateFormula(newFormula, variables)
      setModifiedValues((prev) => ({
        ...prev,
        [id]: newValue,
      }))
    }
  }

  const handleInputBlur = (e, id) => {
    // Evaluar cuando el input pierde el foco
    const newFormula = e.target.value
    clearTimeout(formulaChangeTimeout)
    const newValue = evaluateFormula(newFormula, variables)
    setModifiedValues((prev) => ({
        ...prev,
        [id]: newValue,
    }))
  }

  const handleConceptStatus = (concept) => {
    const currentStatus = modifiedStatuses[concept.id] ?? concept.active
    const newStatus = currentStatus === 1 ? 0 : 1
  
    setModifiedStatuses((prev) => ({
      ...prev,
      [concept.id]: newStatus,
    }))
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const confirmSave = async () => {
    // Mostrar la alerta de espera
    Swal.fire({
      title: 'Espere...',
      text: 'Realizando cambios, por favor no cierre la ventana.',
      allowOutsideClick: false, // No permitir cerrar la alerta haciendo clic afuera
      didOpen: () => {
        Swal.showLoading() // Mostrar icono de carga
      },
    })
  
    // Actualizar los estados de los conceptos
    for (const [id, active] of Object.entries(modifiedStatuses)) {
      try {
        console.log(`Modificando estado para ID: ${id} con activo: ${active}`)
        await fetch(`https://line-technology.com.ar/concepts/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ active }),
        })
        await sleep(4)
      } catch (error) {
        console.error(`Error actualizando estado para ID: ${id}`, error)
      }
    }
  
    // Actualizar las fórmulas de los conceptos
    for (const [id, formula] of Object.entries(modifiedFormulas)) {
      try {
        console.log(`Modificando fórmula para ID: ${id} con nueva fórmula: ${formula}`)
        await fetch(`https://line-technology.com.ar/concepts/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formula }),
        })
        await sleep(4)
      } catch (error) {
        console.error(`Error actualizando fórmula para ID: ${id}`, error)
      }
    }

      // Actualizar los valores de los conceptos
      for (const [id, value] of Object.entries(modifiedValues)) {
        console.log(value)
        try {
          console.log(`Modificando estado para ID: ${id} con el nuevo valor: ${value}`)
          await fetch(`https://line-technology.com.ar/concepts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value }),
          })
          await sleep(4)
        } catch (error) {
          console.error(`Error actualizando estado para ID: ${id}`, error)
        }
      }
  
    // Cerrar la alerta de espera
    Swal.close()
  
    // Mostrar la alerta de éxito
    Swal.fire('Guardado', 'Los cambios se guardaron con éxito', 'success')
  
    // Reiniciar estados modificados y refrescar datos
    setModifiedStatuses({})
    setModifiedFormulas({})
    setModifiedValues({})
    getConcepts() // Refrescar la lista de conceptos
  }

  const saveChanges = () => {
    // Preguntar confirmación con SweetAlert
    Swal.fire({
      title: '¿Estás seguro de guardar los cambios?',
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        confirmSave()
      } 
      else {
        Swal.fire('Cancelado', 'No se guardaron los cambios', 'info')
      }
    })
  }
  
  return (
    loading 
      ? <span className="text-3xl flex items-center justify-center h-[300px]">Cargando...</span>
      : 
    <section className="flex flex-col items-center w-4/5 h-full min-h-[800px] py-10 gap-10">
      <article className="w-full flex gap-x-2 items-center">
        <h1>Ordenar por</h1>
        <select 
          name="filter" 
          onChange={(e) => filterConcepts(e.target.value)}
          className="min-w-[100px] outline-none rounded-lg text-black py-1 px-2">
          <option value="default">Default</option>
          <option value="disabled">Disabled</option>
          <option value="active">Active</option>
        </select>
      </article>
      <article className="w-full">
        <h1>Conceptos</h1>
        <section className="flex gap-y-2 flex-col w-full flex-wrap h-full">
        {filteredConcepts.map(concept => (
          <div 
            key={concept.id} 
            className="flex w-full min-h-10">
            <article className="flex items-center px-2 border-2 min-w-[200px]">
              {concept.name}
            </article>
            <article className="flex items-center px-2 border-2 min-w-[140px] text-orange-400">
              {concept.type}
            </article>
            <article className="flex items-center px-2 border-2 w-full">
            <input
              type="text"
              value={modifiedFormulas[concept.id] ?? concept.formula ?? ""}
              onChange={(e) => handleFormulaChange(concept.id, e.target.value)}
              onKeyDown={(e) => handleInputKeyDown(e, concept.id)}
              onBlur={(e) => handleInputBlur(e, concept.id)}
              className="bg-transparent outline-none w-full h-full"
            />
            </article>
            <article className="flex items-center px-2 border-2 min-w-[150px] text-orange-400">
              <input
                type="text"
                value={`$${modifiedValues[concept.id] ?? concept.value}`}
                onChange={(e) => handleFormulaChange(concept.id, e.target.value)}
                className="bg-transparent outline-none w-full h-full"
              />
            </article>
            <div className="relative flex items-center justify-center text-2xl group">
              <span
                className="cursor-pointer"
                onClick={() => handleConceptStatus(concept)}>
                {(modifiedStatuses[concept.id] ?? concept.active) ? '✅' : '❌'}
              </span>
              <span className="absolute group-hover:flex hidden py-1 px-2 rounded-lg rounded-bl-none border-orange-400 font-bold cursor-default text-center justify-center items-center border text-base left-[30px] top-[-45px]">
                {modifiedStatuses[concept.id] === 1 ? 'Concepto activo' : 'Concepto desactivado' ?? concept.active === 1}
              </span>
            </div>
          </div>
        ))}
        </section>
      </article>

      <div className="flex justify-end w-full">
        <button onClick={saveChanges} className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-400 duration-300">
          Guardar cambios
        </button>
      </div>
    </section>
  ) 
}