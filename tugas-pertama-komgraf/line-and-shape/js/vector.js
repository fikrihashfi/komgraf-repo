class Vector{

  constructor(){
    console.log("tes");
    this.vectorList = new Array();
  }

  add(id,x1,y1){
    if(this.vectorList[id-1] === undefined){
      console.log("push");
      this.vectorList.push([x1,y1]);
    }else{
      console.log("ubah");
      this.vectorList[id-1] = [x1,y1];
    }
  }

  loopHere(){
    if(this.vectorList.length === 0){
      return;
    }else{
      for(var i = 0 ; i < this.vectorList.length ; i++){
        let x = this.vectorList[i][0];
        let y = this.vectorList[i][1];
        line(0,0,x,-y)
        ellipse(x,-y,gridRatio);
      }
    }
  }

}
