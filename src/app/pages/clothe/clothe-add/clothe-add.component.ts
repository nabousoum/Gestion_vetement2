import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from '../../../models/service/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DataCategorie } from '../../../models/Dto/DataCategorie';
import { ClotheService } from '../../../models/service/clothe.service';

@Component({
  selector: 'app-clothe-add',
  templateUrl: './clothe-add.component.html',
  styleUrl: './clothe-add.component.css'
})
export class ClotheAddComponent {
  clotheForm: FormGroup;
  categories$: Observable<DataCategorie>
  constructor(private fb: FormBuilder, private modalService:NgbModal, private categoryService: CategorieService, 
    private toastr: ToastrService, private clotheService: ClotheService){
    this.clotheForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    })
    this.categories$ = categoryService.getAllCategories()
  }
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
  onSubmit(){
    const name:string = this.clotheForm.get('name')?.value.toUpperCase();
    const description:string = this.clotheForm.get('description')?.value.toUpperCase();
    const price:string = this.clotheForm.get('price')?.value;
    const quantity:string = this.clotheForm.get('quantity')?.value;
    const category:string = this.clotheForm.get('category')?.value;
    if(name && name!='' && price && quantity && category && description && description!=''){
      const body = {
        data: {
          name,
          description,
          price,
          quantity,
          category
        }
      };
      this.clotheService.createClothe(body).subscribe({
        next: (response) => {
            this.toastr.success('Vêtement ajouté avec succès.', 'Succès')
            this.modalService.dismissAll()
        },
        error: (error) => this.toastr.error("Echec de l'ajout", 'Erreur')
      });
    }
    else{
      this.toastr.error('Des champs sont incomplets', 'Erreur')
    }
  }
}
