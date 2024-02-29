import express from 'express'
import cors from 'cors'
import { employeeRouter } from './Routes/employees.js'

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

// Get an simple hi 👌😂👌
app.get('/', (req, res) =>{
  res.json({ message: 'Hi welcome to the API. Routes: /employees, /concepts' })
})

app.use('/employees', employeeRouter)

app.listen(PORT, () => 
  console.log(`server listening on port http://localhost:${PORT}`))

//Desactivado porque choca con la busqueda por legajo
// app.get('/employees/:id', (req, res) =>{
//   const { id } = req.params
//   const employee = employees.find(employee => employee.id === parseInt(id) || employee.id === id )
//   if (employee) return res.json(employee)
  
//   res.status(404).json({ message: 'Employee not found' })
// })
