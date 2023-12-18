import { Component } from '@angular/core';
import { LoginService } from '../../Modules/Service/LoginService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent {
    username: string = '';
    password: string = '';

    constructor(private loginService: LoginService, private router: Router) {}


    
}
