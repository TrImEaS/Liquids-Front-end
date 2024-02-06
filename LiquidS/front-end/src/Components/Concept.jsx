import React from "react";
import concepts from '../Json/concepts.json'

export default function ({ remSalary, noremSalary, discount }) {
  return (
    <ul name="concepts" className="grid grid-cols-6 gap-x-1 px-2">
      <li className="flex items-center gap-y-2 w-full">
        <select name="concepts">
          <option selected disabled>Elegir</option>
          {concepts.map(concept => (
            <option key={concept.id} value="">{concept.name}</option>
          ))}
        </select>
        
        {/* <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="text"
          defaultValue={detail} 
          placeholder="Concepto"
        /> */}
      </li>

      <li className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
        />
      </li>

      <li className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
        />
      </li>

      <li className="flex items-center gap-y-2 w-full">
        <input 
          className="rem-salary w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={remSalary}
        />
      </li>

      <li className="norem-salary flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={noremSalary} 
        />
      </li>
      
      <li className="flex items-center gap-y-2 w-full">
        <input 
          className="discount w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={discount} 
        />
      </li>
    </ul>
  )
}