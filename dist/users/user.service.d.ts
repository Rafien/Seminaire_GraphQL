import { User } from '../models/user.model';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    create(userData: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: number, userData: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map