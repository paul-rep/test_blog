export interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string
}

export interface IUserProps {
    user: IUser
}

export interface IPost {
    title: string,
    body: string
}
export interface IPostProps {
    post: IPost
}

export interface UserListProps {
    users: IUser[]
}