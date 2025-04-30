const express = require('express');
const cors = require('cors');
const app= express();

//configuracion

app.set('port', process.env.PORT || 4000);

//midlewares
app.use(cors());
app.use(express.json());

//rutas 
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API RESTful');
});

//ruta para nuestra api de usuarios

app.use('/api/usuarios', require('./routes/usuario.js'));

module.exports = app;