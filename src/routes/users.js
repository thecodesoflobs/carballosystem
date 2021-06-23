const express = require('express');
const router = express.Router();


router.get('/users/ingresar', (req, res )=>{
    res.render('users/signin');

});

router.get('/users/registrar', (req, res)=>{
    res.render('users/signup');
});

module.exports= router;