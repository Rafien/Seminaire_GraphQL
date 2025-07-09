import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    users(): Promise<any>;
    user(id: number): Promise<any>;
}
//# sourceMappingURL=user.resolver.d.ts.map