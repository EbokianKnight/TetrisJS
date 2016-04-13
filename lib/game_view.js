(function(root){

  var canvasEl = document.getElementById("ctx");
  canvasEl.height = window.innerHeight * 0.8;
  canvasEl.width = canvasEl.height / 2;

  var length = canvasEl.height / 20;
  var game = new Game();
  var ctx = canvasEl.getContext('2d');

  var view = new GameView(game, ctx, length);
  // view.bindKeyHandlers();
  view.start();

})(this);
