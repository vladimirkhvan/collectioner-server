import { db } from './models/index';
import express from 'express';

const main = async () => {
    const app = express();

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
