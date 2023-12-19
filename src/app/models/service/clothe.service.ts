import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClotheService {
  private apiUrl = `${environment.host_url}/api/clothes`; // Remplacer avec l'URL réelle de votre API
  private clotheUpdated = new Subject<void>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllClothes(): Observable<any> {
    return this.http.get(`${this.apiUrl}?populate=category`)
  }
  createClothe(clothe: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clothe).pipe(
      tap(() => {
        this.clotheUpdated.next();
      })
    );
  }
  updateClothe(clothe: any){
    return this.http.put(`${this.apiUrl}/${clothe.data.id}`, clothe, this.httpOptions).pipe(
        tap(()=>{
            this.clotheUpdated.next()
        })
    );
  }
  deleteClothe(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
        tap(()=> {
            this.clotheUpdated.next()
        })
    );
  }
  get clotheUpdatedObservable() {
    return this.clotheUpdated.asObservable();
  }

}
