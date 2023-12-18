import { Component } from '@angular/core';
import { CategorieDto } from '../../../Modules/Dto/CategorieDto';
import { DataCategorie } from '../../../Modules/Dto/DataCategorie';
import { CategorieService } from '../../../Modules/Service/categorie.service';

@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.css']
})
export class FormCategorieComponent {
  categorie: CategorieDto = {
    id: 0, 
    attributes: {
      name: '',
      clothes: {
        data: [] 
      }
    }
  };

  constructor(private categorieService: CategorieService) {}

  onSubmit() {
    const categorieData: DataCategorie = {
      data: [this.categorie] 
    };

    this.categorieService.createCategorie(categorieData)
      
  }
}

