const express = require("express");
const graphHTTP = require("express-graphql");
const app = express();

const schema = require("./schema");

app.use(
  "/graphql",
  graphHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 4000);
console.log("Graph is listening...");
