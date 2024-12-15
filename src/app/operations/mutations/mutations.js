import gql from "graphql-tag";

export const ADD_ITEM = gql`
  mutation AddItem($input: ItemInput!) {
    addItem(input: $input) {
      id
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: Int!, $input: ItemInput!) {
    updateItem(id: $id, input: $input) {
      id
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export const ADD_TRANSACTIONS = gql`
  mutation AddTransactions($input: TransactionInput!) {
    addTransactions(input: $input) {
      id
    }
  }
`;

export const UPDATE_TRANSACTIONS = gql`
  mutation UpdateTransactions($id: Int!, $input: TransactionInput!) {
    updateTransactions(id: $id, input: $input) {
      id
    }
  }
`;

export const DELETE_TRANSACTIONS = gql`
  mutation DeleteTransactions($id: Int!) {
    deleteTransactions(id: $id) {
      id
    }
  }
`;