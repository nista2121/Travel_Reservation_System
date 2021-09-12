
/*GET homepage*/
const index = (req, res) => {
    res.render('index', {title: 'Travlr Geteways'});
};

module.exports = {
    index
};