function loadPhoto(e) {
  e.preventDefault();

  let grayscale = document.getElementById('grayscale').checked;
  let blur = document.getElementById('blur').checked;
  let blurAmount = document.getElementById('blurAmount').value;
  let random = Math.floor(Math.random() * 10000);

  let url = "https://picsum.photos/200";
  url += "?random=" + random;
  for (let i = 0; i < 16; i++) {
    url += ("?random=" + (random + i));
    if (grayscale) {
      url += "&grayscale";
    }
    if (blur) {
      url += "?blur=" + blurAmount;
    }
    document.getElementById('photo' + i).src = url;
  }
}
document.getElementById('get').addEventListener('click', loadPhoto);
