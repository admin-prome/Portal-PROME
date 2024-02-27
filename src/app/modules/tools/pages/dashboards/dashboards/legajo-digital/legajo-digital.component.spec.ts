import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegajoDigitalComponent } from './legajo-digital.component';

describe('LegajoDigitalComponent', () => {
  let component: LegajoDigitalComponent;
  let fixture: ComponentFixture<LegajoDigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegajoDigitalComponent]
    });
    fixture = TestBed.createComponent(LegajoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
