const express = require('express')
const app = express()
app.set('views','./views')
app.set('view engine', 'pug')
app.get('/', (req,res) => {
    res.render('index', {title: 'Режим', tablename: 'Анализ данных , поступивших от систем АСКУЭ и ОИК АСДУ' })
})
app.listen(3000,() => console.log('Server ready'))