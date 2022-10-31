import { CustomValuesInput } from "./CustomValuesInput";

export interface ItemInput {
    input: {
        name: string;
        tags: string[];
        collectionId: string;
        customFieldsValues: CustomValuesInput[];
    };
}