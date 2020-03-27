import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './data/schema'
import { resolvers } from './data/resolvers'

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app})

app.listen(8000, () => {
  console.log(`El servidor estya funcionando correctamente ${server.graphqlPath}`);
})

/*

app.get('/', (req, res) => {
    res.send("Todo listo");
});

app.use('/graphql', graphqlHTTP({
  schema: schema, 
  graphiql: true}));
  
app.listen(8000, () => {
    console.log("El servidor estya funcionando correctamente");
})*/
