import React, { useEffect, useState } from 'react'
import conceptsJson from '../Json/concepts.json'

export default function ({ remSalary, noremSalary, discount }) {
  const [concepts, setConcepts] = useState([])
  const [totalNet, setTotalNet] = useState(0.00)
  const [totalToString, setTotalToString] = useState('')
  const [subTotal, setSubTotal] = useState([{
    totalRem: 0.00,
    totalNorem: 0.00,
    discount: 0.00
  }])

  

  useEffect(()=>{
    // fetch('https://liquids-api.1.us-1.fl0.io/concepts')
    // .then(response => response.json())
    // .then(data => setConcepts(data))
    // .catch(e => console.error('Error fetching data:', e))
    setConcepts(conceptsJson)
  },[])

  return (
    <ul name="concepts" className="grid grid-cols-6 gap-x-1 px-2">
      <li className="flex items-center gap-y-2 w-full">
        <select name="concepts" className="bg-[#D5D8DC] w-full">
          <option selected disabled>
            Elegir
          </option>
          {concepts.map(concept => (
            <option 
              key={concept.id}
              value={concept.id}>
              {concept.name}
            </option>
          ))}
        </select>
      </li>

      <li name="units" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
        />
      </li>

      <li name='unitaryValue' className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
        />
      </li>

      <li name='rem' className="flex items-center gap-y-2 w-full">
        <input
          id='rem' 
          className="rem-salary w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={remSalary}
        />
      </li>

      <li name='norem' className="norem-salary flex items-center gap-y-2 w-full">
        <input 
          className="norem-salary w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={noremSalary} 
        />
      </li>
      
      <li name='discounts' className="flex items-center gap-y-2 w-full">
        <input 
          className="discount w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={discount} 
        />
      </li>
    </ul>
  )
}