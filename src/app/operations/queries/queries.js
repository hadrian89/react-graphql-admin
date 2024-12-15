import gql from "graphql-tag";

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      category
      description
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query GetTransactions {
    transactions {
      id
      date
      category
      price
      status
      userid
    }
  }
`;