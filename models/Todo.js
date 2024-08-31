const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },
    description : {
        type : String,
        
    },
    isCompleted : {
        type : String,
        default : false,
    }
})
const Todo = mongoose.model("Todo",TodoSchema)

module.exports= Todo;