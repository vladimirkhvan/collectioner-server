import { db } from '../../models/index';

export const getAllUsers = async () => {
    const users = await db.user.findAll();
    return users;
};
