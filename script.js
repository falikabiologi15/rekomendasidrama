console.log("Website jalan!");
function changeBg(image, title) {
  const banner = document.querySelector('.banner');
  const text = document.querySelector('.content h2');

  banner.style.background =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('" + image + "')";

  text.innerHTML = title;
}
