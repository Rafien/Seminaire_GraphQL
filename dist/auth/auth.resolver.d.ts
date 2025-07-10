import { AuthService } from './auth.service';
import { User } from '../models/user.model';
declare class AuthPayload {
    access_token: string;
    user: User;
}
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    register(name: string, email: string, password: string): Promise<AuthPayload>;
    login(email: string, password: string): Promise<AuthPayload>;
}
export {};
