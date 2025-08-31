$(function () {
  $(".u-g-how-lists").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".u-g-how-lists-left",
    nextArrow: ".u-g-how-lists-right",
  });
});
