import { db } from './models/index';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './schema/Schema';
import cors from 'cors';

import session from 'express-session';
import connectRedis from 'connect-redis';
import { redis } from './redis';

const main = async () => {
    const app = express();
    app.set('trust proxy', process.env.NODE_ENV !== 'production')

    const RedisStore = connectRedis(session);

    app.use(
        cors<cors.CorsRequest>({
            credentials: true,
            origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
        }),
    );
    

    const server = new ApolloServer({ schema, context: ({ req, res }) => ({ req, res }) });

    app.use(
        session({
            store: new RedisStore({
                client: redis,
            }),
            name: 'qid',
            secret: '1234',
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 365,
                sameSite: "none",
            },
        }),
    );

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
