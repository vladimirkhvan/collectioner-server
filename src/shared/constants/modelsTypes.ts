export type UserType = {
    id: string;
    name: string;
    password: string;
    role: number;
};

export type CollectionType = {
    id: string;
    name: string;
    authorId: string;
    description: string;
    theme: number;
    image: string;
};

export type ThemeType = {
    id: string;
    name: string;
}

export interface UserInput {
    input: { name: string; password: string; email: string };
}

export interface LoginInput {
    input: { email: string; password: string };
}

export interface CollectionInput {
    input: { name: string; authorId: string; description: string; theme: number; image: string };
}

export interface ThemeInput {
    input: { name: string };
}
