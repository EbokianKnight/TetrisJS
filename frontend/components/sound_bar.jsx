var React = require('react');
var PropTypes = React.PropTypes;

var SoundBar = React.createClass({

  getInitialState: function() {
    return {
      sound: 0
    };
  },

  changeSound: function () {
    var nextSound = this.state.sound + 1;
    nextSound = (nextSound > 3) ? 0 : nextSound;
    this.setState({ sound: nextSound});
  },

  getIcon: function () {
    if (this.state.sound === 0) {
      return "sound-mute";
    } else if (this.state.sound === 1) {
      return "sound-one";
    } else if (this.state.sound === 2) {
      return "sound-two";
    } else {
      return "sound-three";
    }
  },

  render: function() {
    return (
      <div className={'sidebar-item image push ' + this.getIcon()}
        onClick={this.changeSound}>
      </div>
    );
  }

});

module.exports = SoundBar;
