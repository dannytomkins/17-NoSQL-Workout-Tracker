const router = require("express").Router()

const db = require("../models")

router.get("/api/workouts", function(req, res){
    db.Workout.find().then(function(results){
        res.json(results)
    })
})
router.post("/api/workouts", function(req, res){
    db.Workout.create(req.body).then(function(results){
        res.json(results)
    })
})

router.put("/api/workouts/:id", function(req, res){
    const id = req.params.id
    db.Workout.update({
        _id: id
    }, {
        $push:{
            exercises: req.body
        }
    }).then(function(results){
        res.json(results)
    })
})

module.exports = router