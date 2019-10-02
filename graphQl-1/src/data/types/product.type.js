import {
  GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Orders',
  description: 'Заказы пользователей',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
  }),
});

export default ProductType;
