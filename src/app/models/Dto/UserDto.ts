import { VetementDto } from "./VetementDto";

export interface UserDto {
    id: number,
    data: [
        {
            attributes: {
                name: string,
                login: string,
                password: string,
            }
        }
    ]
}