class Polygon{

  constructor(){
    this.polyList = new Array();
  }

  add(id,vertexListArray){
    if(this.polyList[id-1] === undefined){
      console.log("push");
      this.polyList.push(vertexListArray);
    }else{
      console.log("update");
      this.polyList[id-1] = vertexListArray;
    }
  }

  loopHere(){
    if(this.polyList.length === 0){
      return;
    }else{
      for(var i = 0 ; i < this.polyList.length ; i++){
        this.drawVertex(this.polyList[i]);
      }
    }
  }

  drawVertex(listVertex){
    beginShape();
    textSize(16);
    for(var j = 0 ; j < listVertex.length ; j++){
      let _x = listVertex[j][0];
      let _y =  listVertex[j][1];
      vertex(_x,-_y);
    }
    endShape(CLOSE);
    for(var j = 0 ; j < listVertex.length ; j++){
      let _x = listVertex[j][0];
      let _y =  listVertex[j][1];
      let str = "("+_x + "," + _y+")";
      text(str,_x,-_y);
    }
  }

  test(){
    for(var i = 0 ; i < this.polyList.length ; i++){
      console.log(this.polyList[i]);
    }
  }
}
