import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../models/user.model';
export interface AuthPayload {
    access_token: string;
    user: User;
}
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<AuthPayload>;
    login(email: string, password: string): Promise<AuthPayload>;
}
