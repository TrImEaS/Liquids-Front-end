export default (app) => {
  app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
  })
}


