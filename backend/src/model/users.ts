import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password : {type:String, select:false},
    
    aboutme: {type:String},
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: String },
      },
    birthdate: { type: Date }
},
{
    timestamps: true,
}
);
const User = mongoose.model('Users', userSchema);
export default User;
