import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataCategorie } from '../../models/Dto/DataCategorie';
import { CategorieService } from '../../models/service/categorie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnDestroy{
  categories$!:Observable<DataCategorie>;
  private categoryUpdateSubscription: Subscription;
  constructor(private categoryService: CategorieService, private modalService: NgbModal) {
    this.loadCategories();
    this.categoryUpdateSubscription = this.categoryService.categoryUpdatedObservable.subscribe(() => {
      this.loadCategories();
    });
  }
  loadCategories() {
    this.categories$ = this.categoryService.getAllCategories();
  }
  delete(id: number) {
		const modalRef = this.modalService.open(CategoryDeleteComponent);
		modalRef.componentInstance.id = id;
	}
  ngOnDestroy() {
    if (this.categoryUpdateSubscription) {
      this.categoryUpdateSubscription.unsubscribe();
    }
  }
}