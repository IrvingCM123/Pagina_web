import app from './app'
app.listen(app.get('port'))

console.log("Servidor Ejecutandose");
console.log('Puerto-Server: ', app.get('port'))
