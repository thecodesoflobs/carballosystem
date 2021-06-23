const database = require('mongoose');



database.connect('mongodb://localhost/users',{
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify: false
}).then(db =>console.log('Base de datos conectada'))
.catch(err => console.log(err));