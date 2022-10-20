export type UserType = {
    id: String;
    name: String;
    password: String;
    role: number;
};

export interface UserInput {
    input: { name: string; password: string; email: string };
}

export interface LoginInput {
    input: { email: string; password: string };
}
