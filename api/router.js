const express = require("express");
const router = express.Router();

const User = require('./model/user');
const Post = require('./model/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const multer  = require('multer');
const uuid = require('uuid');


const loginCheck = (req, res, next) => {
    try {
      const token = req.headers.authorization.replace("Bearer ", "");
      const tokenData = jwt.verify(token, 'murat12345', { expiresIn: 3600 });
      req.user = tokenData;
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        mesaj: "Token couldn't created!"
      });
    }
  };

  const storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, './public/userPhotos/');
    },
    filename: function(req,file,callback){
        callback(null, uuid.v4());
    }
  });
  const upload = multer({ storage : storage});


router.post('/login', (req,res)=> {
    User.findOne({email:req.body.email}).then(user=>{
        if(user!==null){
            bcrypt.compare(req.body.password,user.password).then(match=>{
                if(!match){
                    res.status(401).json({
                        success: false,
                        response: 'False email or password!'
                    });
                } else {
                    const token = jwt.sign({user}, 'murat12345', {expiresIn: 3600});
                    res.status(200).json({
                        token: token,
                        response: 'Login successful!'
                    });
                }
            });
        } else {
            res.status(401).json({response:'False email or password!'});
        }
    }).catch(err=>{
        res.status(500).json({response:'Login failed!'});
    });
});

router.post('/signup', (req,res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const nickname = req.body.nickname;

    var newUser = new User({
        email: email,
        password: password,
        nickname: nickname
    });
    
    User.findOne({nickname:nickname}).then(nickname=>{
        if(nickname === null){
            User.findOne({email:email}).then(email=>{
                if(email === null){
                    newUser.save().then(data=>{
                        res.json({response:'Login successful!'});
                    }).catch(err=>{
                        res.json({response:'Login failed!'});
                    });
                }else{
                    res.status(400).json({
                        response: "This email is already registered!"
                    })
                }
            })
        }else{
            res.status(400).json({
                response: "This nickname is already registered!"
            })
        }
    });
});

router.get('/profile',loginCheck,(req,res)=> {
    User.findOne({
        _id:ObjectId(req.user.user._id)
    }).then(profileInfo=>{
        res.json({profileInfo});
    });
});
router.put('/profile',loginCheck,(req,res)=> {
    User.findOne(
        {_id: ObjectId(req.user.user._id)}
    ).updateOne({$set:{'description': req.body.description}}, (err, result) => {
      if(err) {
        throw err;
      }
      res.send('user updated sucessfully');
    });
});
router.get('/profilepost',loginCheck,(req,res)=> {
    Post.find({
        user_id:ObjectId(req.user.user._id)
    }).then(profilePosts=>{
        res.json(profilePosts);
    });
});
router.post('/photoupdate',[loginCheck,upload.single('userPhoto')],(req,res)=> {
    User.findOne(
        {_id: ObjectId(req.user.user._id)}
    ).updateOne({$set:{'photo': req.file.filename}}, (err, result) => {
      if(err) {
        throw err;
      }
      res.send('user updated sucessfully');
    });
});


router.post('/post',loginCheck,(req,res)=> {
    var newPost = new Post({
        user_id: req.user.user._id,
        post: req.body.post,
        topic: req.body.topic
    });
    newPost.save().then(data=>{
        res.json({response: 'Post successful'});
    }).catch(err=>{
        res.json({response:'Post unsuccessful'})
    });
});

router.get('/post',loginCheck,(req, res)=>{
    Post.aggregate([
        {
            $lookup:{
                from:'user',
                localField:'user_id',
                foreignField:'_id',
                as:'userInfo'
            }
        },{
            $project:{
                userInfo:{
                    password:0,
                    email:0,
                    user_id:0
                }
            }
        }
    ]).then(data => {
        res.json(data);
    })
});

router.delete('/post/:id',loginCheck,(req,res)=>{
    const id = req.params.id;
    Post.deleteOne({_id: id}).then(data=>{
        res.status(200).json({
            mesaj: 'Post deleted'
        });
    });
})
  

module.exports = router