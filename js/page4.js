               
                   const url = "https://docs.google.com/presentation/d/e/2PACX-1vRi-AkpEvBey5vRYncDsIq-yLJcEd9ziAHt2KA-9jPCuVlHfbmb1o3HF3_--FcuMWudWyUi9qh-OscW/pub?start=false&loop=false&delayms=3000&slide=id.p";
               
                   // Funktion för att begära helskärm
                   function goFullscreen() {
                     const elem = document.documentElement;
                     if (elem.requestFullscreen) {
                       elem.requestFullscreen();
                     } else if (elem.webkitRequestFullscreen) {
                       elem.webkitRequestFullscreen();
                     } else if (elem.msRequestFullscreen) {
                       elem.msRequestFullscreen();
                     }
                   }
               
                   // Vänta lite så sidan laddas, sen kör vi
                   setTimeout(() => {
                     goFullscreen();
                     window.location.href = url;
                   }, 1500);
                 
               