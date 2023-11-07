const typeDefs = ` #graphql

    type User {
        name: String!
        username: String!
        surname: String!
        county: String!
        dni: String!
    }
    type Query { 
        allUsers: [User!]!
    }
    type Mutation {
        addUser (
            name: String!
            username: String!
            surname: String!
            county: String!
            dni: String!
        ) : User
    }

`;
export default typeDefs;
