import { makeExecutableSchema } from 'graphql-tools';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import { resolvers } from './Resolvers';
import { typeDefs } from './TypeDefs';

export const schema = constraintDirective()(
    makeExecutableSchema({
        typeDefs: [constraintDirectiveTypeDefs, typeDefs],
        resolvers,
    }),
);
