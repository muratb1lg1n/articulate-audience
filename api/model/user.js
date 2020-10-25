const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        default: 'Your description looks empty.'
    },
    signupdate:{
        type: Date,
        default: Date.now(),
    },
    photo:{
        type:String
    }
},
{
    collection: 'user'
})

userSchema.pre('save', async function(next){
    const user = this;
    user.password = await bcrypt.hash(user.password, 8);
    next();
})
module.exports = mongoose.model('User', userSchema);