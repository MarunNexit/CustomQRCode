import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  constructor(private storage: AngularFireStorage) {}

  uploadFile(file: File, path: string): Observable<number> {
    // Визначення посилання на файл у Firebase Storage
    const filePath = path;
    const fileRef = this.storage.ref(filePath);

    console.log(filePath, fileRef)
    const task = this.storage.upload(filePath, file);

    // Повернення прогресу завантаження у вигляді
    return task.percentageChanges().pipe(
      map(progress => progress ?? 0) // Перетворює undefined на 0
    );
  }

  getFileUrl(path: string): Observable<string> {
    console.log(path)
    const fileRef = this.storage.ref(path);
    return fileRef.getDownloadURL();
  }

  deleteFile(path: string): void {
    const fileRef = this.storage.ref(path);
    fileRef.delete().subscribe({
      next: () => console.log('File deleted successfully'),
      error: (err) => console.error('Error deleting file:', err)
    });
  }



}
