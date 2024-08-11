import { Component } from '@angular/core';
import {FixMeLater, QRCodeModule} from 'angularx-qrcode';
import {QrTypeMenuComponent} from "../qr-type-menu/qr-type-menu.component";
import {QrCodeType} from "../../models/qr-code-types.enum";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {QrUrlFormComponent} from "../qr-type-forms/qr-url-form/qr-url-form.component";
import {QrTextFormComponent} from "../qr-type-forms/qr-text-form/qr-text-form.component";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [QRCodeModule, QrTypeMenuComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, ReactiveFormsModule, QrUrlFormComponent, QrTextFormComponent],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {

  currentView: QrCodeType = QrCodeType.URL;
  elementType:string = 'canvas';
  qrInputData: string = 'https://github.com/MarunNexit';
  public qrCodeSrc!: SafeUrl

  onSelectionChange(selectedOption: QrCodeType) {
    this.currentView = selectedOption;
  }
  onUrlFormSubmit(url: string) {
    this.generateQRCode(url);
  }

  onTextFormSubmit(text: string) {
    this.generateQRCode(undefined, text); // Передаємо `undefined` для url
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeSrc = url
  }
  generateQRCode(url?: string, text?: string) {
    switch (this.currentView) {
      case QrCodeType.URL:
        if (url) {
          this.qrInputData = url;
        }
        break;

      case QrCodeType.TEXT:
        if (text) {
          this.qrInputData = text;
        }
        break;

      default:
        console.warn('Unsupported QR Code type');
    }
  }



  saveAsImage(parent: FixMeLater) {
    let parentElement = null

    if (this.elementType === "canvas") {
      // fetches base 64 data from canvas
      parentElement = parent.qrcElement.nativeElement
        .querySelector("canvas")
        .toDataURL("image/png")
    } else if (this.elementType === "img" || this.elementType === "url") {
      parentElement = parent.qrcElement.nativeElement.querySelector("img").src
    } else {
      alert("Set elementType to 'canvas', 'img' or 'url'.")
    }

    if (parentElement) {
      // converts base 64 encoded image to blobData
      let blobData = this.convertBase64ToBlob(parentElement)
      // saves as image
      const blob = new Blob([blobData], { type: "image/png" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "customQR"
      link.click()
    }
  }

  private convertBase64ToBlob(Base64Image: string) {
    // split into two parts
    const parts = Base64Image.split(";base64,")
    // hold the content type
    const imageType = parts[0].split(":")[1]
    // decode base64 string
    const decodedData = window.atob(parts[1])
    // create unit8array of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length)
    // insert all character code into uint8array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i)
    }
    // return blob image after conversion
    return new Blob([uInt8Array], { type: imageType })
  }


  protected readonly QrCodeType = QrCodeType;
}
