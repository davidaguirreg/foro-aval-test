import { User } from "./user.interface";

export interface Comment {
  id?: number;
  user: User;
  message: string;
  response: Comment[];
}
