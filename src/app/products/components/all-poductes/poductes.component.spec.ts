import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductesComponent } from './poductes.component';

describe('PoductesComponent', () => {
  let component: PoductesComponent;
  let fixture: ComponentFixture<PoductesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
