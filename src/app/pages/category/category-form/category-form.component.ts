import { Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, categoryFormInit } from '../data.category';
import { CategorieService } from '../../../../Modules/Service/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
	categoryForm: FormGroup;
  constructor(private fb: FormBuilder, private modalService:NgbModal, private serviceCategory: CategorieService, private toastr: ToastrService){
    this.categoryForm = this.fb.group(categoryFormInit)
  }
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
  onSubmit(){
    const name:string = this.categoryForm.get('name')?.value.toUpperCase();
    if(name && name!=''){
      const body = {
        data: {
          name
        }
      };
      this.serviceCategory.createCategorie(body).subscribe({
        next: (response) => {
            this.toastr.success('Catégorie ajoutée avec succès.', 'Succès')
            this.modalService.dismissAll()
        },
        error: (error) => console.error('Error saving category', error)
      });
    }
    else{
      this.toastr.error('Veillez saisir un nom', 'Erreur')
    }
  }
}
