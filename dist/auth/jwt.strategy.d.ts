import { Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { User } from '../models/user.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: any): Promise<User | null>;
}
export {};
