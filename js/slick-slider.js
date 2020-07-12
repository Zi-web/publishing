/*-----------------slick-slider------------------*/
/*$('.projects-item-slider').on('init', function(event, slick, currentSlide){
  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
  $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
});
*/
$('.projects-thumb-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.projects-item-slider',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  infinite: true,
  responsive:  [
        {
          breakpoint: 1100,
          settings: {
              slidesToShow: 2,
          }
        },
        {
          breakpoint: 428,
          settings: {
              arrows: false,
              slidesToShow: 2,
          }
        }
      ]
});

$('.projects-item-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.projects-thumb-slider',
  infinite: true
});

/*
var current = 0; // current slider dupa refresh
$('.portfolio-thumb-slider .slick-slide:not(.slick-cloned)').eq(current).addClass('slick-current');
$('.portfolio-item-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  current = currentSlide;
  $('.portfolio-thumb-slider .slick-slide').removeClass('slick-current');
  $('.portfolio-thumb-slider .slick-slide:not(.slick-cloned)').eq(current).addClass('slick-current');
  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4

  if(totalSlidesPerPage > slick.slideCount) {
    $('.controls').html(nrCurrentSlide + " - " + slick.slideCount + " of " + slick.slideCount);
  } else {
    $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
  }
});
*/

/*$('.slider-single').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: false,
	useTransform: true,
 	speed: 400,
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

$('.slick-prev').click(function(){
  $('.slider-single').slick('slickPrev');
})

$('.slick-next').click(function(){
  $('.slider-single').slick('slickNext');
})


 $('.slider-nav')
 	.on('init', function(event, slick) {
 		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
 		slidesToShow: 3,
 		slidesToScroll: 3,
 		arrows: false,
 		dots: false,
 		focusOnSelect: false,
 		infinite: false,
 		responsive: [{
 			breakpoint: 834,
 			settings: {
 				slidesToShow: 3,
 				slidesToScroll: 3,
 			}
 		}, {
 			breakpoint: 724,
 			settings: {
 				slidesToShow: 3,
 				slidesToScroll: 3,
			}
 		}, {
 			breakpoint: 480,
 			settings: {
 				slidesToShow: 3,
 				slidesToScroll: 3,
		}
 		}]
 	});

 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
 	$('.slider-nav').slick('slickGoTo', currentSlide);
 	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');

 	$('.slider-single').slick('slickGoTo', goToSingleSlide);
 });
*/