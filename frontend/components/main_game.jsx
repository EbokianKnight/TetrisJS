var React = require('react');
var BlockIndex = require('./block_index');
var BlockItem = require('./block_item');
var Timer = require('./timer');
var ScoreBoard = require('./score_board');
var SoundBar = require('./sound_bar');

var MainGame = React.createClass({

  getInitialState: function() {
    return {
      status: "pause"
    };
  },

  togglePlay: function () {
    if (this.state.status === "play") {
      this.setState({ status: "pause" });
    } else {
      this.setState({ status: "play" });
    }
    this.game = document.getElementById("game-button");
    this.game.style.opacity = 1
    window.setTimeout(this.fadeout, 300);
  },

  fadeout: function () {
    this.game.style.opacity = 0;
  },

  render: function() {
    var klass = this.state.status === "play" ? "play" : "pause";
    return (
      <div className='game-container'>
        <aside className='control-board'>
          <Timer status={this.state.status}/>
          <div className="block-item sidebar-item push"></div>
          <SoundBar />
          <div className='sidebar-item image drop-arrow push'></div>
          <div className='sidebar-item image counter push'></div>
        </aside>
        <div id="game" className='game-block' onClick={this.togglePlay}>
          <div className={"game-status " + klass} id="game-button"/>
          <context id="ctx"></context>
        </div>
        <aside className='control-board'>
          <ScoreBoard />
          <BlockIndex />
          <div className='sidebar-item image clockwise push'></div>
        </aside>
      </div>
    );
  }

});

module.exports = MainGame;
