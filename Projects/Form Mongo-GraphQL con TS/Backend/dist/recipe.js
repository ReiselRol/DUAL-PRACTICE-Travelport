import { model, Schema } from 'mongoose';
const userSchema = new Schema({
    name: String,
    username: String,
    surname: String,
    country: String,
    dni: String
});
export const userModel = model('Recipe', userSchema);
