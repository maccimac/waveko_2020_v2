
function init(){
  Home.initSlickCarousels();

}

var Home = {
  initSlickCarousels: () =>{
    $('#homeHeroCarousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 6000,
      centerMode: true,
      arrows: false,
      dots: true,
      variableWidth: true,
    });

    $('#homeShopCarousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      // dots: true,
      variableWidth: true,
      prevArrow: $('#homeShopCarouselPrev'),
      nextArrow: $('#homeShopCarouselNext'),
    });
  }
}

$(document).ready(function(){
  init()
})
