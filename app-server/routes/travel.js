
var express = require('express');
var router = express.Router();

//import travel controller
const controller = require('../controllers/travel')

/* GET Travel page. */
router.get('/travel', controller.travel);

/* GET Room page. */
router.get('/rooms', controller.rooms);

/* GET Meals page. */
router.get('/meals', controller.meals);

/* GET News page. */
router.get('/news', controller.news);

/* GET About page. */
router.get('/about', controller.about);

/* GET Contact page. */
router.get('/contact', controller.contact);

//export router
module.exports = router;