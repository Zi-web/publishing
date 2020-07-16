$('.single-item').slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
 });


$('.center').slick({
centerMode: true,
 centerPadding: '0px',
  slidesToShow: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});