const mongoose = require('mongoose');
const paylasimSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    icerik:{
        type: String,
        required: true,
    },
    tarih:{
        type: Date,
        default: Date.now(),
    }
},
{
    collection: 'paylasim'
})

module.exports = mongoose.model('Paylasim',paylasimSchema);