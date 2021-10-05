const mongoose = require('mongoose');
const Model = mongoose.model('trips');

//Get: /trips - getting list of all trips
const tripsList = async(req, res) => {
    Model
        .find({})  //find all trips
        .exec((err, trips) => {
        if(!trips){
            return res
              .status(404)
              .json({"message": "No trip found!"});
        }else if(err) {
            return res
               .status(404)
               .json(err);
        } else {
            return res
               .status(200)
               .json(trips);
        }

    });
};


//Get: /trips/:tripCode - return a single trip
const tripsFindByCode = async (req, res) => {
    Model
        .find({'code': req.params.tripCode})  //find a single trip
        .exec((err, trip) => {
        if(!trip){   
            return res
              .status(404)
              .json({"message": "No trip code found!"});
        }else if(err) {
            return res
               .status(404)
               .json(err);
        } else {
            return res
               .status(200)
               .json(trip);
        }

    });
};

module.exports = {
     tripsList,
     tripsFindByCode
    };
