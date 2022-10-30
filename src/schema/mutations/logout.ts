import { userContext } from 'src/shared/context/userContext';

export const logout = (_: any, _args: any, context: userContext): Promise<Boolean> => {
    return new Promise((res, rej) => {
        context.req.session?.destroy((err) => {
            if (err) {
                console.log(err);
                rej(false);
            }
            context.res.clearCookie('qid');
            res(true);
        });
    });
};
