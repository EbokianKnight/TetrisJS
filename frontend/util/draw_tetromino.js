var DrawTetromino = function (ctx, pos, length, rotation, piece) {
  switch (piece) {
    case "T":
      drawT(ctx, pos, length, rotation);
      break;
    case "L":
      drawL(ctx, pos, length, rotation);
      break;
    case "J":
      drawJ(ctx, pos, length, rotation);
      break;
    case "Z":
      drawZ(ctx, pos, length, rotation);
      break;
    case "S":
      drawS(ctx, pos, length, rotation);
      break;
    case "O":
      drawO(ctx, pos, length, rotation);
      break;
    case "I":
      drawI(ctx, pos, length, rotation);
      break;
  }
};

//T
function drawT(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x - length, pos.y);
  ctx.lineTo(pos.x - length, pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y);
  ctx.lineTo(pos.x + length, pos.y);
  ctx.lineTo(pos.x + length, pos.y - length);
  ctx.lineTo(pos.x, pos.y - length);
  ctx.lineTo(pos.x, pos.y);
  ctx.fillStyle = "Purple";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}
//L
function drawL(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x, pos.y - length);
  ctx.lineTo(pos.x - length, pos.y - length);
  ctx.lineTo(pos.x - length, pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y);
  ctx.lineTo(pos.x, pos.y);
  ctx.fillStyle = "Orange";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}

//J
function drawJ(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x - length, pos.y);
  ctx.lineTo(pos.x - length, pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y - length);
  ctx.lineTo(pos.x + length, pos.y - length);
  ctx.lineTo(pos.x + length, pos.y);
  ctx.lineTo(pos.x, pos.y);
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}

//O
function drawO(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x - length, pos.y + length);
  ctx.lineTo(pos.x - length, pos.y - length);
  ctx.lineTo(pos.x + length, pos.y - length);
  ctx.lineTo(pos.x + length, pos.y + length);
  ctx.lineTo(pos.x - length, pos.y + length);
  ctx.fillStyle = "GoldenRod";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}

//I
function drawI(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x - (2 * length), pos.y);
  ctx.lineTo(pos.x - (2 * length), pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y + length);
  ctx.lineTo(pos.x + (2 * length), pos.y);
  ctx.lineTo(pos.x, pos.y);
  ctx.fillStyle = "Gray";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}

//S
function drawS(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x - length, pos.y);
  ctx.lineTo(pos.x - length, pos.y - length);
  ctx.lineTo(pos.x + length, pos.y - length);
  ctx.lineTo(pos.x + length, pos.y);
  ctx.lineTo(pos.x + (2 * length), pos.y);
  ctx.lineTo(pos.x + (2 * length), pos.y + length);
  ctx.lineTo(pos.x, pos.y + length);
  ctx.lineTo(pos.x, pos.y);
  ctx.fillStyle = "Green";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}

//Z
function drawZ(ctx, pos, length, rotation) {
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x - length, pos.y);
  ctx.lineTo(pos.x - length, pos.y + length);
  ctx.lineTo(pos.x + length, pos.y + length);
  ctx.lineTo(pos.x + length, pos.y);
  ctx.lineTo(pos.x + (2 * length), pos.y);
  ctx.lineTo(pos.x + (2 * length), pos.y - length);
  ctx.lineTo(pos.x, pos.y - length);
  ctx.lineTo(pos.x, pos.y);
  ctx.fillStyle = "Maroon";
  ctx.fill();
  ctx.rotate((Math.PI/180)* rotation);
}

module.exports = DrawTetromino;
