import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './src/data/schema/schema';


const app = express();
const PORT = 4000;

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
