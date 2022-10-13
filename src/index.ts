import { db } from './models/index';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './schema/Resolvers';
import { typeDefs } from './schema/TypeDefs';

const main = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    try {
        await db.sequelize.sync();
        console.log('db was initialized successfully');
    } catch (error) {
        console.error('could not connect to database: ', error);
    }

    app.listen(process.env.PORT || 8800, () => {
        console.log(`server started on http://localhost:${process.env.PORT || 8800}/graphql`);
    });
};

main();
