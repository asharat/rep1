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
function testf(qres){
  // console.dir((qres[0].DAT))
  // console.dir(qres[1].DAT)
  //console.log(qres.length)
  for(let i = 0; i < qres.length; i++){
    console.dir(qres[i].POK+'|'+qres[i].UT+'|'+qres[i].OTN+'|'+qres[i].SUB+'|'+qres[i].OTN+'|'+qres[i].VID+'|'+qres[i].DAT)
  }
}
