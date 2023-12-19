import { Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categoryFormInit } from '../data.category';
import { CategorieService } from '../../../../Modules/Service/categorie.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
	categoryForm: FormGroup;
  constructor(private fb: FormBuilder, private modalService:NgbModal){
    this.categoryForm = this.fb.group(categoryFormInit)
  }
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
  onSubmit(){

  }
}
