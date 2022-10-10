import { gql } from 'apollo-server-express';

//TODO use @secret for password it will automatically encrypt it with bcrypt

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        password: String!
        role: Int!
    }
    type Role {
        id: Int!
        role: String!
    }

    type Theme {
        id: Int!
        theme: String!
    }

    type Collection {
        id: ID!
        name: String!
        description: String!
        theme: Int!
    }

    type Tag {
        id: Int!
        title: String!
    }

    type Item {
        id: ID!
        collection_id: ID!
        name: String!
    }

    type Items_tags {
        id: Int!
        tag_id: Int!
        item_id: ID!
    }

    enum ATTRIBUTE_TYPE {
        BOOLEAN
        INTEGER
        TEXT
        STRING
        DATE
    }

    type Custom_field {
        id: ID!
        attribute: String!
        attribute_type: ATTRIBUTE_TYPE!
        collection_id: ID!
    }

    type Custom_field_value {
        id: ID!
        item_id: ID!
        custom_field_id: ID!
        data_value: String
        text_value: String
        int_value: Int
        boolean_value: Boolean
        date_value: String
    }

    type Query {
        getAllUsers: [User!]!
    }

    type Mutation{
        createUser(name: String!, password: String!): User
    }
`;
