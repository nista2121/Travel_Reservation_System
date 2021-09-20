const fs = require('fs');
const meals_data = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET Meals */
const meals = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('meals', { title: 'Meals', meals_data});     
  };

  module.exports = {
    meals
  };