import foodModel from "../models/foodModel.js";
import fs from 'fs'

const addFood = async (req, res) => {
    try {
        // Check if the file is uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required.",
            });
        }

        let image_filename = `${req.file.filename}`;
        
        // Create a new food item
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Save the food item to the database
        await food.save();

        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error(error);

        // Handle specific errors
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the food item.",
        });
    }
};

// all food list
const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood = async (req,res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,() => {})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

export { addFood, listFood, removeFood };