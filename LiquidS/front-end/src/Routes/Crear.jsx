import React from "react";
import Receipt from '../Components/Receipt'
import * as employees from '../Json/employees.json'

export default function Crear () {
  const month = '05-01-2024'
  const depositDate = 'Enero del 2024'
  const detailsOfPayment = 'Ciudad Autonoma de Buenos Aires, 05/01/24'

  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center px-6">
      <section className="w-full flex justify-center">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-5 box-border p-10">
          <Receipt 
            employee={employees[0]} 
            month={month} 
            depositDate={depositDate} 
            detailsOfPayment={detailsOfPayment}>
          </Receipt>
        </article>
      </section>
    </div>
  )    
}