import React, {useState} from "react";
import Receipt from '../Components/Receipt'
import employees from '../Json/employees.json'
import { getCurrentDate, getCurrentDateInString } from '../Scripts/date-functions'

export default function Crear () {

  const [data, setData] = useState([])

  const [receiptData, setReceiptData] = useState({
    depositDate: '',
    periodPayment: getCurrentDateInString(),
    receiptNumber: '',
    detailsOfPayment: `Ciudad Autonoma de Buenos Aires ${getCurrentDate()}`
  })

  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center px-6">
      <section className="flex gap-5">
        <article className="flex flex-col">
          <label htmlFor="select-deposit-date">Fecha de pago</label>
          <input 
            className="text-black outline-none rounded py-1 pl-3 bg-[#D5D8DC] w-[150px]" 
            id="select-deposit-date" 
            type="date"
            value={receiptData.depositDate}
            onChange={(e) => setReceiptData(prevData => ({...prevData, depositDate: e.target.value}))}
          />
        </article>
      </section>
      
      <section className="w-full flex justify-center">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 box-border">
          
          {/*si se toca el boton imprimir, se cambia de contenedor,   */}

          {employees.map(employee => (
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