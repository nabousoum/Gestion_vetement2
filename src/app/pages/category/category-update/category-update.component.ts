import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from '../../../models/service/categorie.service';
import { categoryFormInit } from '../data.category';
import { ToastrService } from 'ngx-toastr';
import { CategorieDto } from '../../../models/Dto/CategorieDto';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit{
  @Input() category!: CategorieDto
  categoryForm!: FormGroup;
  constructor(private fb: FormBuilder, private modalService:NgbModal, private serviceCategory: CategorieService, private toastr: ToastrService){
  }
  ngOnInit(): void {
    this.categoryForm = this.fb.group({ name: new FormControl(this.category.attributes.name, Validators.required)})
  }
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
  onSubmit(){
    const name:string = this.categoryForm.get('name')?.value.toUpperCase();
    if(name && name!=''){
      const categorie = {...this.category, name}
      const body = {
        data: {
          ...categorie
        }
      };
      this.serviceCategory.updateCategorie(body).subscribe({
        next: (response) => {
            this.toastr.success('Catégorie modifiée avec succès.', 'Succès')
            this.modalService.dismissAll()
        },
        error: (error) => this.toastr.error("Echec de la modification", 'Erreur')
      });
    }
    else{
      this.toastr.error('Veillez saisir un nom', 'Erreur')
    }
  }
}
