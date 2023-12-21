   
   $(document).ready(function()
   {
      $("a[href*='#Header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_Header').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#FlexContainer_bakgrundsbild']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#FlexContainer_bakgrundsbild').offset().top }, 600, 'easeOutQuart');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#FlexContainer3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#FlexContainer3').offset().top }, 600, 'easeOutQuart');
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top-68 }, 600, 'easeOutCirc');
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
