import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrFileFormComponent } from './qr-file-form.component';

describe('QrImgFormComponent', () => {
  let component: QrFileFormComponent;
  let fixture: ComponentFixture<QrFileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrFileFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrFileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
