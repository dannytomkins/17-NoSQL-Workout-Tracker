const mongoose = require("mongoose")
var Schema = mongoose.Schema
var workoutSchema = new Schema({
    day:
    {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: Array 
}, {
    toJSON: {
    virtuals: true 
    }
  })

  
workoutSchema
.virtual('totalDuration')
.get(function () {
    var totalDuration = 0  
    for (let i = 0; i < this.exercises.length; i++) {
       
        totalDuration = totalDuration + this.exercises[i].duration 
    }

  return  totalDuration;
});


var Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout