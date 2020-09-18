var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const port = 3000

//paketleri express de kullan
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router islemleri
app.get('/sehirler', (req,res)=> {
    res.json({citys:['bursa','istanbul','eskisehir']})
})

app.post('/kullanici', (req,res)=> {
    if(req.body.email == 'murat' && req.body.sifre == '1234'){
        res.json({cevap:'basarili'})
    }else{
        res.json({cevap: 'basarisiz'})
    }
})

//server ayaga kaldir
app.listen(port, () => {
    console.log(`server ok http://localhost:${port}`)
})