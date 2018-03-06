var totalLine = 1;
var totalPoly = 1;
let lines = new Line();
let polygons = new Polygon();

function setup() {
  var canvas = createCanvas(1200, 550);
  canvas.parent('canvas');
}

function draw() {
  background(255);
  drawGrid();
  drawXY();
  translate(600, 275);
  lines.loopHere();
  polygons.loopHere();
}

function drawXY() {
  strokeWeight(2);
  translate(600, 0);
  line(0, 0, 0, 550)
  translate(-600, 275);
  line(0, 0, 1200, 0);
  translate(0, -275);
}

function drawGrid() {
  for (var i = 25; i < 1200; i += 25) {
    strokeWeight(0.4);
    line(0, i, 1200, i);
    line(i, 0, i, 550);
  }
}

/*
  Function to add new line-card to the html
*/
function addLine() {
  totalLine += 1;
  var parent = document.getElementById('item-container');
  var temp = document.createElement('div');
  temp.className = 'flex';
  temp.id = 'line-card';
  temp.innerHTML = '<h2 class="card-caption">Line ' + totalLine + '</h2>' + '<div class="separator-card">' + '</div>' + '<div class="line-input-container flex">' + '<input id="line-x1-' + totalLine + '" type="number" name="" value="" placeholder="Coordinate x1">' + '<input id="line-y1-' + totalLine + '" type="number" name="" value="" placeholder="Coordinate y1">' + '<input id="line-x2-' + totalLine + '" type="number" name="" value="" placeholder="Coordinate x2">' + '<input id="line-y2-' + totalLine + '" type="number" name="" value="" placeholder="Coordinate y2">' + '</div>' + '<div class="separator-card">' + '</div>' + '<button id="line-' + totalLine + '" type="button" class="btn active btn-custom" onclick="drawLine(this.id)"><code class="button-caption">DRAW</code></button>';
  parent.appendChild(temp);
}

/*
  Function to add new polygon-card to the html
*/
function addPolygon() {
  totalPoly += 1;
  var vertextTotal = null;
  while (!vertextTotal) {
    var temp = prompt("Masukan Jumlah Vertext");
    if (temp >= 7) {
      alert("Maksimal Vertex = 7");
    } else if (temp <= 2) {
      alert("Vertex minimal 3 untuk membentuk sebuah bentuk")
    } else {
      vertextTotal = temp;
    }
  }
  var inputHtml = "";
  for (var i = 1; i <= vertextTotal; i++) {
    inputHtml += '<input id="poly-x' + i + '-' + totalPoly + '" type="number" name="" value="" placeholder="Coordinate x' + i + '">';
    inputHtml += '<input id="poly-y' + i + '-' + totalPoly + '" type="number" name="" value="" placeholder="Coordinate y' + i + '">';
  }
  var cardHtml = '<h2 class="card-caption">Polygon ' + totalPoly + '</h2>' + '<div class="separator-card">' + '</div>' + '<div class="polygon-input-container flex">' + inputHtml + '</div>' + '<div class="separator-card">' + '</div>' + '<button id="poly-' + totalPoly + '" type="button" class="btn active btn-custom" onclick="drawPoly(this.id)"><code class="button-caption">DRAW</code></button>';
  var parent = document.getElementById('item-container');
  var temp = document.createElement('div');
  temp.className = 'flex';
  temp.id = 'polygon-card';
  temp.innerHTML = cardHtml;

  parent.appendChild(temp);
}

/*
  Function to draw a line in canvas
*/
function drawLine(id) {
  const lineId = id.split("-");
  let _x1 = document.getElementById('line-x1-' + lineId[1]);
  let _y1 = document.getElementById('line-y1-' + lineId[1]);
  let _x2 = document.getElementById('line-x2-' + lineId[1]);
  let _y2 = document.getElementById('line-y2-' + lineId[1]);
  if (handlerLineInput(_x1.value, _y1.value, _x2.value, _y2.value)) {
    _x1.value = _x1.value % 600;
    _y1.value = _y1.value % 275;
    _x2.value = _x2.value % 600;
    _y2.value = _y2.value % 275;
    lines.add(lineId[1], _x1.value, _y1.value, _x2.value, _y2.value);
  }
}

/*
  Function to draw a polygon in canvas
*/
function drawPoly(id) {
  const polyId = id.split("-");
  var vertextList = new Array();
  var counter = 0;
  while (true) {
    counter += 1;
    let tempX = document.getElementById('poly-x' + counter + '-' + polyId[1]);
    let tempY = document.getElementById('poly-y' + counter + '-' + polyId[1]);
    if (tempX === null) {
      counter -= 1;
      break;
    } else {
      if (tempX.value === "" || tempY.value === "") {
        alert("Input harus terisi semua !");
        return;
      } else {
        tempX.value = tempX.value % 600;
        tempY.value = tempY.value % 275;
        vertextList.push([tempX.value, tempY.value]);
      }
    }
  }
  polygons.add(polyId[1],vertextList);
  polygons.test();
}
