
/* GET about */
const about = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('about', { title: 'Travlr Geteway'});     
  };

  module.exports = {
    about
  };