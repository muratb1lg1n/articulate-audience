const mongoose = require('mongoose');
const kullaniciSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    sifre:{
        type: String,
        required: true
    }
},
{
    collection: 'kullanici'
})

module.exports = mongoose.model('Kullanici',kullaniciSchema);