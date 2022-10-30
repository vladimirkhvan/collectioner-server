import { db } from '../../models/index';
import { userContext } from "src/shared/context/userContext";
import { ThemeType } from 'src/shared/constants/modelTypes/Theme';

export const getThemes = async (_: any, _args: any, context: userContext): Promise<ThemeType[] | null> => {
    if (!context.req.session!.userId) {
        return null;
    }

    const themes = await db.theme.findAll();

    if (!themes) {
        return null;
    }

    return themes.map((theme) => theme.toJSON());
}