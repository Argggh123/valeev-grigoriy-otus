import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import _ from 'lodash';
import Users from '../users';
import UserType from '../types/user.type';
import ProductType from '../types/product.type';
import Products from '../products';
import NewsType from '../types/news.type';
import News from '../news';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query for schema',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      descriptions: 'List of users',
      resolve: () => Users,

    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
      },
      description: 'user',
      resolve: (source, args) => {
        const { id } = args;
        return _.find(Users, (user) => user.id === id);
      },
    },
    orders: {
      type: new GraphQLList(ProductType),
      descriptions: 'List of orders',
      resolve: () => Products,
    },
    news: {
      type: new GraphQLList(NewsType),
      description: 'List of news',
      resolve: () => News,
    },
  }),
});

export default Query;
