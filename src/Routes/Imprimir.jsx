import React, {useState, useEffect} from "react";
import Receipt from '../Components/Receipt'
import employeesJson from '../Json/employees.json'
import { getCurrentDate, getCurrentDateInString } from '../Scripts/date-functions'

export default function Crear () {
  const [employees, setEmployees] = useState([])
  const [legajoInput, setLegajoInput] = useState('')
  const [dniInput, setDniInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [sectors, setSectors] = useState([])
  const [employeeDataIsOpen, setEmployeeDataIsOpen] = useState(true)
  const [variousIsOpen, setVariousIsOpen] = useState(true)
  const [docketIsOpen, setDocketIsOpen] = useState(true)
  const [dniIsOpen, setDniIsOpen] = useState(true)
  const [nameIsOpen, setNameIsOpen] = useState(true)
  const [someEmployees, setSomeEmployees] = useState([])
  const [filters, setFilters] = useState({
    sector: 'all',
    company: 'all',
  })
  const [receiptData, setReceiptData] = useState({
    depositDate: '',
    periodPayment: getCurrentDateInString(),
    receiptNumber: '',
    bank: '',
    basico: 0,
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

  const handleEmployeeDataIsOpen = () => setEmployeeDataIsOpen(!employeeDataIsOpen) 
  const handleVariousIsOpen = () => setVariousIsOpen(!variousIsOpen) 
  const handleDocketIsOpen = () => setDocketIsOpen(!docketIsOpen) 
  const handleDniIsOpen = () => setDniIsOpen(!dniIsOpen) 
  const handleNameIsOpen = () => setNameIsOpen(!nameIsOpen) 
  const handleNameChange = (e) => setNameInput(e.target.value) 
  const handleLegajoChange = (e) => setLegajoInput(e.target.value)
  const handleDniChange = (e) => setDniInput(e.target.value)
  
  {/*Form various*/}
  const handleSubmitFilter = (e) => {
    e.preventDefault()
    
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
  
  {/*Form For docket*/}
  const handleSubmitDocket = (e) => {
    e.preventDefault()

    const filteredEmployees = employees.filter((employee) => {
      return employee.docket === parseInt(legajoInput)
    })

    setSomeEmployees(filteredEmployees)
  }  

  {/*Form For DNI*/}
  const handleSubmitDni = (e) => {
    e.preventDefault()

    const filteredEmployees = employees.filter((employee) => {
      return employee.dni === dniInput
    })

    setSomeEmployees(filteredEmployees)
  }

  {/*Form For Name*/}
  const handleSubmitName = (e) => {
    e.preventDefault()

    const filteredEmployees = employees.filter((employee) => {
      const employeeFullName = employee.full_name.toLowerCase()
      const name = nameInput.toLowerCase()
  
      return employeeFullName.includes(name)
    })

    setSomeEmployees(filteredEmployees)
  }
  

  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center p-6 gap-y-10">
      {/*Div for Form Divisor*/}
      <div className="min-w-[400px] ">
        <div className="flex flex-wrap justify-center items-center flex-col w-full">
          {/*Search by some filters*/}
          <form 
            onSubmit={handleSubmitFilter}
            className="flex flex-col border-2 w-full text-white font-semibold gap-y-3 justify-center items-center p-5 relative">
            <span 
              className="text-xl font-semibold absolute right-3 top-1 border-2 px-2 rounded-full cursor-pointer hover:bg-white hover:text-black duration-300"
              onClick={handleVariousIsOpen}>
              {!variousIsOpen ? '⬇' :'⬆'}
            </span>
            <h1 className="text-xl w-full text-center">
              Filtros Varios
            </h1>
          
            <div className={`${!variousIsOpen ? 'hidden' : 'flex'} w-full flex-col justify-center items-center gap-y-5`}>

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
                  type="submit"
                  onSubmit={handleSubmitFilter}
                  className="border-black border-2 px-2 py-1 rounded-lg">
                  Buscar
                </button>
              </article>
            </div>
          </form>
          
          
          <div className="flex flex-wrap items-center justify-center w-full">
            {/*Search by docket*/}
            <form
              onSubmit={handleSubmitDocket} 
              className="flex flex-col gap-y-3 items-center font-semibold border-2 p-5 justify-center w-full relative">
              <span 
                className="text-xl font-semibold absolute right-3 top-1 border-2 px-2 rounded-full cursor-pointer hover:bg-white hover:text-black duration-300"
                onClick={handleDocketIsOpen}>
                {!docketIsOpen ? '⬇' :'⬆'}
              </span>
              <h1 className="text-xl w-full text-center">
                Buscar por legajo
              </h1>

              <div className={`${!docketIsOpen ? 'hidden' : 'flex'} w-full flex-col justify-center items-center gap-y-5`}>
              
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
              </div>
            </form>

            {/*Search by DNI*/}
            <form
              onSubmit={handleSubmitDni} 
              className="flex flex-col gap-y-3 items-center font-semibold border-2 p-5 justify-center w-full relative">
              <span 
                className="text-xl font-semibold absolute right-3 top-1 border-2 px-2 rounded-full cursor-pointer hover:bg-white hover:text-black duration-300"
                onClick={handleDniIsOpen}>
                {!dniIsOpen ? '⬇' :'⬆'}
              </span>
              <h1 className="text-xl w-full text-center">
                Buscar por DNI
              </h1>
              
              <div className={`${!dniIsOpen ? 'hidden' : 'flex'} w-full flex-col justify-center items-center gap-y-5`}>
              
                <div className="flex flex-col h-[80px] justify-center shadow-sm shadow-white p-2 rounded-lg">
                  <label htmlFor="docketInput">
                    Ingresar DNI:
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
              </div>
            </form>
            {/*Search by DNI*/}
            <form
              onSubmit={handleSubmitName} 
              className="flex flex-col gap-y-3 items-center font-semibold border-2 p-5 justify-center w-full relative">
              <span 
                className="text-xl font-semibold absolute right-3 top-1 border-2 px-2 rounded-full cursor-pointer hover:bg-white hover:text-black duration-300"
                onClick={handleNameIsOpen}>
                {!nameIsOpen ? '⬇' :'⬆'}
              </span>
              <h1 className="text-xl w-full text-center">
                Buscar por Nombre
              </h1>
              
              <div className={`${!nameIsOpen ? 'hidden' : 'flex'} w-full flex-col justify-center items-center gap-y-5`}>
              
                <div className="flex flex-col h-[80px] justify-center shadow-sm shadow-white p-2 rounded-lg">
                  <label htmlFor="docketInput">
                    Ingresar Nombre:
                  </label>
                  <input
                    type="type"
                    id="docketInput"
                    className="rounded-lg px-2 py-1 text-black"
                    value={nameInput}
                    onChange={handleNameChange}
                  />
                </div>
                <button 
                  type="submit"
                  className="border-black border-2 px-2 py-1 rounded-lg">
                  Buscar
                </button>
              </div>
            </form>
          </div> 
        </div>

        {/*Setting data for all called employees*/}
        {/*Setting payment date*/}
        <article className="flex flex-col items-center border-2 p-5 gap-y-3 text-white relative">
          <span 
            className="text-xl font-semibold absolute right-3 top-1 border-2 px-2 rounded-full cursor-pointer hover:bg-white hover:text-black duration-300"
            onClick={handleEmployeeDataIsOpen}>
            {!employeeDataIsOpen ? '⬇' :'⬆'}
          </span>
          <h1 className="text-xl pl-5 w-full text-center font-semibold">
            Aplicar para todos
          </h1>
          
          <section className={`${!employeeDataIsOpen ? 'hidden' : 'flex'} w-full flex-wrap justify-center items-center gap-5`}>
            <article className="flex flex-col items-center justify-center">
              <label 
                htmlFor="select-deposit-date" 
                className="cursor-pointer font-semibold w-full pl-2">
                Fecha de pagos: 
              </label>
              <input 
                className="text-black w-[200px] text-center text-lg font-semibold outline-none rounded-lg p-2 cursor-pointer border-2 border-black" 
                id="select-deposit-date" 
                type="date"
                value={receiptData.depositDate}
                onChange={(e) => setReceiptData(prevData => ({...prevData, depositDate: e.target.value}))}
              />
            </article>
              
            <article className="flex flex-col items-center justify-center">
              <label 
                htmlFor="select-deposit-date" 
                className="cursor-pointer font-semibold w-full pl-2">
                Banco:
              </label>
              <input 
                className="text-black w-[200px] text-lg font-semibold outline-none rounded-lg p-2 border-2 border-black" 
                id="select-deposit-date" 
                type="text"
                value={receiptData.bank}
                onChange={(e) => setReceiptData(prevData => ({...prevData, bank: e.target.value}))}
              />
            </article>

            <article className="flex flex-col items-center justify-center">
              <label 
                htmlFor="select-deposit-date" 
                className="cursor-pointer font-semibold w-full pl-2">
                Basico:
              </label>
              <input 
                className="text-black w-[200px] text-lg font-semibold outline-none rounded-lg p-2 border-2 border-black" 
                id="select-deposit-date" 
                type="number"
                value={receiptData.basic}
                onChange={(e) => setReceiptData(prevData => ({...prevData, basic: e.target.value}))}
              />
            </article>
          </section>
        </article>

        {/*Reload page btn*/}
        <button
          onClick={() => window.location.reload()}
          className="border-2 px-2 py-1 text-xl font-bold hover:bg-slate-400 duration-300">
          Reset
        </button>
      </div>
      
      <section className="w-full flex flex-col justify-center items-center">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 box-border">
          {/*si se toca el boton imprimir, se cambia de contenedor,*/}
          {someEmployees.map(employee => (
            <div 
              className="flex flex-col items-center gap-y-5 rounded-md bg-slate-400 border-2 border-black box-border"
              key={employee.id + 1}
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
                bank={receiptData.bank}
                basic={receiptData.basic}
              ></Receipt>
           </div>
          ))}
        </article>
      </section>
    </div>
  )    
}