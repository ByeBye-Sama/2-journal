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

  if ($(document).width() <=426) {
    $('.js_tagnav').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
  } else if ($(document).width() >=426 && $(document).width() <=768) {
    $('.js_tagnav').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
  } else {
    $('.js_tagnav').slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
  }

  $('.js_slideNew').slick({
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true
  });

});
