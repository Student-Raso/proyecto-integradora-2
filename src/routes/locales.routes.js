const { Router } = require('express');
const {
  getAllLocales,
  getLocal,
  createLocal,
  deleteLocal,
  updateCita
} = require('../controllers/locales.controller');

const router = Router();

//router.get('/', "HOLA");
router.get('/', (req, res) => {
  res.send('BackEnd Estética')
})


router.get('/locales', getAllLocales);

router.get('/locales/:id', getLocal);

router.post('/locales', createLocal);

router.delete('/locales/:id', deleteLocal);

router.put('/locales/:id', updateCita);

module.exports = router;