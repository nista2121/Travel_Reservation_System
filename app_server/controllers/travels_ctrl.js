// const fs = require('fs');
// const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const { response } = require('express');
const request = require('request');
const apiOption = {
  server : 'http://localhost:3000'
}

/**Render travel list */
const renderTravelList = (req, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + ' - Travel';

  if(!(responseBody instanceof Array)){
    message = 'API lookup error';
    responseBody = [];
  }else { 
      if(!responseBody.length){
        message = "No trip exist in the Database";
      } 
  }
  res.render('travel', {
    title:pageTitle,
    trips:responseBody,
    message
  });
};

/* GET homepage */
const travelList = (req, res) => {  
    const path = '/api/trips';
    const requestOptions = {
      url:`${apiOption.server}${path}`,
      method:'GET',
      json:{},
    };
    console.log('>>travelController.travelList calling ' + requestOptions.url);

    request(requestOptions, 
      (err, { statusCode }, body) => {
        if(err){
          console.error(err);
        }
        renderTravelList(req, res, body);
    }
    );
  };

  module.exports = {
    travelList
  };