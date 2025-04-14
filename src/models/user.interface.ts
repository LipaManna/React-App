export interface IUsers {
    id:         number;
    email:      string;
    password:   string;
    name:       string;
    role:       IRole;
    avatar:     string;
    creationAt: Date;
    updatedAt:  Date;
}

export enum IRole {
    Admin = "admin",
    Customer = "customer",
}