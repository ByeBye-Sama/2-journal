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

});
