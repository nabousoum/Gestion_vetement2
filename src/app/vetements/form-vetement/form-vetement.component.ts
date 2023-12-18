import { Component } from '@angular/core';
import { DataVetement } from '../../../Modules/Dto/DataVetement';
import { VetementDto } from '../../../Modules/Dto/VetementDto';
import { VetementService } from '../../../Modules/Service/vetement.service';


@Component({
  selector: 'app-vetement',
  templateUrl: './form-vetement.component.html',
  styleUrls: ['./form-vetement.component.css']
})
export class FormVetementComponent {
  vetement: VetementDto = {
    id: 0,
    attributes: {
      name: '',
      description: '',
      create_at: new Date().toISOString(),
      quantity: 0,
      price: 0,
      currency: 'CFA' // Exemple de devise par défaut
    }
  };

  constructor(private vetementService: VetementService) {}

  onSubmit() {
    const vetementData: DataVetement = {
      data: [this.vetement] // Envelopper `vetement` dans un tableau
    };

    this.vetementService.createVetement(vetementData)
      
  }
  
}
