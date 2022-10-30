import { db } from "../../models";
import { LoginInput, UserType } from "src/shared/constants/modelsTypes";
import { userContext } from "src/shared/context/userContext";
import bcrypt from 'bcrypt';

export const login = async (_: any, { input }: LoginInput, context: userContext): Promise<UserType | null> => {
    const user = await db.user.findOne({ where: { email: input.email } });

    if (!user) {
        return null;
    }

    const isValid = await bcrypt.compare(input.password, user.getDataValue('password'));

    if (!isValid) {
        return null;
    }

    if (!context.req.session) {
        return null;
    }

    context.req.session.userId = user.getDataValue('id');

    return user.toJSON();
}