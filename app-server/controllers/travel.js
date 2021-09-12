
/**GET travel view */
const travel = (req, res)=> {
    res.render('travel', {title: 'Travel Geteways'});
};

const about = (req, res)=> {
    res.render('about', {title: 'About Geteways'});
};

const contact = (req, res)=> {
    res.render('contact', {title: 'Contact Geteways'});
};

const meals = (req, res)=> {
    res.render('meals', {title: 'Meals Geteways'});
};

const news = (req, res)=> {
    res.render('news', {title: 'News Geteways'});
};

const index = (req, res)=> {
    res.render('index', {title: 'Home Geteways'});
};


const rooms = (req, res)=> {
    res.render('rooms', {title: 'Room Geteways'});
};

module.exports = {
    travel,
    about, 
    contact,
    meals,
    news, 
    index, 
    rooms

    };