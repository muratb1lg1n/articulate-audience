const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const kullaniciSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    sifre:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true,
    },
    aciklama:{
        type: String,
        default: 'Burasi bos gozukuyor'
    },
    signupdate:{
        type: Date,
        default: Date.now(),
    }
},
{
    collection: 'kullanici'
})

kullaniciSchema.pre('save', async function(next){
    const kullanici = this;
    kullanici.sifre = await bcrypt.hash(kullanici.sifre, 8);
    next();
})
module.exports = mongoose.model('Kullanici',kullaniciSchema);