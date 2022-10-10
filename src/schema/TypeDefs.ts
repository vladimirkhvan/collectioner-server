import {gql} from 'apollo-server-express';

export const typeDefs = gql`

    type Role{
        id: Int!
        role: String!
    }

    type Collection{
        id: ID!
        name: String!
        description: String!
        theme: 
    }

    type User {
        id: ID!
        name: String!
        password: String!
        role: String!
    }
`