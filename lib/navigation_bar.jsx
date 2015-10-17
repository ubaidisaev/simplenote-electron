var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      title: ""
    };
  },

  onNavigateBack: function() {
    
  },

  onAccessory: function() {
    
  },

  render: function() {
    return (
      <div className="navigation-bar">
        <div className="button" tabIndex="-1" onClick={this.onNavigateBack}>Back</div>
        <div>{this.props.title}</div>
        <div className="button" tabIndex="-1" onClick={this.onAccessory}>Acc.</div>
      </div>
    );
  }
});