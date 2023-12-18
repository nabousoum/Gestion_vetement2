import { Component, OnInit } from '@angular/core';
import { CategorieDto } from '../../Modules/Dto/CategorieDto';
import { CategorieService } from '../../Modules/Service/categorie.service';
import { Observable } from 'rxjs';
import { DataCategorie } from '../../Modules/Dto/DataCategorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories$:Observable<DataCategorie>;

  constructor(private categorieService: CategorieService) {
    this.categories$=categorieService.getAllCategories()
  }

  ngOnInit() {
    // this.categorieService.getAllCategories().subscribe(data => {
    //   this.categories = data;
    // }, error => {
    //   console.error('Erreur lors de la récupération des catégories', error);
    // });
  }
}
