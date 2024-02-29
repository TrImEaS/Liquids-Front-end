import { EmployeeModel } from "../models/employee.js"
import { validatePartialEmployee } from '../Schemas/employees.js'
import validateEmployee from '../Schemas/employees.js'


export class EmployeeController {

  // Get all employees
  static async getAll (req, res) {
    const { company } = req.query
    const employees = await EmployeeModel.getAll({ company })
    res.json(employees)
  }

  // Get an employee with the docket
  static async getByDocket (req, res) {
    const { docket } = req.params
    const employee = await EmployeeModel.getByDocket({ docket })
    if (employee) return res.json(employee)
    
    res.status(404).json({ message: 'Employee not found' })
  }

  // Create an employee
  static async create (req, res) { 
    const result = validateEmployee(req.body)
  
    if (result.error){
      return res.status(422).json({ error: JSON.parse(result.error.message) })
    }
  
    const newEmployee = await EmployeeModel.create({ input: result.data })
    
    res.status(201).json(newEmployee)
  }

  // Edit an employee with the docket
  static async update (req, res) { 
    const result = validatePartialEmployee(req.body)
    
    if (!result.success) 
      return res.status(400).json({ error: JSON.parse(result.error.message) })
  
    const { docket } = req.params
  
    const updateEmployee = await EmployeeModel.update({ docket, input: result.data })  
  
    return res.json(updateEmployee)
  }

  // Delete an employee with the docket
  static async delete (req, res) {
    const { docket } = req.params
    const result = await EmployeeModel.delete({ docket })
  
    if(result === false) {
      return res.status(404).json({ message: 'Empleado no encontrado' })
    }
  
    return res.json({ message: 'Empleado borrado correctamente'})
  }
}