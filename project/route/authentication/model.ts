import { Schema, model } from "../../interface";

const blackListSchema = new Schema({    
    
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    }
});

const BlackList = model("blacklist", blackListSchema);  

export default BlackList;