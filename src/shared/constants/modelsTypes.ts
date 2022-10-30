export type UserType = {
    id: string;
    name: string;
    password: string;
    role: number;
};

export interface CollectionType {
    id: string;
    name: string;
    authorId: string;
    description: string;
    theme: number;
    image: string;
}

export type CustomFieldsType = {
    id: number;
    attribute: string;
    attribute_type: string;
    collection_id: string;
};

export interface CreateCollectionReturn extends CustomFieldsType {
    fields?: CustomFieldsType[];
}

export type ThemeType = {
    id: string;
    label: string;
};

export interface UserInput {
    input: { name: string; password: string; email: string };
}

export interface LoginInput {
    input: { email: string; password: string };
}

export enum TYPES {
    STRING = "STRING",
    NUMBER = "NUMBER",
    BOOL = "BOOL",
    DATE = "DATE",
    TEXT = "TEXT",
}

export interface CustomFieldsInput {
    attribute: string;
    attribute_type: TYPES;
}

export interface CollectionInput {
    input: {
        name: string;
        authorId: string;
        description: string;
        theme: number;
        image?: string;
        fields?: CustomFieldsInput[];
    };
}

export interface ThemeInput {
    input: { label: string };
}
