// Sätt upp länken för Google Slides-publicering
const googleSlidesUrl = "https://docs.google.com/presentation/d/e/2PACX-1vRi-AkpEvBey5vRYncDsIq-yLJcEd9ziAHt2KA-9jPCuVlHfbmb1o3HF3_--FcuMWudWyUi9qh-OscW/pub?start=false&loop=false&delayms=3000&slide=id.p";

// Funktion för att ladda Google Slides och visa det i div
function loadGoogleSlides() {
    const container = document.getElementById('google-slides-container');
    container.innerHTML = `<object data="${googleSlidesUrl}" type="application/x-shockwave-flash" width="100%" height="100%">
                             <param name="movie" value="${googleSlidesUrl}">
                           </object>`;
}

// Ladda initialt och sätt intervall för att uppdatera var 20:e sekund
loadGoogleSlides();
setInterval(loadGoogleSlides, 20000); // 20000 millisekunder = 20 sekunder

               
