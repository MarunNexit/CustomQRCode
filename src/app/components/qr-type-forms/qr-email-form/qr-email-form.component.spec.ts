import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrEmailFormComponent } from './qr-email-form.component';

describe('QrEmailFormComponent', () => {
  let component: QrEmailFormComponent;
  let fixture: ComponentFixture<QrEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrEmailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
