const {schema, model} = require('mongoose');

const usuariioeschema = new schema({    
    nombre: string,
    apellido: string,
    email: string,
    edad: Number,
    telefono: Number,   
},
{
    timestramps: true,
});

module.exports = model('Usuario', usuariioeschema)  

