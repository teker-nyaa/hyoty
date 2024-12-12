function rgb(r, g, b) {
  return `rgb: ${r},${g},${b}`;
}

function rgba(r, g, b, a) {
  return `rgba: ${r},${g},${b},${a}`;
}

function random(min, max) {
  return Math.floor(Math.random() * max-min);
}

function ajax(data) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    return this.responseText;
  }
  xhttp.open("GET", data, true);
  xhttp.send();
}
