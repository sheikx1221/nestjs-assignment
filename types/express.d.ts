import { User } from "src/user/entities/user.entity";

export interface IRequest {
    user?: Partial<User> // Add your custom property here
}