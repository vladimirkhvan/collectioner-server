import { CollectionType } from "./Collection";
import { CustomFieldsType } from "./CustomFields";

export interface CreateCollectionReturn extends CollectionType {
    fields?: CustomFieldsType[];
}