const { Router } = require('express');
const { 
    getAllCitas,
    getCita,
    createCita,
    deleteCita,
    updateCita,
    cancelCita
} = require('../controllers/citas.controller');

const router = Router();

router.get('/citas', getAllCitas);

router.get('/citas/:id', getCita);

router.post('/citas', createCita);

router.delete('/citas/:id', deleteCita);

router.put('/citas/:id', updateCita);

router.put('/cancelarcita/:id', cancelCita);

module.exports = router;