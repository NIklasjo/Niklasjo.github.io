   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var darkmode_switch = document.querySelector('#darkmode_switch');
      var bsdarkmode_switch = new bootstrap.Tooltip(darkmode_switch, {offset:[0,14],placement:'bottom', html: true, sanitize: false, title: '<span style="color:#000000;font-family:Arial;font-size:13px;">Click the icon to toggle between dark and light mode</span>', trigger: 'manual', animation: true, customClass:'ToolTip1'});
      darkmode_switch.addEventListener('inserted.bs.tooltip', function(e)
      {
         var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
         tooltip.classList.add('animate-show');
      });
      darkmode_switch.addEventListener('hide.bs.tooltip', function(e)
      {
         var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
         tooltip.classList.remove('animate-show');
         var forceReflow = e.target.offsetWidth;
      });
      var SlideShow1 = new bootstrap.Carousel("#SlideShow1", {interval:3000, ride: true});
      var SlideShow2 = new bootstrap.Carousel("#SlideShow2", {interval:3000, ride: true});
      var SlideShow3 = new bootstrap.Carousel("#SlideShow3", {interval:3000, ride: true});
   });
   
   $(document).ready(function()
   {
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
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
      $("a[href*='#FlexContainer3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#FlexContainer3').offset().top }, 600, 'easeOutQuart');
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
      
      var wb_Timer1;
      function TimerStartTimer1()
      {
         wb_Timer1 = setTimeout(function()
         {
            var event = null;
            bootstrap.Tooltip.getInstance('#darkmode_switch').show();
         }, 1000);
      }
      function TimerStopTimer1()
      {
         clearTimeout(wb_Timer1);
      }
      TimerStartTimer1();
         
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
   