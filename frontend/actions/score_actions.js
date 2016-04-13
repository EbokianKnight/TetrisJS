var Dispatcher = require('../dispatcher/dispatcher.js');
var ScoreConstants = require('../constants/score_constants.js');

module.exports = {
  resetScore: function (score) {
    Dispatcher.dispatch({
      actionType: BlockConstants.RESET_SCORE,
      score: score
    });
  },

	updateScore: function (score) {
    Dispatcher.dispatch({
      actionType: BlockConstants.UPDATE_SCORE,
      score: score
    });
  }
};
