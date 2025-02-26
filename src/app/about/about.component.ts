import { Component } from '@angular/core';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  whiteLogoUrl = this.sharedService.whiteLogoUrl;
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;

  constructor(private sharedService: SharedService) {

  }
}
