import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaKeskusComponent } from './lisa-keskus.component';

describe('LisaKeskusComponent', () => {
  let component: LisaKeskusComponent;
  let fixture: ComponentFixture<LisaKeskusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisaKeskusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaKeskusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
