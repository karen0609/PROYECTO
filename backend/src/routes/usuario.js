const {Router} = require('express');    
const { get } = require('mongoose');
const router = Router();

router.route('/')  
        .get()
        .post()

router.route('/:id')
        .get()
        .delete()
        .put()

module.exports = router;