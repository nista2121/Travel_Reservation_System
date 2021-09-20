const express = require('express');
const router = express.Router();


const ctrlMain = require('../controllers/index_ctrl');
const ctrlTravel = require('../controllers/travels_ctrl');  
const ctrlAbout = require('../controllers/about_ctrl'); 
const ctrlMeals = require('../controllers/meals_ctrl'); 
const ctrlNews = require('../controllers/news_ctrl');   
const ctrlRooms = require('../controllers/rooms_ctrl'); 
const ctrlContact = require('../controllers/contact_ctrl'); 


/* GET homepage. */
router.get('/', ctrlMain.index);    

/* GET homepage. */
router.get('/index', ctrlMain.index);

/**GET travel page */
router.get('/travel', ctrlTravel.travel);

/**GET about page */
router.get('/about', ctrlAbout.about);

/**GET rooms page */
router.get('/rooms', ctrlRooms.rooms);

/**GET meals page */
router.get('/meals', ctrlMeals.meals);

/**GET meals page */
router.get('/news', ctrlNews.news);

/**GET contact page */
router.get('/contact', ctrlContact.contact);


module.exports = router;

