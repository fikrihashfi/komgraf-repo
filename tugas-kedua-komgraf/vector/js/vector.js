class Vector{

  constructor(){
    console.log("tes");
    this.vectorList = new Array();
  }

  add(id,x1,y1){
    if(this.vectorList[id-1] === undefined){
      console.log("push");
      this.vectorList.push([x1,y1,id]);
    }else{
      console.log("ubah");
      this.vectorList[id-1] = [x1,y1,id];
    }
  }

  loopHere(){
    if(this.vectorList.length === 0){
      return;
    }else{
      for(var i = 0 ; i < this.vectorList.length ; i++){
        let x = this.vectorList[i][0];
        let y = this.vectorList[i][1];
        let id = this.vectorList[i][2];
        line(0,0,x,-y);
        text("Vector "+id+" ("+x/gridRatio+","+y/gridRatio+")",x,-y);
      }
      this.drawResultan();
    }
  }

  drawResultan(){
    if(this.vectorList.length == 1){
      return;
    }else{
      console.log("Masuk sini");
      let jumlahX = 0;
      let jumlahY = 0;
      for(var i = 0 ; i < this.vectorList.length ; i++){
        jumlahX += this.vectorList[i][0];
        jumlahY += this.vectorList[i][1];
      }
      line(0,0,jumlahX,-jumlahY);
      text("Garis Resultan",jumlahX,-jumlahY);
    }
  }

  drawArrow(x,y){
    rotate(Pi / 2);
    line(x,-y,x-gridRatio,-y+gridRatio);
  }

}
