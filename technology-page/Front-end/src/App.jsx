import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Error, Search } from './Pages/Routes.jsx'
import Nav from './Components/Nav'
import Footer from "./Components/Footer.jsx"
function App() {
  const [demoBtn, setDemoBtn] = useState(false)
  const handleclick = () => setDemoBtn(!demoBtn)

  return (
    <>
    {
      demoBtn ?
    <main className="flex flex-col items-center font-body justify-between bg-white text-black min-h-screen min-w-[390px] h-full p-0 m-0">
      <Nav></Nav>
      <Routes>
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
      <Footer></Footer>
    </main>
    : 
      <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center bg-[#333] text-white">
        <span className="text-3xl">Esto es una demo</span>
        <button
          id="btn"
          className="bg-white text-black font-bold p-5 rounded-3xl hover:shadow-white duration-300"
          onClick={handleclick}
        >
          Ver demo
        </button>
      </div>
    }
  </>
  )
}

export default App
