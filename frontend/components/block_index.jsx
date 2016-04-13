var React = require('react');
var BlockStore = require('../stores/block_store');
var BlockItem = require('./block_item');

var BlockIndex = React.createClass({

  getInitialState: function() {
    return {
      blocks: ["S", "T", "Z"]
    };
  },

  componentDidMount: function() {
    this.blockToken = BlockStore.addListener(this.setQueueFromStore);
  },

  componentWillUnmount: function() {
    this.blockToken.remove();
  },

  setQueueFromStore: function () {
    //this.setState({ blocks: BlockStore.getQueue() });
  },

  renderBlocks: function () {
    if (!this.state.blocks) return;
    return this.state.blocks.map(function (block, idx) {
      return <BlockItem block={block} key={idx} />;
    });
  },

  render: function() {
    return (
      <div>
        { this.renderBlocks() }
      </div>
    );
  }

});

module.exports = BlockIndex;
