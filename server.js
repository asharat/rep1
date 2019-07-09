// const express = require('express')
// const app = express()
// app.get('/', (req, res) => {
//   res.send('neiiii')
// })
// app.get('/about', (req, res) => {
//   res.send('no fun allowed')
// })
// app.get('/filetest', (req, res) => {
//   res.sendFile('C:/dev/ndexsq/testres.html')
// })
// app.listen(3000, () => console.log('Server ready'))
// const User = require('./user.js')
// let gregory = new User('Gregory',22);
// gregory.sayHi()
const sql = require('mssql')

const config = {
  user: 'sa',
  password: 'passme',
  server: 'localhost\\SQLEXPRESS',
  database: 'testdb'
}
sql.connect(config, err => {
  // ... error checks
  if (err)
    console.log(err)
  else
    new sql.Request().query('select top 2 * from otc_err', (err, result) => {
      // ... error checks
      if(err)
        console.log(err)
      else
        //console.dir(result)
        // myObj = JSON.parse(JSON.stringify((result.recordsets[0])))
        // myObj2 = JSON.parse(JSON.stringify(myObj))
        myObj = JSON.parse(JSON.stringify((result.recordsets[0])))
        testf(myObj)
        sql.close()
    })

  // Query
  sql.on('error', err => {
    console.log(err)// ... error handler
  })
})
function testf(queryres){
  console.dir((queryres[0].DAT))
}
