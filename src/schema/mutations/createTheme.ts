import { db } from '../../models';
import { userContext } from 'src/shared/context/userContext';
import { ThemeInput } from 'src/shared/constants/modelInputs/Theme';
import { ThemeType } from 'src/shared/constants/modelTypes/Theme';

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
