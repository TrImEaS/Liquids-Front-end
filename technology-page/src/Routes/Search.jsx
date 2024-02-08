import React, { useState } from "react";

export default function Search ({ history }) {

  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/search/${query}`)
  }

  return (
    <form 
      onSubmit={handleSearch} 
      className="h-full min-h-screen w-full flex flex-col items-center px-6"
    >
      <input  
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
      />
    <button type="submit">Buscar</button>
    </form>
  )    
}