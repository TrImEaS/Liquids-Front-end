import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Error, Search } from './Routes/Routes'
import Nav from './Components/Nav'
function App() {

  return (
    <main className="flex flex-col items-center bg-slate-100 text-black min-h-screen min-w-[390px] h-full">
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={<Home></Home>}
        ></Route>
        <Route
          path="/search/:query"
          element={<Search></Search>}
        ></Route>
        <Route
          path="*"
          element={<Error></Error>}
        ></Route>
      </Routes>
    </main>
  )
}

export default App
