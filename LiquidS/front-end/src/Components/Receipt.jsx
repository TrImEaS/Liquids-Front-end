import React, { useState } from "react";
import realcolorImg from '../Images/Companies/real-color.png'
import tlineImg from '../Images/Companies/t-line.png'

export default function Receipt () {
  const [selectedLogo, setSelectedLogo] = useState("realcolor")
  const handleLogoChange = () => setSelectedLogo((prevLogo) => (prevLogo === "realcolor" ? "tline" : "realcolor"))

  const getSelectedLogoComponent = () => {
    if (selectedLogo === "realcolor") {
      return (
        <>
          <article className="m-auto">
            <img src={realcolorImg} width={180} alt="" />
          </article>

          <article>
            <p className="flex flex-col gap-y-4">
              <span className="font-medium text-xs">Real Color S.R.L</span>
              <span className="font-medium text-xs">Domicilio: NAZCA 3580, 2° P 'A'</span>
              <span className="font-medium text-xs">C.U.I.T.: 30-71045750-2</span>
            </p>
          </article>
        </>
      )
    } else {
      return (
        <>
          <article className="m-auto py-4">
            <img src={tlineImg} width={180} alt="" />
          </article>

          <article>
            <p className="flex flex-col gap-y-4 py-4">
              <span className="font-medium text-xs">Technology Line S.R.L</span>
              <span className="font-medium text-xs">Domicilio: NAZCA 3580, 2° P 'A'</span>
              <span className="font-medium text-xs">C.U.I.T.: 30-71045750-2</span>
            </p>
          </article>
        </>
      )
    }
  }
  const employee = [
    {
      docket: 10,
      cuil: '1045518784',
      reciboNro: 10,
      completeName: 'Julio Arroyo',
      sector: 'Sistemas',
      performedTask: 'Sistemas',
      admisionDate: '21-04-2010',
      basicRem: 100000,
      category: 'A',
      bank: 'Galicia',
      period: 'undefined',
    }
  ]

  const month = '05-01-2024'
  const depositDate = 'Enero del 2024'
  const detailsOfPayment = 'Ciudad Autonoma de Buenos Aires, 05/01/24'

   return (
    <div className=" min-h-[600px] max-w-[800px] w-3/4 min-w-[630px]  bg-slate-200 box-border text-black sm:text-s text-xs">
      <header className="grid grid-cols-6 border-b-2 border-b-black w-full p-1 min-h-[150px]">
      <section className="grid grid-cols-2 gap-3 col-span-4">
       {getSelectedLogoComponent()}
      </section>
      <section className="flex flex-col justify-around col-span-2 py-4">
        <article className="flex gap-x-4 justify-around w-full">
          <label
            className="w-20" 
            htmlFor="cuil">CUIL</label>
          <input 
            className="w-3/4 outline-none rounded py-1 pl-3 bg-slate-100" 
            id="cuil" 
            type="text"
            value={employee.cuil} 
            placeholder="Ej: 10-45518784-4"/>
        </article> 
        <article className="flex gap-x-4 justify-around w-full">
          <label
            className="w-20" 
            htmlFor="receipt">Recibo N°</label>
          <input 
            className="w-3/4 outline-none rounded py-1 pl-3 bg-slate-100" 
            id="receipt" 
            type="text" 
            placeholder="Ej: 10"/>
        </article>
      </section>
      <button 
        onClick={handleLogoChange} 
        className="w-20 h-8 rounded mx-20 bg-slate-300 hover:bg-slate-400">
        Cambiar
      </button>
    </header>

    {/*Body: this is divided in four parts*/}
    <section className="w-full">
      <ul className="flex justify-around gap-x-2 pb-2">
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="complete-name">Nombre y Apellido</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="complete-name" 
            type="text"
            value={employee.completeName} 
            placeholder="Ej: Pepito Thomson"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="sector">Sector</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="sector" 
            type="text"
            value={employee.sector} 
            placeholder="Ej: Sistemas"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="docket">Legajo</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="docket" 
            type="number"
            value={employee.docket} 
            placeholder="Ej: 11"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="category">Category</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="category" 
            type="text"
            value={employee.category} 
            placeholder="Ej: A"/>
        </li>
      </ul>

      <ul className="flex justify-around gap-x-2 border-t-2 border-black pb-2">
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="bank">Banco Deposito</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="bank" 
            type="text"
            value={employee.bank} 
            placeholder="Ej: Pepito Thomson"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="period">Periodo</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="period" 
            type="text"
            value={employee.period} 
            placeholder="Ej: ..."/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="deposit-date">Fecha Deposito</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="deposit-date" 
            type="date"
            value={month} 
            placeholder="Ej: 11"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="performedTask">Tarea Desempeñada</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="performedTask" 
            type="text"
            value={employee.performedTask} 
            placeholder="Ej: Sistemas"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="admisionDate">Fecha Ingreso</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="admisionDate" 
            type="date"
            value={month.admisionDate} 
            placeholder="Ej: 11"/>
        </li>
        <li className="flex flex-col items-center gap-y-2">
          <label
            htmlFor="basicRem">Rem. Basica</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="basicRem" 
            type="number"
            value={employee.performedTask} 
            placeholder="Ej: Sistemas"/>
        </li>
      </ul>

      <ul className="flex justify-around gap-x-2 border-t-2 border-black pb-2">
        <li className="flex items-center gap-y-2 pt-2">
          <label
            htmlFor="deposit-date">Periodo Abonado</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-slate-100" 
            id="deposit-date" 
            type="text"
            value={depositDate} 
            placeholder="Ej: Julio del 2023"/>
        </li>
        <li className="flex items-center gap-y-2">
          <label
            htmlFor="details-of-payments">Lugar y Fecha de Pago</label>
          <input 
            className="w-full outline-none rounded py-1 pl-3 h-8 bg-slate-100" 
            id="details-of-payments" 
            type="text"
            value={detailsOfPayment} 
            placeholder="Ej: Sistemas"/>
        </li>
      </ul>
    </section>

    </div>
  )    
}

