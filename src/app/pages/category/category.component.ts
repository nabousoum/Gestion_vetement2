import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { categoryFormInit } from './data.category';
import { DataCategorie } from '../../../Modules/Dto/DataCategorie';
import { CategorieService } from '../../../Modules/Service/categorie.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories$:Observable<DataCategorie>;
  constructor(private categorieService: CategorieService) {
    this.categories$=this.categorieService.getAllCategories()
  }
}