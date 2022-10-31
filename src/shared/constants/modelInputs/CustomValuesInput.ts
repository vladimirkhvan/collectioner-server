import { TYPES } from "./CustomFields";

export interface CustomValuesInput {
    attribute_type: TYPES;
    customFieldId: string;
    string_value?: string;
    text_value?: string;
    int_value?: number;
    boolean_value?: boolean;
    date_value?: string;
}