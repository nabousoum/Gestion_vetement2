import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { VetementDto } from "../Dto/VetementDto";
import { CategorieDto } from "../Dto/CategorieDto";
@Injectable({
    providedIn: 'root'
  })
class VetementService {

    private apiUrl = 'http://3.145.58.43:1337/api/clothes'; // Remplacer avec l'URL réelle de votre API
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }
    
    // Récupérer tous les vêtements
    getAllVetements(): Observable<VetementDto[]> {
        return this.http.get<VetementDto[]>(this.apiUrl);
    }

    // Récupérer un vêtement par son ID
    getVetementById(id: number): Observable<VetementDto> {
        return this.http.get<VetementDto>(`${this.apiUrl}/${id}`);
    }

    async createVetement(vetement: VetementDto): Promise<Observable<VetementDto>> {
        return this.http.post<VetementDto>(this.apiUrl, vetement, this.httpOptions);    
    }

    async deleteVetement(id: number){
        return this.http.delete<VetementDto>(`${this.apiUrl}/${id}`, this.httpOptions);
    
    }

    async updateVetement(vetement: VetementDto){
        return this.http.put(`${this.apiUrl}/${vetement.id}`, vetement, this.httpOptions);
    }

    // async addCategorieToVetement(categorie: CategorieDto,idVetement : number): Promise<VetementDto| null> {
    //     var vetement=this.getVetementById(idVetement);
    //     vetement.categorie
    //     return null;
    // }


}
