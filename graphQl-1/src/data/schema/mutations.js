import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import UserType from '../types/user.type';
import Users from '../users';
import ProductType from '../types/product.type';
import NewsType from '../types/news.type';

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Мутации',
  fields: {
    addUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        fullName: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, { id, fullName, email }) {
        Users.push({
          id,
          fullName,
          email,
        });
        return {
          id,
          fullName,
          email,
        };
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, { id, fullName, description }) {
        Users.push({
          id,
          fullName,
          description,
        });
        return {
          id,
          fullName,
          description,
        };
      },
    },
    addNews: {
      type: NewsType,
      args: {
        id: { type: GraphQLInt },
        date: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, { id, fullName, email }) {
        Users.push({
          id,
          fullName,
          email,
        });
        return {
          id,
          fullName,
          email,
        };
      },
    },
    changeUserProduct: {
      type: UserType,
      args: {
        userId: { type: GraphQLInt },
        productId: { type: GraphQLInt },
      },
      resolve(parent, { userId, productId }) {
        let currentUser;
        Users.forEach((user) => {
          if (user.id === userId) {
            currentUser = user;
            currentUser.product_id = productId;
          }
        });
        return currentUser;
      },
    },
  },
});

export default Mutations;
