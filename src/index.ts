import { db } from './models/index';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';



const main = async () => {
    const app = express();
    const server = new ApolloServer({typeDefs, resolvers});
    server.applyMiddleware({app})

    try {
        await db.sequelize.sync();
        console.log('db was initialized successfully');
    } catch (error) {
        console.error('could not connect to database: ', error);
    }

    app.listen(process.env.PORT || 8800, () => {
        console.log('server is running');
    });
};

main();
