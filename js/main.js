$(function(){
  
$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/prev-btn.svg" alt="next-button"></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/next-btn.svg" alt="prev-button" ></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {

      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
      }
    }
  ]
});

$('.reviews-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
      }
    }
  ]
});
});
