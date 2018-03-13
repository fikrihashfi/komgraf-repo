var totalPoint = 1;
var totalLine = 1;
var totalPoly = 1;
var totalEllipse = 1;
let lines = new Line();
let polygons = new Polygon();
let points = new Point();
let ellipses = new Ellipse();

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
  points.loopHere();
  ellipses.loopHere();
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
  var counterX = -11;
  var counterY = 5;
  for (var i = 25; i < 1200; i += 50) {
    strokeWeight(0.4);
    line(0, i, 1200, i);
    textSize(15);
    text(counterX,i+25,275);
    line(i+25, 0, i+25, 550);
    text(counterY,600,i);
    fill(0);
    counterX += 1;
    counterY -= 1;
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
    if (temp > 7) {
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
  Function to add a point in canvas
*/
function addPoint(){
  totalPoint += 1;
  var parent = document.getElementById('item-container');
  var temp = document.createElement('div');
  temp.className = 'flex';
  temp.id = 'point-card';
  temp.innerHTML =
  '<h2 class="card-caption">Point ' + totalPoint + '</h2>' +
  '<div class="separator-card">' + '</div>' +
  '<div class="point-input-container flex">'
  + '<input id="point-x1-' + totalPoint + '" type="number" name="" value="" placeholder="Coordinate x1">'
  + '<input id="point-y1-' + totalPoint + '" type="number" name="" value="" placeholder="Coordinate y1">' +
  '</div>' + '<div class="separator-card">' + '</div>'
  + '<button id="point-' + totalPoint + '" type="button" class="btn active btn-custom" onclick="drawPoint(this.id)"><code class="button-caption">DRAW</code></button>';
  parent.appendChild(temp);
}

/*
  Function to add ellipse
*/
function addEllipse(){
  totalEllipse += 1;
  var parent = document.getElementById('item-container');
  var temp = document.createElement('div');
  temp.className = 'flex';
  temp.id = 'ellipse-card';
  temp.innerHTML =
  '<h2 class="card-caption">Ellipse ' + totalEllipse + '</h2>' +
  '<div class="separator-card">' + '</div>' +
  '<div class="ellipse-input-container flex">'
  + '<input id="ellipse-x-' + totalEllipse + '" type="number" name="" value="" placeholder="Center x">'
  + '<input id="ellipse-y-' + totalEllipse + '" type="number" name="" value="" placeholder="Center y">' +
  '<input id="ellipse-d-'+ totalEllipse +'" type="number" name="" value="" placeholder="Diameter">' +
  '</div>' + '<div class="separator-card">' + '</div>'
  + '<button id="ellipse-' + totalEllipse + '" type="button" class="btn active btn-custom" onclick="drawEllipse(this.id)"><code class="button-caption">DRAW</code></button>';
  parent.appendChild(temp);
}

/*
  Function to add a vector in canvas
*/
function addVector(){
  console.log("Add Vector");
}

/*
  Function to draw a point
*/
function drawPoint(id){
  const pointId= id.split("-");
  let _x1 = document.getElementById('point-x1-' + pointId[1]);
  let _y1 = document.getElementById('point-y1-' + pointId[1]);
  if(handlerPointInput(_x1.value,_y1.value)){
    _x1.value = _x1.value % 12;
    _y1.value = _y1.value % 5;
    points.add(pointId[1],_x1.value*50,_y1.value*50)
  }
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
    _x1.value = _x1.value % 12;
    _y1.value = _y1.value % 5;
    _x2.value = _x2.value % 12;
    _y2.value = _y2.value % 5;
    lines.add(lineId[1], _x1.value*50, _y1.value*50, _x2.value*50, _y2.value*50);
  }
}

/*
  Function to draw a ellipse
*/
function drawEllipse(id){
  const ellipseId = id.split("-");
  let x = document.getElementById('ellipse-x-' + ellipseId[1]);
  let y = document.getElementById('ellipse-y-' + ellipseId[1]);
  let d = document.getElementById('ellipse-d-' + ellipseId[1]);
  if(handlerEllipseInput(x.value,y.value,d.value)){
    x.value = x.value % 12;
    y.value = y.value % 5;
    d.value = d.value % 11;
    ellipses.add(ellipseId[1],x.value*50,y.value*50,d.value*50);
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
        tempX.value = tempX.value % 12;
        tempY.value = tempY.value % 5;
        vertextList.push([tempX.value*50, tempY.value*50]);
      }
    }
  }
  polygons.add(polyId[1],vertextList);
  polygons.test();
}
