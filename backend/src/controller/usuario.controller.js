const usuarioCtrl = {};
const Usuario = require('../models/Usuario');

usuarioCtrl.getUsu = async (req, res) => 
    {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }
usuarioCtrl.createUsu = async (req, res) => 
    {
        const { nombre, apellido, email, edad, telefono } = req.body;
        const newUsu = new Usuario
        ({
            nombre:nombre, 
            apellido:apellido, 
            email:email,
            edad:edad, 
            telefono:telefono 
        });
        await newUsu.save();
        res.json({message: 'El usuario ha sido creado'});         
    }
usuarioCtrl.getUsuario = async (req, res) => 
    {
        const usuario = await Usuario.findById(req.params.id);
        res.json(usuario);             
    }
usuarioCtrl.deleteUsu = async (req, res) => 
    {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({message: 'El usuario ha sido eliminado'});             
    }
usuarioCtrl.updateUsu = async (req, res) => 
    {
        const { nombre, apellido, email, edad, telefono } = req.body;
        await Usuario.findByIdAndUpdate(req.params.id, 
            {
                nombre:nombre, 
                apellido:apellido, 
                email:email,
                edad:edad, 
                telefono:telefono 
            });
        res.json({message: 'El usuario ha sido actualizado'});                         
    }
 module.exports = usuarioCtrl;