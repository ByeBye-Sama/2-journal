$(document).ready(function () {

  $('.js_btnSocial').on('click', function (e) {
    e.preventDefault();
    $('.share-panel').slideToggle("slow");
  });

  $('.js_btnSearch').on('click', function (e) {
    e.preventDefault();
    $('.logo, .headernav, .miscnav').hide();
    $('.share-panel').slideUp();
    $('.search').slideDown("slow");
  });

  $('.js_btnCancel').on('click', function (e) {
    e.preventDefault();
    $('.search').hide();
    $('.logo, .headernav, .miscnav').slideDown("slow");
  });

  $('.js_btnMenu').on('click', function (e) {
    e.preventDefault();
    $('.hamburger-menu').hide();
    $('.rsp-headernav, .share-panel, .rsp-miscnav').slideDown("slow");
  });

  $('.js_rspSearch').on('click', function (e) {
    e.preventDefault();
    $('.search').slideDown("slow");
    $('.logo, .js_btnCancel').hide();
  });

  $('.js_rspCancel').on('click', function (e) {
    e.preventDefault();
    $('.search, .rsp-miscnav').hide();
    $('.logo, .hamburger-menu').slideDown("slow");
    $('.rsp-headernav, .share-panel').slideUp();
  });

});
