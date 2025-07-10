import { User } from '../models/user.model';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    create(userData: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: number, userData: Partial<User>): Promise<User>;
    remove(id: number): Promise<void>;
}
