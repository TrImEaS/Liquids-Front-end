import React, {useState} from "react";
import Receipt from '../Components/Receipt'
import employees from '../Json/employees.json'

export default function Crear () {

  const getCurrentDate = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const day = currentDate.getDate().toString().padStart(2, '0')
    return `${day}/${month}/${year}`
  }
  
  const getCurrentDateInString = () => {
    const currentDate = new Date();
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${month} del ${year}`;
  };

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
            onChange={(e) => 
              setReceiptData(prevData => ({...prevData, depositDate: e.target.value}))}
          />
        </article>

        {/* <article className="flex flex-col">
          <label htmlFor="select-receipt-number">Numero de recibo</label>
          <input 
            className="text-black outline-none rounded py-1 pl-3 bg-[#D5D8DC] w-[150px]" 
            id="select-receipt-number" 
            type="numer"
            value={receiptData.receiptNumber}
            onChange={(e) => 
              setReceiptData(prevData => ({...prevData, receiptNumber: e.target.value}))}
          />
        </article> */}

        {/* <article className="flex flex-col">
          <label htmlFor="select-details-of-payments">Lugar y fecha de pago</label>
          <input 
            className="text-black outline-none rounded py-1 pl-3 bg-[#D5D8DC] w-[150px]" 
            id="select-details-of-payments" 
            type="numer"
            value={receiptData.detailsOfPayment}
            onChange={(e) => 
              setReceiptData(prevData => ({...prevData, detailsOfPayment: e.target.value}))}
          />
        </article> */}
      </section>
      <section className="w-full flex justify-center">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 box-border">
          {employees.map(employee => (
            <div 
              className="flex flex-col items-center gap-y-5 rounded-md bg-slate-400 border-2 border-black box-border"
              key={employee.docket}>
              
              <h1 className="text-2xl mt-4 text-black">{employee.completeName}</h1>
              
              <Receipt
                employee={employee} 
                periodPayment={receiptData.periodPayment}
                depositDate={receiptData.depositDate} 
                detailsOfPayment={receiptData.detailsOfPayment}
                receiptNumber={receiptData.receiptNumber}>
              </Receipt>
           </div>
          ))}
        </article>
      </section>
    </div>
  )    
}