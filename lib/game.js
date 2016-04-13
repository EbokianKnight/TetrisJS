var Game = function () {
  this.grid = newGrid();
};

var newRow = [[],[],[],[],[],[],[],[],[],[]];

var newGrid = function () {
  var grid = [];
  for (var i = 0; i < 20; i++) {
    grid.push(newRow);
  }
  return grid;
};

var fullRow = function (row){
  for (var i = 0; i < row.length; i++) {
    if (row[i].length === 0) return false;
  }
  return true;
};

Game.prototype.clearRows = function () {
  cleared = 0;
  this.grid.forEach(function(row, idx){
    if (fullRow(row)) {
      this.grid.splice(idx,1);
      this.grid.push(newRow);
      cleared ++;
    }
  });
  return cleared;
};

Game.prototype.inBounds = function (pos) {
  if (pos.x < 0 || pos.x > 9) {
    return false;
  } else if (pos.y > 20) {
    return false;
  } else {
    return true;
  }
};
