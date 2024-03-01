import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'


const libsql = createClient({
  url: "libsql://technologyline-database-trimeas.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDg2MzI2NDksImlkIjoiY2Y0YzhiODktZDE3Yi0xMWVlLWEyYTctOGU4YjRkMDEwY2ViIn0.2SH_T4fnPJIT4V5RV8NT9s2peRX19ArtmnY4Kp4bmrMg1ZkyKFltOUUz6-RfkoD9Ams6Zh9Sbtq-pOIaltoGBQ",
})

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export class EmployeeModel {

 // Get all employees
 static async getAll ({ company }) {
    const employees = await prisma.employees.findMany({
      where: {
        company: {
          equals: company,
        },
      },
    });

    return employees;
  }

  // Get an employee with the id
  static async getById ({ id }) {
    const response = await prisma.employee.findUnique({ where: { id: parseInt(id) } });
    return response;
  }

  static async getAllByCompany ({ company }) {
    const response = await prisma.employee.findMany({ where: { company: { equals: company.toLowerCase() } } });
    return response;
  }

// Create an employee
  static async create ({ input, company, docket }) {
    const isDocketAlreadyUsed = await prisma.employee.findFirst({
      where: {
        company: { equals: company.toLowerCase() },
        docket: { equals: parseInt(docket) }
      }
    });

    if (isDocketAlreadyUsed) {
      return false;
    }

    const newEmployee = await prisma.employee.create({
      data: {
        ...input,
        company: company.toLowerCase(),
        docket: parseInt(docket)
      }
    });

    return newEmployee;
  }

  // Edit an employee with the id
  static async update ({ id, input }) {
    const updatedEmployee = await prisma.employee.update({
      where: { id: parseInt(id) },
      data: input
    });

    return updatedEmployee;
  }

  // Delete an employee with the id
  static async delete ({ id }) {
    const deletedEmployee = await prisma.employee.delete({
      where: { id: parseInt(id) }
    });

    return !!deletedEmployee;
  }
}