import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ClotheService } from '../../models/service/clothe.service';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrl: './clothe.component.css'
})
export class ClotheComponent implements OnDestroy{
  clothes$!: Observable<any>
  private clotheUpdateSubscription: Subscription;

  constructor(private clotheService: ClotheService){
    this.loadClothes()
    this.clotheUpdateSubscription = this.clotheService.clotheUpdatedObservable.subscribe(()=>{
      this.loadClothes()
    })

  }
  ngOnDestroy(): void {
    if (this.clotheUpdateSubscription) {
      this.clotheUpdateSubscription.unsubscribe();
    }
  }
  loadClothes(){
    this.clothes$ = this.clotheService.getAllClothes()
  }
}
