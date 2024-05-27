import { Route, Routes } from 'react-router-dom'
import { Home, Error, Ver, Imprimir, Preparar } from './Routes/Routes'
import Nav from './Components/Nav'

function App() {
  return (
      <main className='flex flex-col items-center bg-slate-900
      font-mono text-slate-50 min-h-screen font-extralight min-w-[390px]'>
        <Nav></Nav>
        <Routes>
          <Route 
            path='/' 
            element={<Home></Home>}>
          </Route>
          <Route 
            path='ver' 
            element={<Ver></Ver>}>
          </Route>
          <Route 
            path='imprimir' 
            element={<Imprimir></Imprimir>}>
          </Route>
          <Route 
            path='editar' 
            element={<Preparar></Preparar>}>
          </Route>
          <Route 
            path='*' 
            element={<Error></Error>}>
          </Route>
        </Routes>
      </main>
  )
}

export default App