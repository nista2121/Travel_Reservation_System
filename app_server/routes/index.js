var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/travel_ctrl')

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET home page. */
router.get('/index', ctrlMain.index);

/**GET travel page */
router.get('/travel', ctrlMain.traveler);

/**GET about page */
router.get('/about', ctrlMain.about);

/**GET rooms page */
router.get('/rooms', ctrlMain.rooms);

/**GET meals page */
router.get('/meals', ctrlMain.meals);

/**GET meals page */
router.get('/news', ctrlMain.news);

/**GET contact page */
router.get('/contact', ctrlMain.contact);


//export the router
module.exports = router;
