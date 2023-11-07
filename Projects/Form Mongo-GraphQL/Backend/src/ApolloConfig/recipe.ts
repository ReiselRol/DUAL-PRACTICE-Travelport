import {model, Schema} from 'mongoose'

const userSchema = new Schema({
    username: String,
    personal: {
        name: String,
        surname: String,
        country: String,
        dni: String
    }
})

export const userModel = model('users', userSchema)
