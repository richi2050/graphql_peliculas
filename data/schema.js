/*import { resolvers } from './resolvers'*/
import { importSchema } from 'graphql-import'
/*import { makeExecutableSchema } from 'graphql-tools'*/

const typeDefs = importSchema('data/schema.graphql');

/* ya no se ocuapa para Apollo server*/
//const schema = makeExecutableSchema({typeDefs, resolvers});

export { typeDefs }
