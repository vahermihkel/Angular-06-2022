import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NortalComponent } from './nortal.component';

describe('NortalComponent', () => {
  let component: NortalComponent;
  let fixture: ComponentFixture<NortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
