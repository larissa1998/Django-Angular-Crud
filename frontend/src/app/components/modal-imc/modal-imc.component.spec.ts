import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImcComponent } from './modal-imc.component';

describe('ModalImcComponent', () => {
  let component: ModalImcComponent;
  let fixture: ComponentFixture<ModalImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
