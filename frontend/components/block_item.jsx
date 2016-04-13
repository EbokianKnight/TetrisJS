var React = require('react');
var DrawTetromino = require('../util/draw_tetromino.js');
//ctx, pos, length, rotation, piece

var BlockItem = React.createClass({

  getInitialState: function() {
    return {
      size: Math.round(window.innerHeight / 1000 * 15)
    };
  },

  componentDidMount: function() {
    this.context = this.refs.canvas.getContext('2d');
    this.drawShape();
  },

  componentDidUpdate: function() {
    var size = this.state.size * 8;
    this.context.clearRect(0,0,size, size);
    this.drawShape(this.props.block);
  },

  drawShape: function () {
    if (!this.context) return;
    DrawTetromino(
      this.context,
      { x: this.state.size * 4, y: this.state.size * 4 },
      (this.state.size * 1.5),
      0,
      this.props.block
    );
  },

  render: function() {
    var klass = "";
    var size = this.state.size * 8;
    var fn = this.props.swap;
    if (fn) { klass = " push"; }
    return (
      <div className={"block-item sidebar-item" + klass} onClick={fn}>
        <canvas ref="canvas" width={size} height={size}></canvas>
      </div>
    );
  }

});

module.exports = BlockItem;
