const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET homepage */
const travel = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('travel', { title: 'Travlr Geteway', trips});     
  };

  module.exports = {
    travel
  };