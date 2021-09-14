
/* GET homepage */
const index = (req, res) => {                    
    res.render('index', { title: 'Travlr Geteways' });     
  };


  /* GET 'about' page */
const about = (req, res) => {                    
  res.render('about', { title: 'About' });       
};


 /* GET 'travel' page */
 const traveler = (req, res) => {                    
  res.render('travel', { title: 'Travel' });       
};


/* GET 'Rooms' page */
const rooms = (req, res) => {
  res.render('rooms', { title: 'Rooms' });
};

/* GET 'Meals' page */
const meals = (req, res) => {
  res.render('meals', { title: 'Meals' });
};

/* GET 'News' page */
const news = (req, res) => {
  res.render('news', { title: 'News' });
};
/* GET 'Contact' page */
const contact = (req, res) => {
  res.render('contact', { title: 'Contact' });
};


  module.exports = {                               
   index,
   traveler, 
   news,
   about ,
   rooms,
   meals,
   contact                                        
  };