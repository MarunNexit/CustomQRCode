import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FileValidator} from "./file-validator";
import {NgIf} from "@angular/common";
import {NavigationRouterService} from "../../../services/navigation-router.service";
import {FirebaseStorageService} from "../../../services/firebase-storage.service";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "../../../../environments/environment";
import { v4 as uuidv4 } from 'uuid';
import {FileLimitService} from "../../../services/file-limit.service";

@Component({
  selector: 'app-qr-file-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './qr-file-form.component.html',
  styleUrl: './qr-file-form.component.css',
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ]
})
export class QrFileFormComponent {
  fileForm: FormGroup;
  @Output() fileFormSubmit = new EventEmitter<string>();
  fileLinkAvailable = false;
  selectedFile: File | null = null;

  uploadToFirebaseProgress: number = 0;
  fileFirebaseUrl: string = '';
  filePath: string = '';

  constructor(
    private fb: FormBuilder,
    private navigationRouterService: NavigationRouterService,
    private firebaseStorageService: FirebaseStorageService,
    private fileLimitService: FileLimitService // Впроваджуємо новий сервіс
  ) {
    this.fileForm = this.fb.group({
      file: [null, [FileValidator.validateFileSize(5 * 1024 * 1024), Validators.required]]
    });
  }

  onUploadFile() {
    if (this.fileForm && this.fileForm.valid) {
      this.fileLinkAvailable = true;
    }
  }

  onSubmitFile(): void {
    if (this.fileForm.valid && this.fileLinkAvailable && this.selectedFile) {
      if (this.fileLimitService.getUploadedFileCount() < 3) { // Перевірка обмеження
        this.uploadFile(this.selectedFile);
      } else {
        alert('You have reached the limit of 3 uploads per day.');
      }
    }
    else {
      alert('Enter valid File')
    }
  }

  uploadFile(file: File): void {
    if (file) {
      console.log(file);
      console.log(file.name);

      const path = 'files';
      this.filePath = `${path}/${uuidv4()}_${file.name}`;

      this.firebaseStorageService.uploadFile(file, this.filePath).subscribe({
        next: (progress) => {
          this.uploadToFirebaseProgress = progress;
          console.log(`Upload progress: ${progress}%`);
        },
        complete: () => {
          this.firebaseStorageService.getFileUrl(this.filePath)
            .subscribe({
              next: (url) => {
                this.fileFirebaseUrl = url;
                console.log('File URL:', url);
                this.fileFormSubmit.emit(this.fileFirebaseUrl);
                this.fileLimitService.recordFileUpload(file.name); // Запис завантаження
              },
              error: (error) => {
                console.error('Error getting file URL:', error);
              }
            });
        },
        error: (error) => {
          console.error('Error uploading file:', error);
        }
      });
    } else {
      console.error('No file selected');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file; // Store the selected file
      this.fileLinkAvailable = true; // File is available for upload
    }
  }

  onRedirect(): void {
    this.navigationRouterService.navigateToLink('/qr-code/link');
  }

}
