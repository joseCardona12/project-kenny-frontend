import {IUser} from "@/app/core/application/interfaces/userInterface";

export interface ILoginResponseDto{
    token:string,
    user: IUser
    message:string,
}