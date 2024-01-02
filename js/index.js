   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var elementwelcome_carousel = document.querySelector('#welcome-carousel');
      elementwelcome_carousel.addEventListener('slid.bs.carousel', function(e)
      {
         switch(e.to)
         {
            case 0:
               AnimateCss('welcome-button1', 'slide-down-in', 2000, 1000);
               break;
            case 1:
               AnimateCss('welcome-button2', 'slide-down-in', 2000, 1000);
               break;
            case 2:
               AnimateCss('welcome-button3', 'slide-down-in', 2000, 1000);
               break;
         }
      });
      var welcome_carousel = new bootstrap.Carousel('#welcome-carousel', {interval: 3000, pause: false});
      var Carousel3 = new bootstrap.Carousel('#Carousel3', {interval: 3000, pause: false});
      var elementCarousel1 = document.querySelector('#Carousel1');
      elementCarousel1.addEventListener('slid.bs.carousel', function(e)
      {
         switch(e.to)
         {
            case 0:
               AnimateCss('welcome-button1', 'slide-down-in', 2000, 1000);
               break;
         }
      });
      var Carousel1 = new bootstrap.Carousel('#Carousel1', {interval: 3000, pause: false});
   });
   
   $(document).ready(function()
   {
      $("a[href*='#Header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Header').offset().top }, 600, 'easeOutSine');
      });
   });
   
   $(document).ready(function(){
     $.cookieBar();
   });
   
   if(jQuery.cookieBar('cookies')){
     (function(){
       var gtagScript = document.createElement('script');
       gtagScript.async = true;
       gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-VKHVM5ZNQR';
       document.head.appendChild(gtagScript);
       window.dataLayer = window.dataLayer || [];
       function gtag() { dataLayer.push(arguments); }
       gtag('js', new Date());
       gtag('config', 'G-VKHVM5ZNQR');
     })();
   }
