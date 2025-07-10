import { User } from '../models/user.model';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    users(): Promise<User[]>;
    user(id: number): Promise<User>;
}
