export function getCurrentDate () {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  return `${day}/${month}/${year}`
}

export function getCurrentDateInString () {
  const currentDate = new Date()
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  return `${month} del ${year}`
}
