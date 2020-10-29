var db = require("../models");

module.exports = function(app){
    
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate( req.params.id, { $push: { exercises: req.body} })
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
    })
};
