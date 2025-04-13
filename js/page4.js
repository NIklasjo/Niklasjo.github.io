function refreshSlide() {
  const iframe = document.getElementById('slide-frame');
  const baseUrl = "https://docs.google.com/presentation/d/e/2PACX-1vRi-AkpEvBey5vRYncDsIq-yLJcEd9ziAHt2KA-9jPCuVlHfbmb1o3HF3_--FcuMWudWyUi9qh-OscW/pub?start=false&loop=false&delayms=3000&slide=id.p";
  const timestamp = new Date().getTime();
  window.location.href = baseUrl + "&t=" + timestamp;
}
setInterval(refreshSlide, 20000);
