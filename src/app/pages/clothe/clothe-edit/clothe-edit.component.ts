import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataCategorie } from '../../../models/Dto/DataCategorie';
import { CategorieService } from '../../../models/service/categorie.service';
import { ClotheService } from '../../../models/service/clothe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clothe-edit',
  templateUrl: './clothe-edit.component.html',
  styleUrl: './clothe-edit.component.css'
})
export class ClotheEditComponent implements OnInit{
  @Input() clothe: any
  clotheForm!: FormGroup;
  categories$: Observable<DataCategorie>
  constructor(private fb: FormBuilder, private modalService:NgbModal, private categoryService: CategorieService, 
    private toastr: ToastrService, private clotheService: ClotheService){
    this.categories$ = categoryService.getAllCategories()
  }
  ngOnInit(): void {
    this.clotheForm = this.fb.group({
      name: new FormControl(this.clothe.attributes.name, Validators.required),
      description: new FormControl(this.clothe.attributes.description, Validators.required),
      price: new FormControl(this.clothe.attributes.price, Validators.required),
      quantity: new FormControl(this.clothe.attributes.quantity, Validators.required),
      category: new FormControl(this.clothe.attributes.category.data.id, Validators.required),
    })
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
          ...this.clothe,
          name,
          description,
          price,
          quantity,
          category,
          create_at:new Date()
        }
      };
      this.clotheService.updateClothe(body).subscribe({
        next: (response) => {
            this.toastr.success('Vêtement modifié avec succès.', 'Succès')
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
