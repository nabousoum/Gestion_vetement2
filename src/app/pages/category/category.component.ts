import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCategorie } from '../../../Modules/Dto/DataCategorie';
import { CategorieService } from '../../../Modules/Service/categorie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories$:Observable<DataCategorie>;
  constructor(private categorieService: CategorieService, private modalService: NgbModal) {
    this.categories$=this.categorieService.getAllCategories()
  }

  delete(id: number) {
		const modalRef = this.modalService.open(CategoryDeleteComponent);
		modalRef.componentInstance.id = id;
	}
}