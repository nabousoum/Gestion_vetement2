import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVetementComponent } from './form-vetement.component';

describe('FormVetementComponent', () => {
  let component: FormVetementComponent;
  let fixture: ComponentFixture<FormVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVetementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
