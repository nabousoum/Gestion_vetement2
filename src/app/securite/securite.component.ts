import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../Modules/Service/login.service';
import { DataUser } from '../../Modules/Dto/DataUser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.css']
})
export class SecuriteComponent implements OnInit {
  username: string = '';
  password: string = '';

  Users$: Observable<DataUser>;

  constructor(private loginService: LoginService) {
    this.Users$ = loginService.getAllUsers()
  }

  getLogin(username:string,password:string){
    // for (var l in this.loginService.getAllUsers()) {
    //   if (username==l && password==l.) {
        
    //   }
    // }

  }

  ngOnInit(): void {
    
  }



}
