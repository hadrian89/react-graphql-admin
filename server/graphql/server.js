const { ApolloServer } = require('apollo-server');
const { PubSub } = require('graphql-subscriptions');
const mongoose = require('mongoose');
const config = require("./config/default.config.js");

const db = config.dbUrl;
const typeDefs = require('./typeDefs.js');
const resolvers = require('./resolvers');

const pubsub = new PubSub();

const start = new Date().getTime();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	// Context gets the http requests like headers
	context: ({ req }) => ({ req, pubsub })
});

const port = process.env.PORT || 4000;

mongoose
	.connect(db, {
		useNewUrlParser: true,
		// useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => {
		const end = new Date().getTime();
		console.log((end - start) / 1000);
		console.log('Mongodb connected');
		return server.listen({ port });
	})
	.then(res => {
		console.log(`Server running at ${res.url}`);
	})
	.catch(err => console.log(err));