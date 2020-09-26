const express = require("express");
const router = express.Router();
const Kullanici = require('./model/kullanici');
const Paylasim = require('./model/paylasim');




router.post('/giris', (req,res)=> {
    Kullanici.find({email:req.body.email}).then(veri=>{
        res.json({cevap:'Giriş başarılı!'});
    }).catch(err=>{
        res.json({cevap:'Giriş başarısız!'});
    });
});

router.post('/kaydol', (req,res)=> {
    var yeniKayit = new Kullanici({
        email: req.body.email,
        sifre: req.body.sifre
    });
    yeniKayit.save().then(veri=>{
        res.json({cevap:'Kayıt başarılı!'});
    }).catch(err=>{
        res.json({cevap:'Kayıt başarısız!'});
    });
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

  
  


module.exports = router;