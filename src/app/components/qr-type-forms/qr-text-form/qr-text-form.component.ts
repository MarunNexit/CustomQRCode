import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-qr-text-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './qr-text-form.component.html',
  styleUrl: './qr-text-form.component.css'
})
export class QrTextFormComponent {
  textForm: FormGroup;
  @Output() textFormSubmit = new EventEmitter<string>()
  inputTextCharacterCount: number = 0;

  constructor(private fb: FormBuilder) {
    this.textForm = this.fb.group({
      text: ['', Validators.required, Validators.maxLength(400)]
    });
  }

  onSubmitText(): void {
    if (this.textForm.valid) {
      const textValue = this.textForm.get('text')?.value;
      this.textFormSubmit.emit(textValue);
    }
  }

  updateCharacterCount(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.inputTextCharacterCount = textarea.value.length;
  }
}
