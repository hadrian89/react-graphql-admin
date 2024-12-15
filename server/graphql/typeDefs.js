const { gql } = require('apollo-server');

// Query Type: String! -> ! means required
module.exports = gql`

	type Transaction {
		_id: ID!
		date: String!,
        category: String!,
        title: String!,
        price: String!,
        userid: String!,
        status:String!
	}

    type Query {
		getUsers: [UserList]
		getUser(id: ID!): UserList
		getTransactions: [Transaction]
		resetPassword(token: String!): Boolean!
		getCategories: [Categories]
		getCategory(id: ID!): Categories
		getUserCategory(id: ID!): [Categories]
    }

    type Categories {
		category: String
		status: String
		userid: String
	}
    
    type Menus {
        _id: ID!
		id: String!
		name: String!
		to: String!
		status: String!
    }

    type UserList {
		_id: ID!
        name: String!
        username: String!
        password: String!
        email: String!
        status: String!
    }
`;