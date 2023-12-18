import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCategorie } from '../Dto/DataCategorie';
import { CategorieDto } from '../Dto/CategorieDto';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://3.145.58.43:1337/api/categories'; // Remplacer avec l'URL réelle de votre API
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }
    
    getAllCategories(): Observable<DataCategorie> {
        return this.http.get<DataCategorie>(this.apiUrl);
    }

    getCategorieById(id: number): Observable<DataCategorie>{
        return this.http.get<DataCategorie>(`${this.apiUrl}/${id}`);
    }

    createCategorie(categorie: DataCategorie): Observable<DataCategorie | null> {
        return this.http.post<DataCategorie>(this.apiUrl, categorie, this.httpOptions);
    }

    deleteCategorie(id: number) {
        return this.http.delete<DataCategorie>(`${this.apiUrl}/${id}`, this.httpOptions);
    }

    updateCategorie(categorie: CategorieDto){
        return this.http.put(`${this.apiUrl}/${categorie.id}`, categorie, this.httpOptions);
    }

}
