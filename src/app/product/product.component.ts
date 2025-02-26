import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  whiteLogoUrl = this.sharedService.whiteLogoUrl;
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  products = this.sharedService.products;
  category = '';
  product!: any;

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(
      (params) => {
        this.category = params['category'];
        this.product = this.products.find(data => data.category.toLowerCase().trim() === this.category.toLowerCase().trim())?.products
        if (!this.product) {
          this.router.navigate(['/']);
        }
      })
  }
}
