//Инициализации слайдеров
function initSliders() {
    
    var thumbsSwiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Отображать 4 миниатюры одновременно
        freeMode: true,
        watchSlidesProgress: true,
      });
    
      // Инициализация основного слайдера
      var mainSwiper = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumbsSwiper,
        },
      });
    
      // Синхронизация перелистывания основного слайдера с thumbnails-слайдером
      mainSwiper.on('slideChange', function () {
        thumbsSwiper.slideTo(mainSwiper.realIndex);
      });
    
      // Синхронизация перелистывания thumbnails-слайдера с основным слайдером
      thumbsSwiper.on('slideChange', function () {
        mainSwiper.slideTo(thumbsSwiper.realIndex);
      });

}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
});