import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { product } from '../simple-data.js';
const productType = new GraphQLObjectType({
    name:"productType",
    fields: {
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        price:{type:GraphQLFloat},
        priceAfterDiscount:{type:GraphQLFloat},
        quantity:{type:GraphQLString},
        imgUrl : {type:GraphQLString},
        categoryId:{type:GraphQLID}
    }
})
const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields:{
        getProducts:{
            type:new GraphQLList(productType),
            resolve:(parent,args)=>{
                return product
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: rootQuery,
});
