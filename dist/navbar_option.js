'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property {String} 	route: 			The route that the navbar option maps to
 * @property {Object} 	option_style: 	The style of the navbar option
 * @property {String} 	title: 			The option text 
 * @property {Array} 	dropdown: 		The list of dropdown options
 */

var NavbarOption = function NavbarOption(props) {

	// Define the default style for the topbar
	var default_style = {
		backgroundColor: '#07253F',
		paddingTop: '15px'
	};

	return _react2.default.createElement(
		'li',
		{ className: 'navbar-option', style: props.option_style || default_style },
		_react2.default.createElement(
			'a',
			{ href: props.route, style: { color: 'white' } },
			props.title
		),
		props.dropdown && props.dropdown.length > 0 && _react2.default.createElement(
			'ul',
			{ className: 'menu vertical',
				style: { border: '0px',
					backgroundColor: '#07253F',
					padding: '10px 0px 10px 0px' } },
			props.dropdown.map(function (item, count) {
				return _react2.default.createElement(
					'li',
					{ key: count,
						className: 'dropdown-option' },
					_react2.default.createElement(
						'a',
						{ href: '/',
							style: { color: 'white' } },
						item
					)
				);
			})
		)
	);
};

exports.default = NavbarOption;