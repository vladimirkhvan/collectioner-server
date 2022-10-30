import bcrypt from 'bcrypt';
import { UserInput } from 'src/shared/constants/modelInputs/User';
import { UserType } from 'src/shared/constants/modelTypes/User';
import { db } from "../../models";

export const createUser = async (_: any, { input }: UserInput): Promise<UserType> => {
    const salt = await bcrypt.genSalt(5);
    console.log(salt, input);
    const hashedPassword = await bcrypt.hash(input.password, salt);
    const user = await db.user.create({
        name: input.name,
        password: hashedPassword,
        email: input.email,
        role: 1,
    });

    return user.toJSON();
}