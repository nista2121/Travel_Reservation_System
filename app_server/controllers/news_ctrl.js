

/* GET News */
const news = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('news', { title: 'News Geteway'});     
  };

  module.exports = {
    news
  };