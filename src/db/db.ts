import mongoose from "mongoose";

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = global as typeof global & { mongoose?: MongooseCache };
const cached: MongooseCache = globalWithMongoose.mongoose || { conn: null, promise: null };


const connectDB = async () => {
    if (cached.conn) {
        return cached.conn
    }
     if(!process.env.MONGO_DB_URL){
        throw new Error('MONGODB_URI is not present in the environment')
     }
    cached.promise=cached.promise || mongoose.connect(process.env.MONGO_DB_URL,{
        bufferCommands:false
    })
    cached.conn=await cached.promise
    return cached.conn
 

}

export default connectDB