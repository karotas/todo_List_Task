import express from "express"
import modal from "../schemas/schema.js"
import {errorRes,successRes} from "../util/responseModal.js"
let Router=express.Router()
Router.get("/allTodos",async (req,res)=>{
    try {
    
        let todos=await modal.find({})
        
        res.json({
            ...new successRes("successfully fetched."),
            data:todos
        }).status(200)
    } catch (error) {
      
        res.json(new errorRes("try again.")).status(400)
    }

})
Router.post("/addTodos",async (req,res)=>{
 
    try {
  
        let todos=await modal.create({
            ...req.body
        })

        res.json({
            ...new successRes("successfully fetched."),
    
        }).status(200)
    } catch (error) {
   

        res.json(new errorRes("try again.")).status(400)
    }

})
Router.post("/editTodos",async (req,res)=>{

    let id =req.body[1]._id
    let data=req.body[0]
    try {
  
        const updatedTodo = await modal.findByIdAndUpdate(
            id,
            { todo:data.todo,completed:data.completed },
            { new: true, runValidators: true }
          );
   
        res.json({
            ...new successRes("successfully fetched."),
    
        }).status(200)
    } catch (error) {
      

        res.json(new errorRes("try again.")).status(400)
    }

})
Router.delete("/delTodos",async (req,res)=>{


    try {

        let deltedTodos=await modal.deleteOne({_id:req.body._id})
    
     
        res.json({
            ...new successRes("successfully fetched."),
    
        }).status(200)
    } catch (error) {
  

        res.json(new errorRes("try again.")).status(400)
    }

})
export default Router