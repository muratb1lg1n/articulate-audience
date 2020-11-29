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
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({direct:true,
    host: 'smtp.yandex.com',
    port: 465,
    auth: { 
        user: 'mrat453@yandex.com', 
        pass: 'Awq2466@' 
    },
    secure: true
});

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

  const storage2 = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, './public/postPhotos/');
    },
    filename: function(req,file,callback){
        callback(null, uuid.v4());
    }
  });

  const upload = multer({ storage : storage});
  const upload2 = multer({ storage : storage2});


router.post('/login', (req,res)=> {
    User.findOne({email:req.body.email}).then(user=>{
        if(user!==null){
            bcrypt.compare(req.body.password,user.password).then(match=>{
                if(!match){
                    res.json({
                        success: false,
                        response: 'False email or password!'
                    });
                } else {
                    const token = jwt.sign({user}, 'murat12345', {expiresIn: 3600});
                    res.json({
                        success: true,
                        token: token,
                        response: 'Login successful!'
                    });
                }
            });
        } else {
            res.json({success: false,response:'False email or password!'});
        }
    }).catch(err=>{
        res.status(500).json({success: false,response:'Login failed!'});
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
                        res.json({
                            success: true,
                            response:'Login successful!'
                        });
                    }).catch(err=>{
                        res.json({
                            success: true,
                            response:'Login failed!'
                        });
                    });
                }else{
                    res.json({
                        success: false,
                        response: "This email is already registered!"
                    })
                }
            })
        }else{
            res.json({
                success: false,
                response: "This nickname is already registered!"
            })
        }
    });
});


router.post('/reset',(req,res)=>{
    User.findOne({email:req.body.email}).then(emailSorgu=>{
        if(emailSorgu!==null){
            const token = jwt.sign(
                {email:emailSorgu.email}, 'murat12345', {expiresIn: 3000}
            );
            User.updateOne({resetlink: token}).then(guncellenenVeri=>{
                const bilgiler = {
                    from: 'mrat453@yandex.com', 
                    to: req.body.email,
                    subject: '', 
                    text: '',
                    html: `<p>Merhaba <b>${emailSorgu.nickname}</b>,<br>şifre sıfırlama 
                    talebinde bulundun. Aşağıdaki linke tıklayarak şifreni 
                    sıfırlayabilirsin.</p><p><a href="http://localhost:8080/password/${token}">
                    Şifreyi sıfırlamak için tıklayınız!</a></p>`
                }
                transporter.sendMail(bilgiler,(err,info)=>{
                    res.status(201).json({
                        mesaj: 'Email adresinize sıfırlama linki gönderildi!'
                    });
                });
            }).catch(err=>{
                res.status(400).json({
                    mesaj: 'Sıfırlama isteği işlemi başarısız oldu!'
                });
            });
        } else {
            res.status(401).json({
                mesaj: 'Email adresi hatalı!'
            });
        }
    }).catch(err=>{
        res.status(400).json({
            mesaj: 'Sıfırlama isteği işlemi başarısız oldu!'
        });
    });
})

router.post('/password',(req,res)=>{
    const {token,password} = req.body;
    if(password){
        User.findOne({resetlink:token}).then(kullaniciVeri=>{
            bcrypt.hash(password,8,(err,pass)=>{
                if(!err){
                    if(kullaniciVeri!==null){
                        User.updateOne(
                            { resetlink: token },
                            { $set: {
                                password: pass,
                                resetlink: ''
                            }}
                        ).then(guncellenenVeri=>{
                            if(guncellenenVeri!==null){
                                return res.status(200).json({
                                    mesaj: 'Şifreniz başarıyla sıfırlandı!'
                                });
                                console.log('başarılı');
                            }
                            res.status(400).json({
                                mesaj: 'Sıfırlama isteği işlemi başarısız oldu!'
                            });
                            console.log('başarılı2');
                        }).catch(err=>{
                            res.status(400).json({
                                mesaj: 'Sıfırlama isteği işlemi başarısız oldu!'
                            });
                            console.log('başarısız');
                        });
                    }
                }
            });
        }).catch(err=>{
            res.status(400).json({
                mesaj: 'Sıfırlama isteği işlemi başarısız oldu!'
            });
        });
    }  
})

//profile info
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
    ).updateOne({
        $set:{
            'photo': req.file.filename
        }}, (err, result) => {
            if(err) {
                throw err;
            }
      res.send('user updated sucessfully');
    });
});

//other profile posts listing
router.get('/otherpost/:nickname',loginCheck,(req,res)=> {
    const nickname = req.params.nickname;
    User.findOne({
        nickname: nickname
    }).then(otherUser=>{
        Post.find({user_id:otherUser._id}).then(otherPosts=>{
            res.json(otherPosts);
        })
    })
});

router.get('/otherprofile/:nickname',loginCheck,(req,res)=> {
    const nickname = req.params.nickname;
    User.findOne({
        nickname: nickname
    },{nickname:1,photo:1,description:1,_id:0}).then(otherUser=>{
        res.json(otherUser);
    })
});

//all posts
router.post('/post',[loginCheck,upload2.single('photo')],(req,res)=> {

    date = new Date(); 
    date.toLocaleTimeString();  
    var localDate = ""+date;

    if(req.body.photoCheck){
        var newPost = new Post({
            user_id: req.user.user._id,
            post: req.body.post,
            topic: req.body.topic,
            photo: req.file.filename,
            date: localDate
        });
    } else {
        var newPost = new Post({
            user_id: req.user.user._id,
            post: req.body.post,
            topic: req.body.topic,
            date: localDate
        });
    }
    
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
});
  

module.exports = router