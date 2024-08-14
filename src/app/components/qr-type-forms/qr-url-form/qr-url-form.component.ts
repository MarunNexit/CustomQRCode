import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {QrColorComponent} from "../../qr-modifications/qr-color/qr-color.component";

@Component({
  selector: 'app-qr-url-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    QrColorComponent
  ],
  templateUrl: './qr-url-form.component.html',
  styleUrl: './qr-url-form.component.css'
})
export class QrUrlFormComponent {
  urlForm: FormGroup;

  @Output() urlFormSubmit = new EventEmitter<string>()
  constructor(private fb: FormBuilder) {
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  onSubmitUrl() {
    if (this.urlForm.valid) {
      const url = this.urlForm.value.url;
      this.urlFormSubmit.emit(url);
    }
    else {
      alert('Enter valid Link (URL)')
    }
  }
}
