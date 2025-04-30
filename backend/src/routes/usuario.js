const {Router} = require('express');    
const { get } = require('mongoose');
const router = Router();

const { getUsu, createUsu, getUsuario, deleteUsu, updateUsu } = require('../controller/usuario.controller.js');

router.route('/')  
        .get(getUsu)
        .post(createUsu)        

router.route('/:id')
        .get(getUsuario)
        .delete(deleteUsu)
        .put(updateUsu)