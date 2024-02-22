import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Error, Search } from './Pages/Routes.jsx'
import Nav from './Components/Nav'
import Footer from "./Components/Footer.jsx"
function App() {

  return (
    <main className="flex flex-col items-center font-body justify-between bg-white text-black min-h-screen min-w-[390px] h-full">
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
  )
}

export default App
