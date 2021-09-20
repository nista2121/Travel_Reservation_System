const fs = require('fs');
const rooms_data = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));


/* GET Rooms */
const rooms = (req, res) => {  
 // pageTitle = process.env.npm_package_description + ' - Travlr Geteways';                  
    res.render('rooms', { title: 'Rooms Geteway', rooms_data});     
  };

  module.exports = {
    rooms
  };