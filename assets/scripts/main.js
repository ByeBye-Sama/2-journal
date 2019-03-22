$(document).ready(function () {

  $('.js_btnSocial').on('click', function (e) {
    e.preventDefault();
    $('.share-panel').slideToggle("slow");
  });

  $('.js_btnSearch').on('click', function (e) {
    e.preventDefault();
    $('.logo, .headernav, .miscnav').addClass('hide');
    $('.search').slideToggle("slow");
  });

});
