import express from 'express'
import {ApolloServer, gql} from 'apollo-server-express'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import mongoose from 'mongoose'
import keys from './keys'
import Context from './mongoose/Context'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sparkdev'/*keys.mongoId,*/,{ useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('Connected to database');
});

const server = new ApolloServer({ typeDefs, resolvers,context:Context});
 
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);