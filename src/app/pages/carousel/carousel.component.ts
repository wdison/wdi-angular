import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wdi-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  imagesBasic = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images2 = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images4 = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  showNavigationArrows = false;
  showNavigationIndicators = false;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    // var base = [];
    // for (let i = 0; i < 1001; i++) {
    //   base.push(i);
    // }
    // this.images = base.map((n) => `https://picsum.photos/id/${n}/900/500`);

    // // configurações para imagens4
    // // customize default values of carousels used by this component tree
    // config.interval = 10000;
    // config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
