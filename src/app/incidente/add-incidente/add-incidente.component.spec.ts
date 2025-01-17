import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncidenteComponent } from './add-incidente.component';

describe('AddIncidenteComponent', () => {
  let component: AddIncidenteComponent;
  let fixture: ComponentFixture<AddIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
