function handlerLineInput(x1,y1,x2,y2){
  if(x1 == "" || y1 == "" || x2 == "" || y2 == ""){
    alert("Input harus terisi semua !")
    return false;
  }
  return true;
}

function handlerPointInput(x1,y1){
  if(x1 == "" || y1 == ""){
    alert("Input harus terisi semua !");
    return false;
  }
  return true;
}

function handlerEllipseInput(x,y,radius){
  if(x == "" || y == "" || radius == ""){
    alert("Input harus terisi semua !");
    return false;
  }
  return true;
}
