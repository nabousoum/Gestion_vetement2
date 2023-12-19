import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from '../../../models/service/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent {
  @Input() id: number = 0
  activeModal = inject(NgbActiveModal);
  constructor(private serviceCategory: CategorieService, private toastr: ToastrService){}
  delete(){
    this.serviceCategory.deleteCategorie(this.id).subscribe({
      next: (response) => {
          this.toastr.success('Catégorie supprimée avec succès.', 'Succès')
          this.activeModal.close()
      },
      error: (error) => this.toastr.error('Suppression échouée', 'Erreur')
    });
  }
}
