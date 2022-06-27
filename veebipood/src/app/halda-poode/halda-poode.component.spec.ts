import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaPoodeComponent } from './halda-poode.component';

describe('HaldaPoodeComponent', () => {
  let component: HaldaPoodeComponent;
  let fixture: ComponentFixture<HaldaPoodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaldaPoodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaldaPoodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
