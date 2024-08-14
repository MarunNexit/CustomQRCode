import { AbstractControl, ValidatorFn } from '@angular/forms';

export class FileValidator {
  static validateFileSize(maxSize: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const file = control.value as File;
      if (file && file.size > maxSize) {
        return { fileSizeExceeded: true };
      }
      return null;
    };
  }
}
