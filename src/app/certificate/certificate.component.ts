import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/service/shared.service';
import { Fancybox } from "@fancyapps/ui";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  @ViewChild('fancyLink') fancyLink!: ElementRef;
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  whiteLogoUrl = this.sharedService.whiteLogoUrl;
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  certificate = this.sharedService.certificate;
  image = '';

  constructor(private sharedService: SharedService, private elRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
      // Custom options
    });
  }

  open(image: string): void {
    this.image = image;
    this.changeDetectorRef.detectChanges()
    this.fancyLink.nativeElement.click()
  }
}
