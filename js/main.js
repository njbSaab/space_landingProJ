$(function(){
 $('.slider__box').slick({
   prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/Arrow-left.svg" alt="Arrow-left">',
   nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/Arrow-right.svg" alt="Arrow-right">'
 });

 $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('active');
 });
});