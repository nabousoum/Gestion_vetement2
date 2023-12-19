import { Injectable } from '@angular/core';
import { DataVetement } from '../Dto/DataVetement';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VetementDto } from '../Dto/VetementDto';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VetementService {
    private apiUrl = `${environment.host_url}/api/clothes`; // Remplacer avec l'URL réelle de votre API
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    // Récupérer tous les vêtements
    getAllVetements(): Observable<DataVetement> {
        return this.http.get<DataVetement>(this.apiUrl);
    }
    // Récupérer tous les vêtements
    findAllVetements(): Observable<DataVetement> {
        return this.http.get<DataVetement>(this.apiUrl);
    }
    // Récupérer un vêtement par son ID
    getVetementById(id: number): Observable<DataVetement> {
        return this.http.get<DataVetement>(`${this.apiUrl}/${id}`);
    }

    createVetement(vetement: DataVetement): Observable<DataVetement> {
        return this.http.post<DataVetement>(this.apiUrl, vetement, this.httpOptions);
    }

    deleteVetement(id: number) {
        return this.http.delete<DataVetement>(`${this.apiUrl}/${id}`, this.httpOptions);

    }

    updateVetement(vetement: VetementDto) {
        return this.http.put(`${this.apiUrl}/${vetement.id}`, vetement, this.httpOptions);
    }

    // async addCategorieToVetement(categorie: CategorieDto,idVetement : number): Promise<DataVetement| null> {
    //     var vetement=this.getVetementById(idVetement);
    //     vetement.categorie
    //     return null;
    // }
}
