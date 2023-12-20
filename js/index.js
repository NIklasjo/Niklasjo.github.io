   
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
      function onScrollLayoutGrid3()
      {
         var $obj = $("#wb_LayoutGrid3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimationResume('wb_Card1');
            AnimationResume('wb_Card2');
            AnimationResume('wb_Card3');
            AnimationResume('wb_Card4');
            AnimationResume('FontAwesomeIcon1');
            AnimationResume('FontAwesomeIcon2');
            AnimationResume('wb_FontAwesomeIcon3');
            AnimationResume('wb_FontAwesomeIcon4');
         }
      }
      onScrollLayoutGrid3();
      $(window).scroll(function(event)
      {
         onScrollLayoutGrid3();
      });
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
   
   var el = document.getElementById('LayoutGrid3');
   if (el.addEventListener)
   {
      el.addEventListener('animationstart', onAnimationStartLayoutGrid3);
      el.addEventListener('animationiteration', onAnimationIterationLayoutGrid3);
      el.addEventListener('touchmove', ontouchmoveLayoutGrid3);
      el.addEventListener('touchstart', ontouchstartLayoutGrid3);
   }
   function onAnimationStartLayoutGrid3(e)
   {
      AnimationResume('FontAwesomeIcon1');
   }
   function onAnimationIterationLayoutGrid3(e)
   {
      AnimationResume('wb_FontAwesomeIcon3');
   }
   function ontouchmoveLayoutGrid3(e)
   {
      AnimationResume('wb_Card1');
      AnimationResume('wb_Card2');
      AnimationResume('wb_Card3');
      AnimationResume('wb_Card4');
      AnimationResume('wb_FontAwesomeIcon4');
   }
   function ontouchstartLayoutGrid3(e)
   {
      AnimationResume('FontAwesomeIcon2');
   }
   