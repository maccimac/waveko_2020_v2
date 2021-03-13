
function init(){
  Home.initSlickCarousels();
  Shop.initSlickCarousels()

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
      prevArrow: $('.home__shop__carousel__prev'),
      nextArrow: $('.home__shop__carousel__next'),
    });
  }
}

var Shop = {
  initSlickCarousels: ()=>{
    $('#shopPrimary').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '#shopOptions'
    });
    $('#shopOptions').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '#shopPrimary',
     arrows: true,
     autoplay: true,
     autoplaySpeed: 2000,
     // dots: true,
     centerMode: true,
     focusOnSelect: true
    });

  }
}

$(document).ready(function(){
  init()
})
