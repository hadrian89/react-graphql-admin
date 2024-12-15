const { AuthenticationError, UserInputError } = require('apollo-server');

const Transaction = require('../models/monthly.model');//Transactions
const User = require('../models/userlist.model');
const checkAuth = require('../utilizers/checkAuth');

module.exports = {
	// Transaction: {
	// 	user: async parent => {
	// 		try {
	// 			const user = await User.findById(parent.userId);
	// 			return user;
	// 		} catch (err) {
	// 			throw new Error(err);
	// 		}
	// 	}
	// },
	Query: {
		async getTransactions() {
			try {
				const transactions = await Transaction.find().sort({ createdAt: -1 });
				return transactions;
			} catch (err) {
				throw new Error(err);
			}
		},

		async getTransaction(_, args) {
			try {
				const transaction = await Transaction.findById(args.transactionId);

				if (transaction) {
					return transaction;
				} else {
					throw new Error('Transaction not found');
				}
			} catch (err) {
				throw new Error(err);
			}
		}
	},

	Mutation: {
		async createTransaction(_, args, context) {
			const user = checkAuth(context);

			if (args.body.trim() === '') {
				throw new UserInputError('transaction body is not provided');
			}

			const newTransaction = new Transaction({
				body: args.body,
				userId: user.id,
				createdAt: new Date().toISOString()
			});

			const transaction = await newTransaction.save();

			context.pubsub.publish('NEW_POST', {
				newTransaction: transaction
			});
			return transaction;
		},

		async deleteTransaction(_, args, context) {
			const user = checkAuth(context);

			// Check if this user has posted this post
			try {
				const transaction = await Transaction.findById(args.postId);

				if (user.id === transaction.userid.toString()) {
					await transaction.delete();
					return 'transaction deleted successfully';
				} else {
					throw new AuthenticationError(
						'Action not allowed. You are not the author of this post'
					);
				}
			} catch (err) {
				throw new Error(err);
			}
		},

	},

	Subscription: {
		newTransaction: {
			subscribe: (_, __, context) =>
				context.pubsub.asyncIterator('NEW_TRANSACTION')
		}
	}
};