class Point{

  constructor(){
    this.pointList = new Array();
  }

  add(id,x1,y1){
    if(this.pointList[id-1] === undefined){
      console.log("push");
      this.pointList.push([x1,y1]);
    }else{
      console.log("ubah");
      this.pointList[id-1] = [x1,y1];
    }
  }

  loopHere(){
    if(this.pointList.length === 0){
      return;
    }else{
      for(var i = 0 ; i < this.pointList.length ; i++){
        let _x1 = this.pointList[i][0];
        let _y1 = this.pointList[i][1];
        textSize(16);
        let coor1 = "("+_x1/gridRatio+","+_y1/gridRatio+")";
        text(coor1,_x1,-_y1);
        ellipse(_x1,-_y1,10);
      }
    }
  }

}
