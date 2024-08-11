import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrColorComponent } from './qr-color.component';

describe('QrColorComponent', () => {
  let component: QrColorComponent;
  let fixture: ComponentFixture<QrColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
