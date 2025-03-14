import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import { category } from '../data/category';
import { productDetail } from '../data/product-details';
import { product } from '../data/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @ViewChild('scrollView') scrollView!: ElementRef
  mobileNumber = this.sharedService.mobileNumber
  email = this.sharedService.email;
  address = this.sharedService.address;
  indMobileNumber = this.sharedService.indMobileNumber
  companyName = this.sharedService.companyName;
  productDetails!: any
  relatedProduct!: any
  categoryRoute!: any

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private router: Router) {
    const file = ["assets/js/main.js", "assets/js/swiper-bundle.js"]
    for (let i = 0; i < file.length; i++) {
      const node = document.createElement('script');
      node.src = file[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    this.route.params.subscribe(
      (params) => {
        const categoryId = params['category'] && category.find(data => data.router === params['category'])?.categoryId;
        const productId = parseFloat(params['productId'])
        if (categoryId && productId) {
          this.productDetails = productDetail.find(data => data.categoryId === categoryId && data.productId === productId)
          const products = product.find(data => data.categoryId === categoryId && data.productId === productId);
          this.relatedProduct = product.filter(data => data.categoryId === categoryId) || [];
          this.categoryRoute = params['category'];
          if (this.productDetails && products) {
            this.productDetails.productName = products?.productName
          } else {
            this.router.navigate(['/home'])
          }
        } else {
          this.router.navigate(['/home'])
        }
        setTimeout(() => {
          this.scrollView?.nativeElement.scrollIntoView();
        }, 0);
      })
  }

}
