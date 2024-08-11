import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrUrlFormComponent } from './qr-url-form.component';

describe('QrUrlFormComponent', () => {
  let component: QrUrlFormComponent;
  let fixture: ComponentFixture<QrUrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrUrlFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrUrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
