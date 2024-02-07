export function refreshTotal(currentTotal, newValue, operation = 'add') {
  const numericValue = parseFloat(newValue)
  if (isNaN(numericValue)) {
    return currentTotal
  }

  if (operation === 'add') {
    return currentTotal + numericValue
  } else if (operation === 'subtract') {
    return currentTotal - numericValue
  } else {
    return currentTotal
  }
}