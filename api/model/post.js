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
    date:{
        type: Date,
        default: Date.now(),
    }
},
{
    collection: 'post'
})

module.exports = mongoose.model('Post', postSchema);