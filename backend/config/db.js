import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harshgujrati2003_db_user:food_delpass@food-del.pcl3zke.mongodb.net/food-del').then(()=>console.log("DB connected"))
}