import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileLimitService {
  private maxFilesPerDay = 3;
  private storageKey = 'fileUploads';

  constructor() {}

  // Отримати кількість завантажених файлів за поточний день
  getUploadedFileCount(): number {
    const uploads = this.getUploads();
    const today = new Date().toDateString();
    return uploads[today] ? uploads[today].length : 0;
  }

  // Додати запис про нове завантаження
  recordFileUpload(fileName: string): void {
    const uploads = this.getUploads();
    const today = new Date().toDateString();
    if (!uploads[today]) {
      uploads[today] = [];
    }
    uploads[today].push(fileName);
    this.saveUploads(uploads);
  }

  // Отримати записи про завантаження з Local Storage
  private getUploads(): Record<string, string[]> {
    const uploads = localStorage.getItem(this.storageKey);
    return uploads ? JSON.parse(uploads) : {};
  }

  // Зберегти записи про завантаження в Local Storage
  private saveUploads(uploads: Record<string, string[]>): void {
    localStorage.setItem(this.storageKey, JSON.stringify(uploads));
  }
}
