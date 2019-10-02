import {
  GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString,
} from 'graphql';
import _ from 'lodash';
import ProductType from './product.type';
import Products from '../products';

const UserType = new GraphQLObjectType({
  name: 'Users',
  description: 'пользователи магазина',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    fullName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    product: {
      type: ProductType,
      resolve: (user) => _.find(Products, (order) => order.id === user.product_id),
    },
  }),
});

export default UserType;
