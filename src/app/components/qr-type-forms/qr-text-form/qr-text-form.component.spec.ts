import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrTextFormComponent } from './qr-text-form.component';

describe('QrTextFormComponent', () => {
  let component: QrTextFormComponent;
  let fixture: ComponentFixture<QrTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrTextFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
