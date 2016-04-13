var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ScoreConstants = require('../constants/score_constants');
var ScoreStore = new Store(AppDispatcher);

var _points = 0;

var resetPoints = function () {
	_points = _points;
};

var updatePoints = function (points) {
  _points = _points + points;
};

ScoreStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case ScoreConstants.UPDATE_SCORE:
			resetPoints();
			ScoreStore.__emitChange();
		  break;
    case ScoreConstants.RESET_SCORE:
      updatePoints(payload.score);
      ScoreStore.__emitChange();
      break;
	}
};

ScoreStore.getCurrentScore = function () {
  return _points;
};

module.exports = ScoreStore;
