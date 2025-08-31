$(function () {
  $(".u-m-library-lists").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".u-m-library-list-left",
    nextArrow: ".u-m-library-list-right",
  });
});
