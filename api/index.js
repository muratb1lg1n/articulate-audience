const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const router = require('./router');



const url = 'mongodb://127.0.0.1:27017/bisiklet'



//paketleri express de kullan
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',router);

//veri tabanı bağlantısı
const vtOzellikleri = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(url ,vtOzellikleri).then(()=>{
    console.log('DB Başarılı');
}).catch((err)=>{
    console.log(`DB Hatalı: ${err.message}`);
});

//server ayaga kaldir
app.listen(port, () => {
    console.log(`server ok http://localhost:${port}`);
})