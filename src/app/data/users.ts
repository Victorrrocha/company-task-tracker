import { Role, User } from "../models/User.model";

export const Users: User[] = [
    {
        id: "dasfasdfsafds",
        username: "Jane Doe",
        email: "jane.doe@email.com",
        password: "password",
        role: Role.MANAGER,
        threads_id: ['1']
    },
    {
        id: "sdafsadfasdfd",
        username: "John Doe",
        email: "john.doe@email.com",
        password: "password",
        role: Role.TESTER,
        threads_id: ['2']
    }
]