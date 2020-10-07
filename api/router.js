const express = require("express");
const router = express.Router();
const Kullanici = require('./model/kullanici');
const Paylasim = require('./model/paylasim');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/giris', (req,res)=> {
    Kullanici.findOne({email:req.body.email}).then(kullanici=>{
        if(kullanici!==null){
            bcrypt.compare(req.body.sifre,kullanici.sifre).then(eslesme=>{
                if(!eslesme){
                    res.status(401).json({
                        success: false,
                        cevap: 'Hatalı email veya şifre!'
                    });
                } else {
                    const token = jwt.sign({kullanici}, 'murat12345', {expiresIn: 3600});
                    res.status(200).json({
                        token: token,
                        cevap: 'Giriş başarılı!'
                    });
                }
            });
        } else {
            res.status(401).json({cevap:'Hatalı email veya şifre!'});
        }
    }).catch(err=>{
        res.status(500).json({cevap:'Giriş başarısız!'});
    });
});

router.post('/kaydol', (req,res)=> {
    const email = req.body.email;
    const sifre = req.body.sifre;
    const nickname = req.body.nickname;

    var yeniKayit = new Kullanici({
        email: email,
        sifre: sifre,
        nickname: nickname,

    });
    
    Kullanici.findOne({nickname:nickname}).then(nickname=>{
        if(nickname === null){
            Kullanici.findOne({email:email}).then(email=>{
                if(email === null){
                    yeniKayit.save().then(veri=>{
                        res.json({cevap:'Kayıt başarılı!'});
                    }).catch(err=>{
                        res.json({cevap:'Kayıt başarısız!'});
                    });
                }else{
                    res.status(400).json({
                        cevap: "Bu email zaten kayitli"
                    })
                }
            })
        }else{
            res.status(400).json({
                cevap: "Bu kullanici adi zaten kayitli"
            })
        }
    })
});

router.post('/paylasim', (req,res)=> {
    var yeniPaylasim = new Paylasim({
        icerik: req.body.icerik,
    });
    yeniPaylasim.save().then(veri=>{
        res.json({cevap: 'Paylasim Basarili'});
    }).catch(err=>{
        res.json({cevap:'Paylasim Basiriz'})
    });
});

router.get('/paylasim',(req, res)=>{
    Paylasim.find().then(veriler => {
        res.json(veriler);
    })
});

router.delete('/paylasim/:id',(req,res)=>{
    const id = req.params.id;
    Paylasim.deleteOne({_id: id}).then(veri=>{
        res.status(200).json({
            mesaj: 'Site başarıyla silindi!'
        });
    });
})
  

module.exports = router