import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { DataCategorie } from '../Dto/DataCategorie';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = `${environment.host_url}/api/categories`;
  private categoryUpdated = new Subject<void>();
  private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }
    
    getAllCategories(): Observable<DataCategorie> {
        return this.http.get<DataCategorie>(this.apiUrl);
    }

    getCategorieById(id: number): Observable<DataCategorie>{
        return this.http.get<DataCategorie>(`${this.apiUrl}/${id}`);
    }
    
      createCategorie(categorie: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, categorie).pipe(
          tap(() => {
            this.categoryUpdated.next();
          })
        );
      }

    deleteCategorie(id: number) {
        return this.http.delete<DataCategorie>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
            tap(()=> {
                this.categoryUpdated.next()
            })
        );
    }

    updateCategorie(categorie: any){
        return this.http.put(`${this.apiUrl}/${categorie.data.id}`, categorie, this.httpOptions).pipe(
            tap(()=>{
                this.categoryUpdated.next()
            })
        );
    }

    get categoryUpdatedObservable() {
        return this.categoryUpdated.asObservable();
    }
}
