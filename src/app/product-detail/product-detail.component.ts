import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import { category } from '../data/category';
import { productDetail } from '../data/product-details';
import { product } from '../data/product';
import Swiper from 'swiper';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @ViewChild('scrollView') scrollView!: ElementRef
  @ViewChild('shopSliderActive', { static: false }) shopSliderActive!: ElementRef
  mobileNumber = this.sharedService.mobileNumber
  email = this.sharedService.email;
  address = this.sharedService.address;
  indMobileNumber = this.sharedService.indMobileNumber
  companyName = this.sharedService.companyName;
  productDetails!: any
  relatedProduct!: any
  categoryRoute!: any

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params) => {
        const categoryId = params['category'] && category.find(data => data.router === params['category'])?.categoryId;
        const productId = parseFloat(params['productId'])
        if (categoryId && productId) {
          this.productDetails = productDetail.find(data => data.categoryId === categoryId && data.productId === productId)
          const products = product.find(data => data.categoryId === categoryId && data.productId === productId);
          this.relatedProduct = product.filter(data => data.categoryId === categoryId) || [];
          this.shopSliderActiveSwiper()
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

  ngAfterViewInit(): void {
    this.shopSliderActiveSwiper();
  }

  shopSliderActiveSwiper(): void {
    if (this.shopSliderActive) {
      new Swiper(this.shopSliderActive?.nativeElement, {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }
  }

}
