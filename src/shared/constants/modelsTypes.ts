export type UserType = {
    id: String;
    name: String;
    password: String;
    role: number;
};

export interface UserInput {
    input: { name: string; password: string; email: string };
}
