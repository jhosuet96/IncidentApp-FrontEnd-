import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPuestoComponent } from './add-puesto.component';

describe('AddPuestoComponent', () => {
  let component: AddPuestoComponent;
  let fixture: ComponentFixture<AddPuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
