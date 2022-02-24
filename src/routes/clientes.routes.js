const {Router} = require('express');

const {
  getAllClientes,
  getCliente,
  createCliente
} = require('../controllers/clientes.controller');

const router = Router();

router.get('/clientes', getAllClientes);

router.get('/clientes/:id', getCliente);

router.post('/clientes', createCliente);

module.exports = router;
