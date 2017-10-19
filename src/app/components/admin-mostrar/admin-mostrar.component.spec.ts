import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostrarComponent } from './admin-mostrar.component';

describe('AdminMostrarComponent', () => {
  let component: AdminMostrarComponent;
  let fixture: ComponentFixture<AdminMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
