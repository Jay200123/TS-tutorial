import { IUser, Schema, model } from "../../interface";
import { RESOURCE } from "../../constants";

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});

const User = model<IUser>(RESOURCE.USER, userSchema);
export default User