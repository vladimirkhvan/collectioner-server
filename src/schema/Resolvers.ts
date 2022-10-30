import { createTheme } from './mutations/createTheme';
import { createCollection } from './mutations/createCollection';
import { logout } from './mutations/logout';
import { login } from './mutations/login';
import { getThemes } from './queries/getThemes';
import { getMe } from './queries/getMe';
import { getAllUsers } from './queries/getAllUsers';
import { createUser } from './mutations/createUser';

export const resolvers = {
    Query: {
        getAllUsers,
        getMe,
        getThemes,
    },

    Mutation: {
        createUser,
        login,
        logout,
        createCollection,
        createTheme,
    },
};
