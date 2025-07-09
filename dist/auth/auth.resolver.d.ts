import { AuthService } from './auth.service';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    register(name: string, email: string, password: string): Promise<any>;
    login(email: string, password: string): Promise<any>;
}
//# sourceMappingURL=auth.resolver.d.ts.map