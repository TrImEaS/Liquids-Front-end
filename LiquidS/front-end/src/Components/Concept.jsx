import React from "react";

export default function ({ detail, remSalary, noremSalary, discount }) {
  return (
    <ul name="concepts" className="grid grid-cols-6 gap-x-1 px-2">
      <li id="concept" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="text"
          defaultValue={detail} 
          placeholder="Concepto"
        />
      </li>

      <li id="units" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
        />
      </li>

      <li id="unitary-value" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
        />
      </li>

      <li id="rem-salary" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={remSalary}
        />
      </li>

      <li id="no-rem-salary" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={noremSalary} 
        />
      </li>
      
      <li id="discount" className="flex items-center gap-y-2 w-full">
        <input 
          className="w-full outline-none rounded py-1 pl-3 h-[80%] bg-[#D5D8DC]" 
          type="number"
          defaultValue={discount} 
        />
      </li>
    </ul>
  )
}