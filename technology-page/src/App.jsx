import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Error, Search } from './Pages/Routes.jsx'
import Nav from './Components/Nav'
function App() {

  return (
    <main className="flex flex-col items-center font-body bg-slate-100 text-black min-h-screen min-w-[390px] h-full">
      <Nav></Nav>
      <Routes>X
        <Route
          path="/"
          element={<Home/>}
        ></Route>
        <Route
          path="/search"
          element={<Search/>}>
          <Route
            path="/search/:"
            element={<Search/>}
          ></Route>
        </Route>
        <Route
          path="*"
          element={<Error/>}
        ></Route>
      </Routes>
    </main>
  )
}

export default App
