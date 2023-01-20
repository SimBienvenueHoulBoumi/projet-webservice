const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const auth = require('../middlewares/auth');


const weatherCtrl = require('../controllers/weather');

// routes disponibles

router.get('/', [auth], weatherCtrl.getWeatherList);
router.get('/:id', [auth], weatherCtrl.getWeather);
router.post('/signup', weatherCtrl.createWeather);
router.put('/:id', [auth], weatherCtrl.updateWeather);
router.delete('/:id', [auth], weatherCtrl.deleteWeather);

module.exports = router;