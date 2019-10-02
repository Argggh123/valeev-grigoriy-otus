import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const NewsType = new GraphQLObjectType({
  name: 'News',
  description: 'Новости на сайте',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    date: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});

export default NewsType;
