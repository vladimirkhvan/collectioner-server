import { CustomFieldsInput } from "./CustomFields";

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