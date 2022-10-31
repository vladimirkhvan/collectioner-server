import { getItems } from './queries/getItems';
import { getCustomFields } from './queries/getCustomFields';
import { getTags } from './queries/getTags';
import { createItem } from './mutations/createItem';
import { getCollections } from './queries/getCollections';
import { getOneCollection } from './queries/getOneCollection';
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
        getCollections,
        getOneCollection,
        getTags,
        getCustomFields,
        getItems
    },

    Mutation: {
        createUser,
        login,
        logout,
        createCollection,
        createTheme,
        createItem
    },
};
