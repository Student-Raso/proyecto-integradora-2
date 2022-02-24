const { Router } = require('express');

const {
  getAllCortes,
  getCorte,
  createCorte
} = require('../controllers/cortes.controller');

const router = Router();

router.get('/cortes', getAllCortes);

router.get('/cortes/:id', getCorte);

router.post('/cortes', createCorte);

module.exports = router;