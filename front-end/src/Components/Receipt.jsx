import React, { useState } from "react";
import Concept from './Concept';
import realcolorImg from '../Images/Companies/real-color.png';
import tlineImg from '../Images/Companies/t-line.png';
import { refreshTotal } from '../Scripts/math-functions'

export default function Receipt ({ employee, periodPayment, depositDate, detailsOfPayment, receiptNumber, onConceptChange,}) {
  
  const [selectedLogo, setSelectedLogo] = useState(employee.company)
  const handleLogoChange = () => setSelectedLogo((prevLogo) => (prevLogo === "realcolor" ? "tline" : "realcolor"))
  
  const [totalRem, setTotalRem] = useState(0)
  const [totalNorem, setTotalNorem] = useState(0)
  const [totalDiscount, setTotalDiscount] = useState(0)

  const handleConceptChange = (docket, concept, value) => {
    if (concept.includes('rem')) {
      setTotalRem((prevTotalRem) => refreshTotal(prevTotalRem, value));
    } else if (concept.includes('norem')) {
      setTotalNorem((prevTotalNorem) => refreshTotal(prevTotalNorem, value));
    } else if (concept.includes('discount')) {
      setTotalDiscount((prevTotalDiscount) => refreshTotal(prevTotalDiscount, value));
    }
  }

  const getSelectedLogo = () => {
    if (selectedLogo === "realcolor") {
      return (
        <>
          <article className="m-auto pt-5">
            <img src={realcolorImg} width={180} alt="" />
          </article>

          <article className="m-auto">
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

          <article className=" m-auto">
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

  const handleInputChange = (concept, value) => {
    if (concept.includes('rem') || concept.includes('norem') || concept.includes('discount')) {
      setTotalRem((prevRemTotal) => refreshTotal(prevRemTotal, value))
      onConceptChange(concept, value)
    }
  }

  {/*Body*/}
  return (
    <form 
      name="receipt-container" 
      className="w-full max-w-[45rem] flex flex-col bg-[#F8F9F9] box-border border-2 border-black text-black sm:text-s text-xs rounded rounded-t-none p-1">
      
      <header className="grid grid-cols-6 border-b-2 border-b-black w-full p-1 min-h-[150px]">
        <section className="grid grid-cols-2 gap-3 col-span-4 h-[100px]">
        {getSelectedLogo()}
        </section>
        <section className="flex flex-col justify-around col-span-2 py-4">
          <article className="flex gap-x-4 justify-around w-full">
            <label
              className="w-20" 
              htmlFor="cuil">
              CUIL
            </label>
            <input 
              className="w-3/4 outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="cuil" 
              type="text"
              defaultValue={employee.cuil} 
              placeholder="Ej: 10-45518784-4"/>
          </article> 
          <article className="flex gap-x-4 justify-around w-full">
            <label
              className="w-20" 
              htmlFor="receipt">
              Recibo N°
            </label>
            <input 
              className="w-3/4 outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="receipt" 
              type="text" 
              defaultValue={receiptNumber}
              placeholder="Ej: 10"/>
          </article>
        </section>
        <button 
          onClick={handleLogoChange} 
          type="button"
          className="w-20 h-8 rounded mx-20 bg-slate-300 hover:bg-slate-400">
          Cambiar
        </button>
      </header>

    {/*Body: this is divided in 3 parts*/}
      <section className="w-full">
        <ul className="flex justify-around gap-x-1 pb-2">
          <li className="flex flex-col items-center gap-y-2 ">
            <label
              htmlFor="complete-name">
              Nombre y Apellido
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="complete-name" 
              type="text"
              defaultValue={employee.completeName} 
              placeholder="Ej: Pepito Thomson"/>
          </li>
          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="sector">
              Sector
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="sector" 
              type="text"
              defaultValue={employee.sector} 
              placeholder="Ej: Auxiliar"/>
          </li>
          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="docket">
              Legajo
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="docket" 
              type="number"
              defaultValue={employee.docket} 
              placeholder="Ej: 11"/>
          </li>
          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="category">
              Category
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="category" 
              type="text"
              defaultValue={employee.category} 
              placeholder="Ej: A"/>
          </li>
        </ul>

        <ul className="flex justify-around items-center gap-x-1 px-2 border-t-2 border-black pb-2">
          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="bank">
              Banco
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="bank" 
              type="text"
              defaultValue={employee.bank} 
              placeholder="Ej: Pepito Thomson"/>
          </li>

          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="period">
              Periodo
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="period" 
              type="text"
              defaultValue={employee.period} 
              placeholder="Ej: ..."/>
          </li>

          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="deposit-date">
              Fecha Deposito
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="deposit-date" 
              type="date"
              defaultValue={depositDate} 
              placeholder="Ej: 11"/>
          </li>

          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="performedTask">
              Tarea
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="performedTask" 
              type="text"
              defaultValue={employee.performedTask} 
              placeholder="Ej: Sistemas"/>
          </li>

          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="admisionDate">
              Fecha Ingreso
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="admisionDate" 
              type="date"
              defaultValue={employee.admisionDate}/>
          </li>

          <li className="flex flex-col items-center gap-y-2">
            <label
              htmlFor="basicRem">
              Basico
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="basicRem" 
              type="text"
              onChange={(e) => handleInputChange('basicRem', parseFloat(e.target.value))}
              value={employee.basicRem} 
              placeholder="Ej: 100000"/>
          </li>
        </ul>

        <ul className="flex justify-around gap-x-2 border-t-2 border-b-2 px-2 border-black pb-2">
          <li className="flex items-center gap-y-2 pt-2 w-full">
            <label
              htmlFor="deposit-date">
              Periodo Abonado
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="deposit-date" 
              type="text"
              defaultValue={periodPayment} 
              placeholder="Ej: Julio del 2023"/>
          </li>
          <li className="flex items-center gap-y-2 w-full">
            <label
              htmlFor="details-of-payments">
              Lugar y Fecha de Pago
            </label>
            <input 
              className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]" 
              id="details-of-payments" 
              type="text"
              defaultValue={detailsOfPayment} 
              placeholder="Ej: Ciudad Autonoma de Buenos Aires, 15/12/23"/>
          </li>
        </ul>
      </section>

    {/*Details*/}
      <section name="receipts-details" className="flex flex-col gap-y-2">
        <ul name="details" className="grid gap-x-1 pt-2 px-2 grid-cols-6 ">
          <li className="bg-[#D5D8DC] font-bold text-xs flex justify-center text-pretty items-center rounded">
            <span>Descripcion <br/>Conceptos</span>
          </li>

          <li className="bg-[#D5D8DC] font-bold text-xs flex justify-center text-pretty items-center rounded">
            <span>Unidades</span>
          </li>

          <li className="bg-[#D5D8DC] font-bold text-xs flex justify-center text-pretty items-center rounded">
            <span>Valor<br />Unitario</span>
          </li>

          <li className="bg-[#D5D8DC] font-bold text-xs flex justify-center text-pretty items-center rounded">
            <span>Haberes <br />Rem.</span>
          </li>

          <li className="bg-[#D5D8DC] font-bold text-xs flex justify-center text-pretty items-center rounded">
            <span>Haberes <br />Norem.</span>
          </li>

          <li className="bg-[#D5D8DC] font-bold text-xs flex justify-center text-pretty items-center rounded">
            <span>Descuentos</span>
          </li>
        </ul>

        {/*Concepts*/}
        <div className="min-h-[200px]">
          <Concept concept={"Basico"} docket={employee.docket} remValue={employee.remValue}></Concept>
        </div>
      </section>
    
    {/*Footer/Totals*/}
      <footer className="flex justify-end">
        <section className="w-[250px] grid grid-rows-3 gap-y-2">

          {/*SubTotal*/}
          <article className="flex gap-2">
            <span 
              className="flex items-center justify-center">
              SubTotal
            </span>
            <input 
              className="w-full outline-none rounde text-center py-1 bg-[#D5D8DC]" 
              id="total-rem" 
              type="text"
              min="0" 
              max="10000000"
              value={totalRem}
              onChange={handleInputChange}
              disabled/>
            <input 
              className="w-full outline-none rounded text-center py-1 bg-[#D5D8DC]" 
              id="total-norem" 
              type="text"
              min="0" 
              max="10000000"
              value={totalNorem}
              onChange={handleInputChange}
              disabled/>
            <input 
              className="w-full outline-none rounded py-1 text-center bg-[#D5D8DC]" 
              id="total-discount" 
              type="text"
              min="0" 
              max="10000000"
              value={totalDiscount}
              onChange={handleInputChange}
              disabled/>
          </article>
          
          {/*Total Neto*/}
          <article className="flex gap-2">
            <span 
              className="flex justify-center items-center w-20">
              Total Neto
            </span>
            <input 
              className=" outline-none rounded py-1 text-center bg-[#D5D8DC]" 
              id="total-net" 
              min="0" 
              max="10000000"
              step={"0.01"}
              defaultValue={0.00}
              type="text"
              disabled/>
          </article>

          {/*Total Neto*/}
          <article className="flex gap-3">
          <span 
            className="flex items-center justify-center">
            Son:
          </span>
          <input 
            className="w-full outline-none rounded py-1 pl-3 bg-[#D5D8DC]"
            id="total-string"
            type="text"
            disabled/>
          </article>
        </section>
      </footer>
    </form>
  )    
}

