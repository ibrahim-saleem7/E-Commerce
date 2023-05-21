import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductesDetilesComponent } from './poductes-detiles.component';

describe('PoductesDetilesComponent', () => {
  let component: PoductesDetilesComponent;
  let fixture: ComponentFixture<PoductesDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductesDetilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductesDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
