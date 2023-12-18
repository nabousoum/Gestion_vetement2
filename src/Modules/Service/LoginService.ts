import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


interface LoginRequest {
    login: string;
    password: string;
}

interface AuthResponse {
    id: number;
    nom: string;
    token: string; // Token d'authentification, supposé être retourné par l'API
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private loginUrl = 'https://votre-api-url.com/login'; // URL pour la connexion
    private createUserUrl = 'https://votre-api-url.com/users'; // URL pour la création de compte
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    // Méthode pour se connecter
    async login(credentials: LoginRequest): Promise<Observable<AuthResponse>> {
        return this.http.post<AuthResponse>(this.loginUrl, credentials, this.httpOptions);
    }

    // // Méthode pour créer un compte utilisateur
    // createUser(newUserDetails: UserDto): Observable<AuthResponse> {
    //     return this.http.post<AuthResponse>(this.createUserUrl, newUserDetails, this.httpOptions);
    // }
}