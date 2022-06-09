import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodulehtComponent } from './koduleht.component';

describe('KodulehtComponent', () => {
  let component: KodulehtComponent;
  let fixture: ComponentFixture<KodulehtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodulehtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KodulehtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
