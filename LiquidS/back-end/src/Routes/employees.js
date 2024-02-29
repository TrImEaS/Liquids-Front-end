import { Router } from 'express'
import { EmployeeController } from '../Controllers/employees.js'

export const employeeRouter = Router()

employeeRouter.get('/', EmployeeController.getAll)
employeeRouter.post('/', EmployeeController.create)

employeeRouter.get('/:docket', EmployeeController.getByDocket)
employeeRouter.patch('/:docket', EmployeeController.update)
employeeRouter.delete('/:docket', EmployeeController.delete)