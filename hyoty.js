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

class hyoty {
  constructer(el) {
    switch(el.chartAt(0)) {
        case: '#':
          this.el = document.getElementById(el.subString(1));
          break;

        case: '.':
          this.el = document.getElementByClassName(el.subString(1));
          break;

        default:
        this.el = document.getElementByTagName(el.subString(1));
    }
  }

  html(input) {
    this.el.setHTMLUnsafe(input);
  }
  
  text(input) {
    this.el.textContent = input;
  }

  attr(in1, in2) {
    this.el.setAttribute(in1, in2);
  }

  anim(in1, in2) {
    this.el.animate(in1, in2);
  }
}

function h(element) {
  return new hyoty(element);
}
