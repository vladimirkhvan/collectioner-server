import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        password: String!
        email: String!
        role: Int!
    }
    type Role {
        id: Int!
        role: String!
    }

    type Theme {
        id: Int!
        name: String!
    }

    type Collection {
        id: ID!
        authorId: String!
        name: String!
        description: String!
        theme: Int!
        image: String
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
        getAllUsers: [User!],
        getMe: User,
    }

    input UserInput {
        name: String! @constraint( minLength: 2, pattern: "^[0-9a-zA-Z]*$", maxLength: 255)
        password: String! @constraint( minLength: 2, maxLength: 255)
        email: String! @constraint(format: "email", maxLength: 255)
    }

    input LoginInput {
        email: String! @constraint(format: "email", maxLength: 255)
        password: String! @constraint( minLength: 2, maxLength: 255)
    }

    input CollectionInput {
        name: String! @constraint(minLength: 2 maxLength: 255)
        description: String! @constraint( minLength: 2, maxLength: 255)
        theme: Int! @constraint( min: 0 )
        image: String
    }

    input ThemeInput {
        name: String! @constraint(minLength: 2 maxLength: 255)
    }

    type Mutation {
        createUser(input: UserInput!): User
        login(input: LoginInput): User
        logout: Boolean
        createCollection(input: CollectionInput!): Collection
        createTheme(input: ThemeInput!): Theme
    }
`;
