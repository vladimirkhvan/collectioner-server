import { CollectionType } from "./Collection";
import { UserType } from "./User";

export interface CollectionReturn extends  CollectionType{
    user: UserType
}