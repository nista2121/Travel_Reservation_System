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

//add trip
const tripsAddTrip = async(req, res) => {
    Model.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    },
    (err,trip) => {
        if(err){
            return res.status(400).json(err); //bad request
        }else{
            return res.status(201).json(trip); //created
        }
    });
}

const tripsUpdatetrip = async(req, res) => {
    console.log(req, body);
    Model.findOneAndUpdate({'code': req.params.tripCode }, {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description 
    }, {new: true})
        .then(trip => {
            if(!trip) {
                return res.status(404).send({message: "trip not found with code : " + req.params.tripCode });
            } 
            res.send(trip);
        }) .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({ message: "trip not found with code : " + req.params.tripCode});
            } 
            return res.status(500).json(err);
        });
}
module.exports = {
     tripsList,
     tripsFindByCode,
     tripsAddTrip,
     tripsUpdatetrip
    };
