var React = require('react');
var BlockItem = require('./block_item');

var BlockIndex = React.createClass({

  render: function() {
    return (
      <div>
        <BlockItem />
        <BlockItem />
        <BlockItem />
      </div>
    );
  }

});

module.exports = BlockIndex;
