
/* GET Contact */
const contact = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('contact', { title: 'Contact Geteway'});     
  };

  module.exports = {
    contact
  };