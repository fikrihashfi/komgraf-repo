function handlerLineInput(x1,y1,x2,y2){
  if(x1 == "" || y1 == "" || x2 == "" || y2 == ""){
    alert("Input harus terisi semua !")
    return false;
  }
  return true;
}

function maxInputHandler(x1,y1,x2,y2){
  x1 = x1 % 600;
  y1 = x1 % 275;
  x2 = x2 % 600;
  y2 = y2 % 275;
}
