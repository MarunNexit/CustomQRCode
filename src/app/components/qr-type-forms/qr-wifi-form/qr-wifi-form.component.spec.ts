import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrWifiFormComponent } from './qr-wifi-form.component';

describe('QrWifiFormComponent', () => {
  let component: QrWifiFormComponent;
  let fixture: ComponentFixture<QrWifiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrWifiFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrWifiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
