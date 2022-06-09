import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoedComponent } from './poed.component';

describe('PoedComponent', () => {
  let component: PoedComponent;
  let fixture: ComponentFixture<PoedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
