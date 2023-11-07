import { gql } from '@apollo/client';

export const addNewUser = gql`
mutation Mutation($username: String!, $name: String!, $surname: String!, $country: String!, $dni: String!) {
  addUser(username: $username, name: $name, surname: $surname, country: $country, dni: $dni) {
    username
    personal {
      name
      surname
      country
      dni
    }
  }
}`
export const getAllUsers = gql`
query AllUsers {
  allUsers {
    username
    personal {
      name
      surname
      country
      dni
    }
  }
}`