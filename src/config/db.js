import mongoose, { mongo } from "mongoose";

async function mongoDb() {
    mongoose.connect(process.env.MONGO_API_KEY);
    return mongoose.connection;
}

export default mongoDb;