export interface Session {
    logged?: boolean
    user: any
}

export interface User {
    email: string,
    password: string
}