const weather = require('../models/weather');
const Weather = require('../models/weather');

exports.getWeatherList = (req, res, next) => {
    try {
        Weather.find()
           .then((list) => res.status(200).json(list))
           .catch((err) => {
              res.status(404).json({message: 'NOT FOUND'})
        })
    } catch (error) {
        console.error   
    }
}

exports.getWeather = (req, res, next) => {
    try {
        Weather.findById(req.params.id)
           .then((weather) => res.status(200).json(weather))
           .catch((err) => {
                console.log(err);
                res.status(404).json({message: 'NOT FOUND'});
        })
    } catch (error) {
        console.error
    }
}

exports.createWeather = (req, res, next) => {
    let newWeather = new Weather({
        date : req.body.date,
        temperature: req.body.temperature

    });

    try {
        newWeather.save()
                  .then((saved) => res.status(200).json(saved))
                  .catch(() => res.status(500).json({message: 'API REST ERROR: Pb avec la creation'}))
    } catch (error) {
        console.error   
    }
}

exports.updateWeather = (req, res, next) => {

    Weather.findById(req.params.id)
        .then((obj) => {
            req.body.date = new Date();
            req.body.modificationDate = new Date();
            Weather.updateOne({ _id: obj.id}, req.body)
                .then((result) => res.status(200).json(result))
                .catch((err) => res.status(500).json({message: 'CANNOT UPDATE', error: err}))
        })
        .catch(() => res.status(404).json({message: 'NOT FOUND'}))
}

exports.deleteWeather = (req, res, next) => {
    Weather.findByIdAndDelete(req.params.id)
        .then((result) => {
         if (result) {
            res.status(200).json(result)
         } else {
            res.status(500).json({message: 'ALREADY DELETED'})
         }
        })
        .catch((err) => {
            res.status(400).json({message: 'NOT FOUND', error: err})
        })
}