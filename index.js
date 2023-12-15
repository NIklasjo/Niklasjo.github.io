   
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
      $("a[href*='#FlexContainer_bakgrundsbild']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#FlexContainer_bakgrundsbild').offset().top }, 600, 'easeOutQuart');
      });
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
         
   var el = document.getElementById('LayoutGrid3');
   if (el.addEventListener)
   {
      el.addEventListener('touchmove', ontouchmoveLayoutGrid3);
   }
   function ontouchmoveLayoutGrid3(e)
   {
      AnimationResume('wb_Card1');
      AnimationResume('wb_Card2');
      AnimationResume('wb_Card3');
      AnimationResume('wb_Card4');
      AnimationResume('FontAwesomeIcon1');
      AnimationResume('FontAwesomeIcon2');
      AnimationResume('wb_FontAwesomeIcon3');
      AnimationResume('wb_FontAwesomeIcon4');
   }
   