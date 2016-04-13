var React = require('react');
var ScoreStore = require('../stores/score_store');

var ScoreBoard = React.createClass({

  getInitialState: function() {
    return {
      score: ScoreStore.getCurrentScore()
    };
  },

  componentDidMount: function() {
    this.scoreToken = ScoreStore.addListener(this.setScoreFromStore);
  },

  componentWillUnmount: function() {
    this.scoreToken.remove();
  },

  setScoreFromStore: function () {
    this.setState({ score: ScoreStore.getCurrentScore() });
  },

  render: function() {
    return (
      <div className="score-board">
        Score Board
        <p className="score">{this.state.score}</p>
      </div>
    );
  }

});

module.exports = ScoreBoard;
