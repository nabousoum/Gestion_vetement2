import { VetementDto } from "./VetementDto";

export interface UserDto {
    id: number;
    nom?:string;
    login?: string;
    password: string;
    Vetement?: VetementDto[];
}