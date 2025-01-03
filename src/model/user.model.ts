import { Schema, model, models} from "mongoose";


const userSchema=new Schema({
    clerkId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const User=models.User || model('User',userSchema)

export default User