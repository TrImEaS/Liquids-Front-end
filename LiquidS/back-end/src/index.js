import express from 'express'
import cors from 'cors'
import crypto from 'node:crypto'
import employees from './data/Employees.json' assert { type: 'json' }
import validateEmployee from './Schemas/employees.js'

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
  res.json({ message: 'hi' })
})

app.get('/employees', (req, res) =>{
  const { company } = req.query
  if (company) {
    const filteredEmployees = employees.filter(
      employee => employee.company && employee.company.toLowerCase() === company.toLowerCase()
    )
    return res.json(filteredEmployees)
  }
  res.json(employees)
})

app.get('/employees/:id', (req, res) =>{
  const { id } = req.params
  const employee = employees.find(employee => employee.id === parseInt(id) || employee.id === id )
  if (employee) return res.json(employee)
  
  res.status(404).json({ message: 'Employee not found' })
})

app.post('/employees', (req, res) =>{
  const result = validateEmployee(req.body)

  if (result.error){
    return res.status(422).json({ error: JSON.parse(result.error.message) })
  }

  const newEmployee = {
    id: crypto.randomUUID(),
    ...result.data
  }

  employees.push(newEmployee)

  res.status(201).json(newEmployee)
})

app.listen(PORT, () => console.log(`server listening on port http://localhost:${PORT}`))
