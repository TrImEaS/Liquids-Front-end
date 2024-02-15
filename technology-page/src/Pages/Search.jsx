import React, { useState } from "react";

export default function Search ({ history }) {

  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/search/${query}`)
  }

  return (
   <>
   <h1>Search Page</h1>
   </>
  )    
}