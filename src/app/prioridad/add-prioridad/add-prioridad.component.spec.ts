import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrioridadComponent } from './add-prioridad.component';

describe('AddPrioridadComponent', () => {
  let component: AddPrioridadComponent;
  let fixture: ComponentFixture<AddPrioridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrioridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
