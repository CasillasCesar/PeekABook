import { User } from "./user";

export interface BookCard {
  title:String,
  user : User,
  images : String[],
  description : String
}
