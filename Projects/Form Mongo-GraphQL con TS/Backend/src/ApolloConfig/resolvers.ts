import mongoose from 'mongoose';
import { userModel } from './recipe.js';

// Define el esquema para el usuario

// Conecta a MongoDB Atlas
mongoose.connect('mongodb+srv://reiselrol8:Es2W2EtwiX6UwWE@cluster0.n1j9tad.mongodb.net/test', {
  dbName: 'TravelPortRamonRiosP01'
});

const resolvers = {
  Query: {
    allUsers: async () => {
      return userModel.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const personal = {
        name: args.name,
        surname: args.surname,
        country: args.country,
        dni: args.dni
      }
      const { username } = args;
      const newUser = new userModel({ username, personal });
      await newUser.save();
      return newUser;
    },
  },
};

export default resolvers;
