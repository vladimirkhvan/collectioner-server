import { db } from '../models/index';

export const resolvers = {
    Query: {
        async getAllUsers() {
            const users = await db.user.findAll();
            return users;
        },
    },

    Mutation: {
        async createUser( parent:any , args: {name: String, password: String}){
            parent;
            const user = await db.user.create({
                name: args.name,
                password: args.password,
                role: 1
            })

            return user;
        }
    }
};
