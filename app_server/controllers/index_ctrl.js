const fs = require('fs');
const home_data = JSON.parse(fs.readFileSync('./data/home.json', 'utf8'));

/* GET homepage */
const index = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('index', { title: 'Travlr Geteway', home_data });     
  };

  module.exports = {
    index
  };