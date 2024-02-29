import employees from '../data/Employees.json' with { type: 'json' }

export class EmployeeModel {

  // Get all employees
  static async getAll ({ company }) {
    if (company) {
      return employees.filter( employee => employee.company && employee.company.toLowerCase() === company.toLowerCase() )}
    
    return employees
  }

  // Get an employee with the docket
  static async getByDocket ({ docket }) {
    const employee = 
      employees.find(employee => employee.docket === parseInt(docket))
    return employee
  }

  // Create an employee
  static async create ({ input }) {
    let newId = 0
    let newDocket = 0
    
    newId = employees[employees.length - 1].id + 1

    newDocket = employees[employees.length - 1].docket + 1

    const newEmployee = {
      id: newId,
      docket: newDocket,
      ...input
    }
    
    employees.push(newEmployee)

    return newEmployee
  }

  // Edit an employee with the docket
  static async update ({ docket, input }) {
    const employeeIndex = employees.findIndex(employee => employee.docket === parseInt(docket))
    if (employeeIndex === -1) return false

    employees[employeeIndex] = {
      ...employees[employeeIndex],
      ...input
    }

    return employees[employeeIndex]
  }

  // Delete an employee with the docket
  static async delete ({ docket }) {
    const employeeIndex = employees.findIndex(employee => employee.docket === parseInt(docket))
    if(employeeIndex === -1) return false

    employees.splice(employeeIndex, 1)
    return true
  }
}