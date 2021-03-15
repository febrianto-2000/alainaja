const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: String
    username: String
    password: String
  }

  type Query {
    checkNumber(number: Int!): Boolean!
    fetchUser: [User]!
  }
`;

module.exports = typeDefs;
