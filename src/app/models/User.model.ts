export enum Role {
    MANAGER = "MANAGER",
    DEVELOPER = "DEVELOPER",
    TESTER = "TESTER"
}

export class User {
    constructor(
        public id: string, 
        public username: string, 
        public email: string,
        public password: string,
        public role: Role, 
        public threads_id: string[]) {}
}

export class UserMaker {
    static create(event: User) {
        return new User(event.id, event.username, event.email, event.password, event.role, event.threads_id);
    }
}