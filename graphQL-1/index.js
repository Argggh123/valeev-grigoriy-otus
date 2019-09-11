import { buildSchema } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';

const PORT = 4000;
const app = express();

const MyGraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => 'Hello World' };

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    rootValue: root,
    graphiql: true,
  }),
);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});
