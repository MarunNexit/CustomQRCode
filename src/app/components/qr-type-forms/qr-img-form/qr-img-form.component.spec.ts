import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrImgFormComponent } from './qr-img-form.component';

describe('QrImgFormComponent', () => {
  let component: QrImgFormComponent;
  let fixture: ComponentFixture<QrImgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrImgFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrImgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
