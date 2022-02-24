const { Router } = require('express');
const {
  getAllLocales,
  getLocal,
  createLocal
} = require('../controllers/locales.controller');

const router = Router();

//router.get('/', "HOLA");
router.get('/', (req, res) => {
  res.send('Birds home page')
})


router.get('/locales', getAllLocales);

router.get('/locales/:id', getLocal);

router.post('/locales', createLocal);

module.exports = router;