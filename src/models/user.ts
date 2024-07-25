import mongoose, { Document, Schema,Model } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const UserModel : Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel ;