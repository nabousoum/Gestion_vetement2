import { Component, Input, TemplateRef } from '@angular/core';
import { ClotheService } from '../../../models/service/clothe.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clothe-delete',
  templateUrl: './clothe-delete.component.html',
  styleUrl: './clothe-delete.component.css'
})
export class ClotheDeleteComponent {
  @Input() clothe: any
  constructor(private modalService:NgbModal, private toastr: ToastrService, private clotheService: ClotheService){}
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
  delete(){
    this.clotheService.deleteClothe(this.clothe.id).subscribe({
      next: (response) => {
          this.toastr.success('Vêtement supprimée avec succès.', 'Succès')
          this.modalService.dismissAll()
      },
      error: (error) => this.toastr.error('Suppression échouée', 'Erreur')
    });
  }
}
