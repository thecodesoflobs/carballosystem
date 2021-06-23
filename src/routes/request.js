const express = require('express');
const router = express.Router();


router.get('/users/notes', (req, res )=>{
    res.send('Panel de usuario');
});

module.exports= router;