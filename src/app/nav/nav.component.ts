import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import { category } from '../data/category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  logoUrl = this.sharedService.logoUrl;
  mobileNumber = this.sharedService.mobileNumber
  whiteLogoUrl = this.sharedService.whiteLogoUrl;
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  products = this.sharedService.products;
  emailSub = '';
  isActive = false;
  productCategory = category

  constructor(private sharedService: SharedService, private route: Router, private activatedRoute: ActivatedRoute) {
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isActive = event.url.includes('product')
      }
    });
  }


  sub(): void {
    if (this.emailSub) {
      this.sharedService.sendEmail({ email: this.emailSub })
      this.emailSub = ''
    }
  }

  loadScripts() {
    const dynamicScripts = [
      "assets/js/jquery.js",
      "assets/js/waypoints.js",
      "assets/js/bootstrap.bundle.min.js",
      "assets/js/swiper-bundle.js",
      "assets/js/slick.js",
      "assets/js/magnific-popup.js",
      "assets/js/counterup.js",
      "assets/js/wow.js",
      "assets/js/isotope-pkgd.js",
      "assets/js/imagesloaded-pkgd.js",
      "assets/js/ajax-form.js",
      "assets/js/aos.js",
      "assets/js/meanmenu.js",
      "assets/js/nice-select.js",
      "assets/js/jquery.appear.js",
      "assets/js/jquery.knob.js",
      "assets/js/main.js",
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  navigation(category: string): void {
    this.route.navigate(['products', {
      query: {
        category: category
      }
    }])
  }
}
