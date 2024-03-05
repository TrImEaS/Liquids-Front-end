import React, {useState, useEffect} from "react";
import Receipt from '../Components/Receipt'
import employeesJson from '../Json/employees.json'
import { getCurrentDate, getCurrentDateInString } from '../Scripts/date-functions'

export default function Crear () {
  const [employees, setEmployees] = useState([])
  const [legajoInput, setLegajoInput] = useState('')
  const [dniInput, setDniInput] = useState('')
  const [sectors, setSectors] = useState([])
  const [someEmployees, setSomeEmployees] = useState([])
  const [filters, setFilters] = useState({
    sector: 'all',
    company: 'all',
  })
  const [receiptData, setReceiptData] = useState({
    depositDate: '',
    periodPayment: getCurrentDateInString(),
    receiptNumber: '',
    detailsOfPayment: `Ciudad Autonoma de Buenos Aires ${getCurrentDate()}`
  })

  useEffect(()=>{
    // fetch('https://liquids-api.1.us-1.fl0.io/employees')
    // .then(response => response.json())
    // .then(data =>{
    //   setEmployees(data)
    // })
    // .catch(e => console.error('Error fetching data:', e))

    setEmployees(employeesJson)
    const uniqueSectors = [...new Set(employees.map(employee => employee.sector))]
    setSectors(uniqueSectors)
  },[])

  const handleLegajoChange = (event) => setLegajoInput(event.target.value)
  const handleDniChange = (event) => setDniInput(event.target.value)
  
  const handleSubmitFilter = (event) => {
    event.preventDefault()
    
    if (filters.company === 'all' && filters.sector === 'all') {
      // Mostrar todos los empleados si no hay filtros
      setSomeEmployees(employees);
    } else if (filters.company !== 'all' && filters.sector !== 'all') {
      // Filtrar por empresa y sector si ambos están seleccionados
      const filteredEmployees = employees.filter(employee => (
        employee.company === filters.company &&
        employee.sector === filters.sector
      ));
      setSomeEmployees(filteredEmployees);
    } else {
      // Filtrar por empresa si solo la empresa está seleccionada
      if (filters.company !== 'all') {
        const filteredEmployees = employees.filter(employee => (
          employee.company === filters.company
        ));
        setSomeEmployees(filteredEmployees);
      }
  
      // Filtrar por sector si solo el sector está seleccionado
      if (filters.sector !== 'all') {
        const filteredEmployees = employees.filter(employee => (
          employee.sector === filters.sector
        ));
        setSomeEmployees(filteredEmployees);
      }
    }
  }
  
  const handleSubmitDocket = (event) => {
    event.preventDefault()

    const filteredEmployees = employees.filter((employee) => {
      return employee.docket === parseInt(legajoInput)
    })

    setSomeEmployees(filteredEmployees)
  }  

  const handleSubmitDni = (event) => {
    event.preventDefault()

    const filteredEmployees = employees.filter((employee) => {
      return employee.dni === parseInt(dniInput)
    })

    setSomeEmployees(filteredEmployees)
  }  
 
  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center p-6 gap-y-10">
      <div>
        <div className="flex flex-1 flex-wrap justify-center items-center">
          {/*Search by some filters*/}
          <form 
            onSubmit={handleSubmitFilter}
            className="flex flex-col border-2 text-white font-semibold gap-y-3 justify-center items-center p-5">
            <h1 className="text-xl w-full text-center">
              Filtros Varios
            </h1>
            <div className="flex gap-5 flex-wrap items-center justify-center">
              {/*Setting company*/}
              <article className="flex flex-col items-center shadow-sm shadow-white p-2 h-[80px] text-white rounded-lg">
                <h1>Empresa</h1>
                <select 
                  className="p-2 border-2 border-black cursor-pointer text-black"
                  value={filters.company}
                  onChange={(e) => setFilters({ ...filters, company: e.target.value })}>
                  <option value="all">
                    Todas
                  </option>
                  <option value="Realcolor">
                    Real Color
                  </option>
                  <option value="Technologyline">
                    Technology Line
                  </option>
                  <option value="Tline">
                    Tline
                  </option>
                  <option value="Linetechnology">
                    Line Technology
                  </option>
                </select>
              </article>

              {/*Setting sector*/}
              <article className="flex flex-col items-center shadow-sm shadow-white p-2 h-[80px] text-white rounded-lg">
                <h1>Sector</h1>
                <select 
                  className="p-2 border-2 border-black cursor-pointer text-black"
                  value={filters.sector}
                  onChange={(e) => setFilters({ ...filters, sector: e.target.value })}>
                  <option value="all">
                    Todos
                  </option>
                  {sectors.map(sector => (
                    <option 
                      key={sector} 
                      value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </article>
            </div>

            {/*Submit button*/}
            <article className="flex w-full justify-center items-center">
              <button 
                onSubmit={handleSubmitFilter}
                className="border-black border-2 px-2 py-1 rounded-lg">
                Buscar
              </button>
            </article>
          </form>

          {/*Search by docket*/}
          <form
            onSubmit={handleSubmitDocket} 
            className="flex flex-col gap-y-3 items-center font-semibold border-2 p-5 justify-center">
            <h1 className="text-xl w-full text-center">
              Filtrar por legajo
            </h1>

            <div className="flex flex-col h-[80px] justify-center shadow-sm shadow-white p-2 rounded-lg">
              <label htmlFor="docketInput">
                Ingresar Legajo:
              </label>
              <input
                type="number"
                id="docketInput"
                className="rounded-lg px-2 py-1 text-black"
                value={legajoInput}
                onChange={handleLegajoChange}
              />
            </div>
            <button 
              type="submit"
              className="border-black border-2 px-2 py-1 rounded-lg">
              Buscar
            </button>
          </form>

          {/*Search by DNI*/}
          <form
            onSubmit={handleSubmitDni} 
            className="flex flex-col gap-y-3 items-center font-semibold border-2 p-5 justify-center">
            <h1 className="text-xl w-full text-center">
              Filtrar por DNI
            </h1>

            <div className="flex flex-col h-[80px] justify-center shadow-sm shadow-white p-2 rounded-lg">
              <label htmlFor="docketInput">
                Ingresar Legajo:
              </label>
              <input
                type="number"
                id="docketInput"
                className="rounded-lg px-2 py-1 text-black"
                value={dniInput}
                onChange={handleDniChange}
              />
            </div>
            <button 
              type="submit"
              className="border-black border-2 px-2 py-1 rounded-lg">
              Buscar
            </button>
          </form>
        </div>

        {/*Setting data for all called employees*/}
        {/*Setting payment date*/}
          <article className="flex flex-col items-center border-2 p-5 gap-y-3 text-white">
            <label 
              htmlFor="select-deposit-date" 
              className="cursor-pointer text-xl w-full text-center">
              Seleccionar la Fecha de pago para todos: 
            </label>
            <input 
              className="text-black outline-none rounded-lg p-2 cursor-pointer border-2 border-black" 
              id="select-deposit-date" 
              type="date"
              value={receiptData.depositDate}
              onChange={(e) => setReceiptData(prevData => ({...prevData, depositDate: e.target.value}))}
              />
          </article>
      </div>
      <section className="w-full flex flex-col justify-center items-center">
        

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 box-border">
          {/*si se toca el boton imprimir, se cambia de contenedor,*/}
          {someEmployees.map(employee => (
            <div 
              className="flex flex-col items-center gap-y-5 rounded-md bg-slate-400 border-2 border-black box-border"
              key={employee.docket}
            >  
              <h1 className="text-2xl mt-4 text-black">
                {employee.completeName}
              </h1>

              <Receipt
                employee={employee} 
                periodPayment={receiptData.periodPayment}
                depositDate={receiptData.depositDate} 
                detailsOfPayment={receiptData.detailsOfPayment}
                receiptNumber={receiptData.receiptNumber}
              ></Receipt>
           </div>
          ))}
        </article>
      </section>
    </div>
  )    
}