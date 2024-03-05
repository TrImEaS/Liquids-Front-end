export function parseDate(date) {
  const dateString = date
  const parsedDate = new Date(dateString)
  
  return parsedDate.toISOString().split('T')[0]
}