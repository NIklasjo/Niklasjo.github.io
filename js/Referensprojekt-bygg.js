   
   document.addEventListener('DOMContentLoaded', function(event)
   {
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
      function onScrollLayoutGrid2()
      {
         var $obj = $("#wb_LayoutGrid2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimationResume('Card1');
            AnimationResume('Card2');
            AnimationResume('Card3');
            AnimationResume('Card4');
            AnimationResume('FontAwesomeIcon1');
            AnimationResume('FontAwesomeIcon2');
            AnimationResume('FontAwesomeIcon3');
            AnimationResume('FontAwesomeIcon4');
         }
      }
      onScrollLayoutGrid2();
      $(window).scroll(function(event)
      {
         onScrollLayoutGrid2();
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
   
   var el = document.getElementById('LayoutGrid2');
   if (el.addEventListener)
   {
      el.addEventListener('touchmove', ontouchmoveLayoutGrid2);
   }
   function ontouchmoveLayoutGrid2(e)
   {
      AnimationResume('Card1');
      AnimationResume('Card2');
      AnimationResume('Card3');
      AnimationResume('Card4');
      AnimationResume('FontAwesomeIcon1');
      AnimationResume('FontAwesomeIcon2');
      AnimationResume('FontAwesomeIcon3');
      AnimationResume('FontAwesomeIcon4');
   }
   