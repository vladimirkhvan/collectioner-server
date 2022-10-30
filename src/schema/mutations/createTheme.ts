import { db } from '../../models';
import { ThemeInput, ThemeType } from 'src/shared/constants/modelsTypes';
import { userContext } from 'src/shared/context/userContext';

export const createTheme = async (
    _: any,
    { input }: ThemeInput,
    context: userContext,
): Promise<ThemeType | null> => {
    if (!context.req.session!.userId) {
        return null;
    }

    const theme = await db.theme.create({
        label: input.label,
    });

    return theme.toJSON();
};
