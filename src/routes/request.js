const express = require('express');
const router = express.Router();


router.get('/request/newrequest', (req, res)=>{
    res.render('request/new-request');

});


router.get('/users/notes', (req, res )=>{
    res.send('Panel de usuario');
});

module.exports= router;