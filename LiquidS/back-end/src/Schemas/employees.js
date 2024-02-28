import z from 'zod'

const employeeSchema = z.object({
  docket: z.number().int().positive(),
  full_name: z.string({
    required_error: 'Se requiere el nombre del empleado',
    invalid_type_error: 'El nombre debe de ser de tipo string/texto'
  }),
  domicile: z.string({
    required_error: 'Se requiere direccion',
    invalid_type_error: 'El domicilio debe de ser de tipo string/texto'
  }),
  birth_date: 
    z.date()
      .min(
        new Date("1900-01-01"), 
        { message: 'La fecha de nacimiento no puede ser menor a 1900' }, 
        { required_error: 'Se requiere indicar fecha de nacimiento.' })
      .max(
        new Date("2024-01-01"), 
        { message: "La fecha de nacimiento no puede ser mayor a 2024" }, 
        { required_error: 'Se requiere indicar fecha de nacimiento.' }),
  nacionality: z.string({
    required_error: 'Se requiere la nacionalidad',
    invalid_type_error: 'La nacionalidad debe de ser de tipo string/texto'
  }),
  dni: z.number().int().positive(),
  salary_settlement: z.array( z.enum(['Mensual', 'Semanal', 'Diario', 'Anual']) ),
  sector: z.string({
    required_error: 'Se requiere especificar el sector del empleado',
    invalid_type_error: 'El sector debe de ser de tipo string/texto'
  }),
  categoria: z.string({
    required_error: 'Se requiere especificar categoria',
    invalid_type_error: 'El tipo de categoria debe de ser de tipo string/texto'
  }),
  basic: z.number().positive(),
  cuil: z.number().positive(),
  admision_date: z.date().min(new Date("1990-01-01"), { message: 'La fecha de admision no puede ser menor a 1990'}),
  company: z.string({
    required_error: 'Se requiere especificar en que compania pertenece el empleado',
    invalid_type_error: 'La compania debe de ser de tipo string/texto'
  })
})

export default function validateEmployee(object) {
  return employeeSchema.safeParse(object)
}