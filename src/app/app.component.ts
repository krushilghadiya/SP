import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sp';

  constructor() {
    this.loadScripts();
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

}
