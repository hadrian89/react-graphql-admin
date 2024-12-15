const { AuthenticationError, UserInputError } = require('apollo-server');

const User = require('../models/userlist.model');
const Category = require('../models/category.model');
const checkAuth = require('../utilizers/checkAuth');

module.exports = {
	Category: {
		user: async parent => {
			try {
				const user = await User.findById(parent.userId);
				return user;
			} catch (err) {
				throw new Error(err);
			}
		}
	},
	Query: {
		async getCategories() {
			try {
				const categories = await Category.find().sort({ createdAt: -1 });
				return categories;
			} catch (err) {
				throw new Error(err);
			}
		},

		async getCategory(_, args) {
			try {
				const categories = await Category.findById(args.id);

				if (categories) {
					return categories;
				} else {
					throw new Error('categories not found');
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		async getUserCategory(_, args) {
			try {
				const categories = await Category.find({ userid: args.id });

				if (categories) {
					return categories;
				} else {
					throw new Error('categories not found');
				}
			} catch (err) {
				throw new Error(err);
			}
		}
	},

	Mutation: {
		async createCategory(_, args, context) {
			const user = checkAuth(context);

			if (args.body.trim() === '') {
				throw new UserInputError('transaction body is not provided');
			}

			const newCategory = new Category({
				body: args.body,
				userid: user._id,
				createdAt: new Date().toISOString()
			});

			const category = await newCategory.save();

			context.pubsub.publish('NEW_CATEGORY', {
				newCategory: category
			});
			return category;
		},

		async deleteCategory(_, args, context) {
			const user = checkAuth(context);

			// Check if this user has posted this post
			try {
				const category = await Category.findById(args.postId);

				if (user.id === category.userid.toString()) {
					await category.delete();
					return 'category deleted successfully';
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
		newCategory: {
			subscribe: (_, __, context) =>
				context.pubsub.asyncIterator('NEW_CATEGORY')
		}
	}
};