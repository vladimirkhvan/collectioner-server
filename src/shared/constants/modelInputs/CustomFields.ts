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