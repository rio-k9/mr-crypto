$(document).ready(function(){
  init();
  function init()
  {
    setCustomUrls();
    setHandlers();
    setUserCookies();
    setCustomerModal( { time : 60000})
  }
  function setUserCookies()
  {
    getPopupCookie();
    getInputCookie();
  }

  function setHandlers()
  {
    handleNav();
    handleBtnProduct();
    handleBtnForm();
    handleNavMobile();
  }

  function getPopupCookie()
  {
    let cookiesBar = $('.modal-cookies');

    cookiesBar.hide();
    if(!ij.cookie.get('gdprAccept'))
    {
      cookiesBar.fadeIn();
    }
    $('.btn-cookies').click(function()
    {
      ij.cookie.get('gdprAccept', true, 30);
      cookiesBar.fadeOut();
    });
  }

  function getInputCookie()
  {
      $('input[name="name"]').val(ij.cookie.get('userName') || '');
      $('input[name="email"]').val(ij.cookie.get('userEmail') || '');
  }

  function handleBtnProduct()
  {
    $('.btn-product-link').each(function(){
    $(this).click( function()
      {
        let body = $('html, body');
        body.animate({
          scrollTop: $(".section-buynow").offset().top},1000);
      });
    })
  }

  function handleNav()
  {
    $('.nav-list .nav-list__item, img[alt="Logo"], .nav-bar--mobile ul li').click( function()
    {
      let body = $('html, body');
      let scrollTime = 1500;
      let navbarOffset = 85;
      switch(parseInt($(this).attr('data-nav')))
      {
        case 0:
          body.animate({
            scrollTop: $(".section-header").offset().top
          }, scrollTime);
          break;
        case 1:
          body.animate({
            scrollTop: $(".section-explicacion").offset().top - navbarOffset
          }, scrollTime);
          break;
        case 2:
          body.animate({
            scrollTop: $(".section-comienza").offset().top - navbarOffset
          }, scrollTime);
          break;
        case 3:
          body.animate({
            scrollTop: $("footer").offset().top - navbarOffset
          }, scrollTime);
          break;
      }
    });
  }

  function handleBtnForm()
  {
    if($("form").length){
      $('.btn-form').click(function()
      {
        let body = $('html, body');
        let scrollTime = 1500;
        let navbarOffset = 85;
        body.animate({
          scrollTop: $("form").offset().top - navbarOffset
        }, scrollTime);
        ij.cookie.set('userEmail', $('input[name="email"]').val(), 30);
        ij.cookie.set('userName', $('input[name="name"]').val(), 30);
      });
    }
  }

  function handleNavMobile()
  {
    let navMobile= $('.nav-bar--close, #hamburger-icon');
    navMobile.click(function()
    {
      $('nav.nav-bar, nav.nav-bar--mobile, .nav-bar--mobile-filter').toggleClass('active');
    });
  }

  function renderCustomers(options)
  {
    let customerBar = $('.js-userbar .modal-user__content:last-child span');
    let customer = ij.el('span', null, callCustomer(), customerBar);
    let message = ij.el('span', null, callMessage(), customerBar);
    setInterval(function()
    {
      let interactiveBar = $('.js-userbar');
      interactiveBar.toggleClass('visible');
      if (!interactiveBar.hasClass('visible'))
      {
        setTimeout(function ()
        {
          customer.ijContent(callCustomer());
          message.ijContent(callMessage());
        }, 2000)
      }
      else
      {
        setTimeout(function ()
        {
          interactiveBar.toggleClass('visible');
        }, 6000)
      }
    }, options.time);
  }

  function setCustomUrls()
  {
    fetch('bin/locale.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(localeData) {
        $.each(localeData, function(key, value){
          $("[data-locale]").each(function(){
            let div = $(this);
            if (div.attr('data-locale') === key){
              if (value.includes('http') || value.includes('https')){
                div.attr('href', value);
              }
            }
          })
        })
      });
  }

  function setCustomerModal(options)
  {
    options = {
        time : options.time || '10000',
      };
    let validate = !!$('.js-userbar .modal-user__content:last-child span').length
    if (validate)
      renderCustomers(options);
  }

});
