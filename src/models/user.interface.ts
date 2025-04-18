export interface IResUsers {
    token: string;
}

export interface IResNewUser extends IResUsers{
    id:number;
}

export interface IReqLogin{
    email: string;
    password: string;
}


export enum IRole {
    Admin = "admin",
    Customer = "customer",
}