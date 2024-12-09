import { ARUser } from "../models/ar/ARUser";

interface UserAdapterInterface {
    id: string;
    name: string;
    email: string;
    action?: string;
}

export class UserAdapter implements UserAdapterInterface {

    public get name(): string {
        return `${this.user.lastName}, ${this.user.firstName}`
    }

    public get email(): string {
        return this.user.userEmail;
    }

    public get id(): string {
        return this.user.userEmail;
    }

    public get action(): string {
        return "";
    }

    constructor(
        private readonly user: ARUser
    ){ }
}