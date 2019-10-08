import { GraphQLSchema } from 'graphql';
import Query from './query';
import Mutations from './mutations';

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutations,
});

export default schema;
