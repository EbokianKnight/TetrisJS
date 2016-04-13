var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var BlockConstants = require('../constants/block_constants');
var BlockStore = new Store(AppDispatcher);

var _stored = null;
var _queue = null;


var resetHeld = function (block) {
	_stored = block;
};

var resetNextThree = function (blocks) {
  _queue = blocks;
};

BlockStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case BlockConstants.CAPTURE_BLOCK:
			resetHeld(payload.message);
			BlockStore.__emitChange();
		  break;
    case BlockConstants.QUEUE_BLOCKS:
      resetNextThree(payload.blocks);
      BlockStore.__emitChange();
      break;
	}
};

BlockStore.getHeld = function () {
  return _stored;
};

BlockStore.getQueue = function () {
  return _queue.slice();
};


module.exports = BlockStore;
