
// export function readExcelFile(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsBinaryString(file)
//     reader.onload = (e) => {
//       const data = e.target.result
//       const workbook = XLSX.read(data, { type: 'binary' })
//       const sheetName = workbook.SheetNames[0]
//       const sheet = workbook.Sheets[sheetName]
//       const parsedData = XLSX.utils.sheet_to_json(sheet)
//       resolve(parsedData)
//     }
//     reader.onerror = (error) => {
//       reject(error)
//     }
//   })
// }