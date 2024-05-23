import { User } from "../general"

export interface LoginUser {
    email: string,
    password: string
}

export interface Session {
    logged: boolean
    user: User | null
}