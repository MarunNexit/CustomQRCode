import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrTypeMenuComponent } from './qr-type-menu.component';

describe('QrTypeMenuComponent', () => {
  let component: QrTypeMenuComponent;
  let fixture: ComponentFixture<QrTypeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrTypeMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrTypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
