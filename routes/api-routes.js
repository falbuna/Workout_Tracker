var db = require("../models");

module.exports = function(app){
    // This is for the get request the information form the workouts collection in the workout database.
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
    });
    // This is for the post request to create a new workout in the workouts collection of the workout database.
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
    // This is for the put request to push the exercises to the workouts collection in the workout database.
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate( req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    // This is for the get request to get the workout data for the stats collection.
    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
    })
};
