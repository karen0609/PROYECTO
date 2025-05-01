const {Schema, model} = require('mongoose')

const usuarioSchema = new Schema({    
    nombre: String,
    apellido: String,
    email: String,
    edad: Number,
    telefono: Number
},
{
    timestramps: true
});

module.exports = model('Usuario', usuarioSchema)  