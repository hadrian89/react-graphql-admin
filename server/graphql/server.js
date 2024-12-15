// const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
// const { buildASTSchema } = require("graphql");
// const cors = require("cors");
// const toDoSchema = require("./schema/toDo");
// const transactionSchema = require("./schema/transaction");
// const toDoResolvers = require("./resolver/resolver");
// const transactionResolvers = require("./resolver/transaction");

// // GraphQL schema
// const schema = buildASTSchema(toDoSchema);
// const schemaTransaction = buildASTSchema(transactionSchema);

// // Create an express server and a GraphQL endpoint
// const app = express();
// app.use(cors());
// app.use(
//   "/graphqlApi",
//   graphqlHTTP({
//     schema,
//     rootValue: toDoResolvers,
//     graphiql: true,
//   })
// );
// app.use(
//   "/transactionApi",
//   graphqlHTTP({
//     schema:schemaTransaction,
//     rootValue: transactionResolvers,
//     graphiql: true,
//   })
// );

// app.listen(4000, () =>
//   console.log(
//     "🚀 Express GraphQL Server now running on localhost:4000/graphqlApi"
//   )
// );

const { ApolloServer } = require('apollo-server');
const { PubSub } = require('graphql-subscriptions');
const mongoose = require('mongoose');
const config = require("./config/database.config.js");

const db = config.url;
// console.log(config,'db')
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