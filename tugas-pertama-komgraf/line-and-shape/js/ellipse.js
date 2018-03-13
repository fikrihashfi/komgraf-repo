class Ellipse {

  constructor() {
    this.ellipseList = new Array();
  }

  add(id, x, y, d) {
    if (this.ellipseList[id - 1] === undefined) {
      console.log("push");
      this.ellipseList.push([x, y, d]);
    } else {
      console.log("ubah");
      this.ellipseList[id - 1] = [x, y, d];
    }
  }

  loopHere() {
    if (this.ellipseList.length === 0) {
      return;
    } else {
      for (var i = 0; i < this.ellipseList.length; i++) {
        fill(255);
        let _x1 = this.ellipseList[i][0];
        let _y1 = this.ellipseList[i][1];
        let d = this.ellipseList[i][2];
        textSize(16);
        let coor1 = "(" + _x1 / gridRatio + "," + _y1 / gridRatio + ") , d = " + d/gridRatio + " ";
        ellipse(_x1, -_y1, d);
        fill(0);
        text(coor1, _x1-(d/4), -_y1);
      }
    }
  }

}
