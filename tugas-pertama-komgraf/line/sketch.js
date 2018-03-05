function unZoom() {
  document.body.style.zoom = "90%";
}

var totalLine = 1;

function setup() {
  var canvas = createCanvas(1200, 550);
  canvas.parent('canvas');
}

function draw() {
  background(255);
  drawLine();
}

function drawLine() {
  var i = 1;
  for (var i = 1; i <= totalLine; i++) {
    let x1 = document.getElementById('x1-' + i);
    let y1 = document.getElementById('y1-' + i);
    let x2 = document.getElementById('x2-' + i);
    let y2 = document.getElementById('y2-' + i);
    line(x1.value, 550 - y1.value, x2.value, 550 - y2.value);
    console.log("gambar ke - " + i);
  }
}

function addLine() {
  totalLine += 1;
  var div = document.createElement('div');
  div.className = 'coordinate-card flex';
  var html = '<h1>Coordinate</h1>' + '<div class="coordinate-wrapper flex">' + '<input id="x1-' + totalLine + '" type="number" value="" placeholder="Coordinate x1" onblur="handler()">' + '<input id="y1-' + totalLine + '" type="number" value="" placeholder="Coordinate y1" onblur="handler()">' + '<input id="x2-' + totalLine + '" type="number" value="" placeholder="Coordinate x2" onblur="handler()">' + '<input id="y2-' + totalLine + '" type="number" value="" placeholder="Coordinate y2" onblur="handler()">';
  div.innerHTML = html;
  document.getElementById('line-container').appendChild(div);
}

function clearLine() {
  location.reload();
}

function handler() {
  for (var i = 1; i <= totalLine; i++) {
    let x1 = document.getElementById('x1-' + i);
    let y1 = document.getElementById('y1-' + i);
    let x2 = document.getElementById('x2-' + i);
    let y2 = document.getElementById('y2-' + i);
    x1.value = Math.abs(x1.value) % 1200;
    y1.value = Math.abs(y1.value) % 550;
    x2.value = Math.abs(x2.value) % 1200;
    y2.value = Math.abs(y2.value) % 550;
  }
}
