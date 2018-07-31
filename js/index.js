$(document).ready(function(){

  $('.js-userbar .user-bar__content:last-child span').html('<span>' +callCustomer() +'</span>' + callMessage())
  setInterval(function(){
    $('.js-userbar').toggleClass('visible');
    if (!$('.js-userbar').hasClass('visible')){
      setTimeout(function () {
        $('.js-userbar .user-bar__content:last-child span').html('<span>' +callCustomer() +'</span>' + callMessage())
      }, 2000)
    }
  }, 6500)
  $('.nav-list .nav-list__item, img[alt="Logo"], .nav-bar--mobile ul li').click( function(){
    switch(parseInt($(this).attr('data-nav'))){
      case 0:
        $('html, body').animate({
          scrollTop: $(".section-header").offset().top
        }, 1500);
        break;
      case 1:
        $('html, body').animate({
          scrollTop: $(".section-explicacion").offset().top
        }, 1500);
        break;
      case 2:
        $('html, body').animate({
          scrollTop: $(".section-que").offset().top
        }, 1500);
        break;
      case 3:
        $('html, body').animate({
          scrollTop: $("footer").offset().top
        }, 1500);
        break;
    }
  })
  $('.btn-form').click(function(){
    $('html, body').animate({
      scrollTop: $("form").offset().top
    }, 2000);
  })

  $('.btn-cookies').click(function(){
    $(this).parent().parent().remove();
  })

  var navMobile= $('.nav-bar--close, #hamburger-icon');
  navMobile.click(function() {
    $('nav.nav-bar, nav.nav-bar--mobile, .nav-bar--mobile-filter').toggleClass('active');
    return false;
  });
});