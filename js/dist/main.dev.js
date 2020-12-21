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
});