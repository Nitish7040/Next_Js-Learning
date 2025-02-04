import mongoose , {Schema, Document, mongo} from "mongoose";

export interface Message extends Document{
    content: string,
    createdAt: Date

}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String, 
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export interface User extends Document{
    Username: string,
    Email: string,
    Password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAccepting: boolean,
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    Username: {
        type: String, 
        required: [true , "Please provide a username"]
    },
    Email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please provide a valid email"]
      },
    Password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    verifyCode: {
        type: String,
        required: [true, "Please provide a verification code"],
        select: false
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Please provide a verification code expiry date"]
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isAccepting: {
        type: Boolean,
        required: true,
        default: true
    },
    messages: [MessageSchema]

});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;

