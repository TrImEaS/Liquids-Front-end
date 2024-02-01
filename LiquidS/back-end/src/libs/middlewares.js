export default (app) => {
  app.set('port', process.env.PORT ?? 3000)
}

