import { UserDto } from "./UserDto";
import { VetementDto } from "./VetementDto";

export interface CategorieDto {
    id: number,
    attributes: {
        name: string,
        clothes: {
            data: [
                {
                    id: number,
                    attributes: {
                        name: string,
                        description: string,
                        create_at: string,
                        quantity: number,
                        price:number,
                        currency: string,
                    }
                }
            ]
        }
    }
}
