"use strict";

$(document).ready(function () {
  // 漢堡選單點後下拉選單出現
  $('.navBar__burger').click(function (e) {
    e.preventDefault();
    $('.navBar__burger').toggleClass('is-open');
    $('.navBar').toggleClass('is-show');
    $('.navBar__nav__list--dropdownMb').removeClass('is-open');
  });
  $('.navBar__nav__list--show').click(function (e) {
    e.preventDefault();
    $('.navBar__nav__list--dropdownMb').toggleClass('is-open');
  });
  $('.content').click(function (e) {
    $('.navBar').removeClass('is-show');
    $('.navBar__nav__list--dropdownMb').removeClass('is-open');
  }); // cancle a tag function

  $('.product__list--iconHeart').click(function (e) {
    e.preventDefault();
  }); // ! 滑動完後重新點burgerMenu又會跳出來dropdownMb
  // ! 少了$('.navBar__nav__list--dropdownMb').toggleClass('is-open');

  $("#btn-card,#btnPad-card").on("click", function () {
    $('html, body').animate({
      scrollTop: $(".tagCard").offset().top
    }, 750);
    $('.navBar__burger').toggleClass('is-open');
    $('.navBar').toggleClass('is-show');
    $('.navBar__nav__list--dropdownMb').toggleClass('is-open');
  });
  $("#btn-news,#btnPad-news").on("click", function () {
    $('html, body').animate({
      scrollTop: $(".tagNews").offset().top
    }, 750);
    $('.navBar__burger').toggleClass('is-open');
    $('.navBar').toggleClass('is-show');
    $('.navBar__nav__list--dropdownMb').toggleClass('is-open');
  });
  $("#btn-booking,#btnPad-booking").on("click", function () {
    $('html, body').animate({
      scrollTop: $(".tagBooking").offset().top
    }, 750);
    $('.navBar__burger').toggleClass('is-open');
    $('.navBar').toggleClass('is-show');
    $('.navBar__nav__list--dropdownMb').toggleClass('is-open');
  });
});