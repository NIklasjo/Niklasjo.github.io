   
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
      $("a[href*='#FlexContainer2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#FlexContainer2').offset().top }, 600, 'easeOutQuint');
      });
      $("a[href*='#FlexContainer1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#FlexContainer1').offset().top }, 600, 'easeOutQuart');
      });
      function onScrollLayoutGrid2()
      {
         var $obj = $("#wb_LayoutGrid2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimationResume('FontAwesomeIcon1');
            AnimationResume('FontAwesomeIcon2');
            AnimationResume('wb_FontAwesomeIcon3');
            AnimationResume('wb_FontAwesomeIcon4');
            AnimationResume('wb_Heading1');
            AnimationResume('wb_Heading2');
            AnimationResume('wb_Heading3');
            AnimationResume('wb_Heading4');
            AnimationResume('wb_Text1');
            AnimationResume('wb_Text2');
            AnimationResume('wb_Text3');
            AnimationResume('wb_Text4');
            AnimationResume('Button2');
            AnimationResume('Button1');
            AnimationResume('Button3');
            AnimationResume('Button4');
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
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top-68 }, 600, 'easeOutCirc');
      });
   });
      
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
      