const mongoose = require('mongoose');
const paylasimSchema = new mongoose.Schema({
    icerik:{
        type: String,
        required: true
    }
},
{
    collection: 'paylasim'
})

module.exports = mongoose.model('Paylasim',paylasimSchema);