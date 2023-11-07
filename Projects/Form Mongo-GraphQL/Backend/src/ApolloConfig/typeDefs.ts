const typeDefs = ` #graphql

    type Personal {
        name: String!
        surname: String!
        country: String!
        dni: String!
    }
    type User {
        username: String!
        personal: Personal!
    }
    type Query { 
        allUsers: [User!]!
    }
    type Mutation {
        addUser(
            username: String!
            name: String!
            surname: String!
            country: String!
            dni: String!
        ): User
    }
`
export default typeDefs