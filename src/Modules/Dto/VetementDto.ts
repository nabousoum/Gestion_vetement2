import { CategorieDto } from "./CategorieDto";

export interface VetementDto {
    id: number;
    nom: string;
    vendeur: string;
    categorie: CategorieDto[];
    nbreVetement: number;

}
