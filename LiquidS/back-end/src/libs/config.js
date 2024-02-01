export default {
  database: 'receipts-database',
  username: 'root',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'receipts-database.db',
    define: {
      underscore: true
    },
    operatorsAliases: false
  }
}