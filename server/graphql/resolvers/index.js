const transactionsResolvers = require('./transactions');
const usersResolvers = require('./users');
const categoriesResolvers = require('./categories');
// const Post = require('../../models/PostModel');

module.exports = {
	// This is modifier and graphql firstly goes through this modifier and add things
	Transaction: {
		...transactionsResolvers.Transaction
	},
  Query: {
		...usersResolvers.Query,
		...categoriesResolvers.Query,
    // ...transactionsResolvers.Query
	},

	UserList: {
		...usersResolvers.User
	},

	// Mutation: {
	// 	...usersResolvers.Mutation,
	// 	...postsResolvers.Mutation,
	// 	...commentsResolvers.Mutation
	// },

	// Subscription: {
	// 	...postsResolvers.Subscription
	// }
};