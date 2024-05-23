export interface Groups {
    id: number,
    name: string
}

export interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    language: string,
    profile_image: string | null,
    groups: Groups[],
    business_group: any[],
    is_active: boolean,
    token: string,
    login_status: string
  }