import { db } from '../../models/index';
import { userContext } from "src/shared/context/userContext";
import { UserType } from 'src/shared/constants/modelTypes/User';

export const getMe = async (_: any, _args: any, context: userContext): Promise<UserType | null> =>  {
    if (!context.req.session!.userId) {
        return null;
    }

    const user = await db.user.findOne({ where: { id: context.req.session!.userId } });

    if (!user) {
        return null;
    }

    return user.toJSON();
}