import { db } from '../models/index';
import bcrypt from 'bcrypt';

export const resolvers = {
    Query: {
        async getAllUsers() {
            const users = await db.user.findAll();
            return users;
        },
    },

    Mutation: {
        async createUser(parent: any, args: { name: string; password: string, email: string }) {
            const salt = await bcrypt.genSalt(5);
            parent;
            const hashedPassword = await bcrypt.hash(args.password, salt)
            const user = await db.user.create({
                name: args.name,
                password: hashedPassword,
                email: args.email,
                role: 1,
            });

            console.log(user);

            return user;
        },
    },
};
