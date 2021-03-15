const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./app/deliverey/graphql/typeDef");
const resolvers = require("./app/deliverey/graphql/resolver");
const app = require("./app");
const mongodb = require("./config/mongoose");
const redis = require("./config/redisConfig");

//setup apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

//init db
mongodb.initDb();

//init redis////////////////////////

redis.on("error", function(error) {
  console.error(error);
});

redis.on("connect", function(error) {
  console.log("chache db connected !");
});
//////////////////////////////////////

const port = process.env.PORT || 4000;

app.listen(port, process.env.HOSTNAME, () => {
  console.log(`🚀 Server restapi ready at http://localhost:4000/apis`);
  console.log(
    `🚀 Server graphql ready at http://localhost:4000${server.graphqlPath}`
  );
});
