import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataVetement } from '../../Modules/Dto/DataVetement';
import { VetementService } from '../../Modules/Service/vetement.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementComponent implements OnInit {
  vetements$:Observable<DataVetement>;

  constructor(private vetementservice:VetementService) {
    this.vetements$=vetementservice.findAllVetements()
  }

  ngOnInit() {
    // this.vetementservice.getAllvetements().subscribe(data => {
    //   this.vetements = data;
    // }, error => {
    //   console.error('Erreur lors de la récupération des catégories', error);
    // });
  }

  gerrerDetail(id: number) {
    this.vetementservice.getVetementById(id).subscribe(vetement => {
      alert(JSON.stringify(vetement)); 
    }, error => {
      console.error('Erreur lors de la récupération du vêtement', error);
    });
  }
  
  gerrerSuppression(id: number) {
    this.vetementservice.deleteVetement(id).subscribe(response => {
      console.log('Vêtement supprimé avec succès', response);
      // Vous pouvez également mettre à jour l'interface utilisateur ici, si nécessaire
    }, error => {
      console.error('Erreur lors de la suppression du vêtement', error);
    });
  }
  
  gerrerEdition(id:number){
    
  }
}
