var Dispatcher = require('../dispatcher/dispatcher.js');
var BlockConstants = require('../constants/block_constants.js');

module.exports = {
  captureBlock: function (block) {
    Dispatcher.dispatch({
      actionType: BlockConstants.CAPTURE_BLOCK,
      block: block
    });
  },

	queueNextBlocks: function (blocks) {
    Dispatcher.dispatch({
      actionType: BlockConstants.QUEUE_BLOCKS,
      blocks: blocks
    });
  }
};
