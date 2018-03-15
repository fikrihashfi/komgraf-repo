class Line{

  constructor(){
    this.lineList = new Array();
  }

  add(id,x1,y1,x2,y2){
    if(this.lineList[id-1] === undefined){
      console.log("push");
      this.lineList.push([x1,y1,x2,y2,id]);
    }else{
      console.log("ubah");
      this.lineList[id-1] = [x1,y1,x2,y2,id];
    }
  }

  loopHere(){
    if(this.lineList.length === 0){
      return;
    }else{
      for(var i = 0 ; i < this.lineList.length ; i++){
        let _x1 = this.lineList[i][0];
        let _y1 = this.lineList[i][1];
        let _x2 = this.lineList[i][2];
        let _y2 = this.lineList[i][3];
        let id = this.lineList[i][4];
        textSize(16);
        let coor1 = "("+_x1/gridRatio+","+_y1/gridRatio+")";
        let coor2 = "Line "+id+" ("+_x2/gridRatio+","+_y2/gridRatio+")";
        text(coor1,_x1,-_y1);
        text(coor2,_x2,-_y2);
        line(_x1,-_y1,_x2,-_y2)
        fill(0,0,0);
        ellipse(_x1,-_y1,5);
        ellipse(_x2,-_y2,5);
      }
    }
  }

}
