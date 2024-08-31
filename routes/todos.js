const express = require("express");
const Todo = require("../models/Todo")

const router = express.Router();

//creating a todo
router.post('/', async(req,res)=>{
    try {
    const data = req.body
    const newTodo = new Todo (data);
        const todo = await newTodo.save();
        console.log("data saved");
        res.status(200).json(todo)
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

//get all todos
router.get('/',async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.status(201).json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'})  
    }
})

//update todos
router.put('/:id',async(req,res)=>{
    
    try {
        const todoId = req.params.id;
        const updateTodo = req.body;

        const response = await Todo.findByIdAndUpdate(todoId,updateTodo,{
            new:true,//Return the updateddocument
            runValidators:true// Run Mongoose validation
        })
        if(!response){
            return res.status(404).json({ msg: 'Todo not found' });
        }
        console.log("data updated");
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(400).json({error:'Invalid Type '})
    }
});

//delete todos
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    console.log("data deleted");
    res.status(200).json({ message: 'Todo deleted' });
  });

module.exports = router;