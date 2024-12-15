const gql = require("graphql-tag");

const transactionSchema = gql`
  type Query {
    transaction(id: Int!): Transaction
    transactions: [Transaction]
    getTransaction(id: Int!): Transaction
    getUserCategory(id: Int!): [Category]
  }
  type Mutation {
    updateTransaction(id: Int!, input: TransactionInput!): Transaction
    addTransaction(input: TransactionInput!): Transaction
    deleteTransaction(id: Int!): Transaction
  }
  type Transaction {
    id: Int!
    date : String!
    price : String!
    status : String!
    category : String!
    userid : String!
  }
  type Category {
    category : String!
    status : String!
    userid : String!
  }
  input TransactionInput {
    date : String!
    price : String!
    status : String!
    category : String!
    userid : String!
  }
`;

module.exports = transactionSchema;