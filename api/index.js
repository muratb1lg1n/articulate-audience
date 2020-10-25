const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const router = require('./router');
const path = require("path");
const url = 'mongodb://127.0.0.1:27017/bisiklet'

//paketleri express de kullan
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',router);

//veri tabanı bağlantısı
const vtSpecifics = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(url ,vtSpecifics).then(()=>{
    console.log('DB Successful');
}).catch((err)=>{
    console.log(`DB Failed: ${err.message}`);
});

//server ayaga kaldir
app.listen(port, () => {
    console.log(`server ok http://localhost:${port}`);
})