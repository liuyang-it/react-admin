'use strict';

var React = require('react/addons');
var B = require('react-bootstrap');
var Router = require('react-router');

var cx = React.classSet

export default React.createClass({
    getDefaultProps () {
        return {
            icon: 'fa-exclamation-triangle'
        };
    },
    propTypes: {
        name: React.PropTypes.string.isRequired,
        action: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string,
        id: React.PropTypes.number.isRequired
    },
    render () {
        var klass = 'fa fa-3x pull-left ' + this.props.icon;

        return (
            <div className="react-app-notifications__element">
                <span className={klass}></span>
                <span className="react-app-notifications__element__title">
                    <Router.Link to="app1.edit" params={{id: this.props.id}}>{this.props.name}</Router.Link>
                </span>
                <br />
                Action: {this.props.action}
            </div>
        );
    }
});