import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FoodApp:FoodApp@food-delivery-app-db.6u1qm.mongodb.net/?retryWrites=true&w=majority&appName=Food-Delivery-App-DB')
    .then(() => console.log("DB Connected"))
}