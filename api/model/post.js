const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    post:{
        type: String,
        required: true,
    },
    topic:{
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    date:{
        type: String
    }
},
{
    collection: 'post'
})

module.exports = mongoose.model('Post', postSchema);