'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navbar_option = require('./navbar_option');

var _navbar_option2 = _interopRequireDefault(_navbar_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @property {Array} 			 options: 		 The options within the navbar -> can contain "drops", or options for dropdown menu
 * @property {String} 			 title: 		 the title of the navbar in the left hand corner	
 * @property {Object} (OPTIONAL) style: 		 The style of the outer navbar
 * @property {Object} (OPTIONAL) option_style:   The style of the options inside the navbar
 * @property {JSX} 	  (OPTIONAL) custom_header:	 A custom header that will replace the default h3 header
 * @property {JSX} 	  (OPTIONAL) custom_options: A custom list of options that will replace the default NavbarOptions
 */

var Navbar = (function (_Component) {
	_inherits(Navbar, _Component);

	function Navbar(props) {
		_classCallCheck(this, Navbar);

		return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
	}

	_createClass(Navbar, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var count = 0;
			var renderListItems = function renderListItems(item) {
				count++;
				return _react2.default.createElement(_navbar_option2.default, { key: count,
					title: item.title,
					dropdown: item.drops,
					route: item.route,
					style: _this2.props.options_style });
			};

			// Define the default style for the topbar
			var default_style = {
				backgroundColor: '#07253F'
			};

			return _react2.default.createElement(
				'div',
				{ className: 'top-bar', style: this.props.style || default_style },
				this.props.custom_header || _react2.default.createElement(
					'div',
					{ className: 'top-bar-left' },
					_react2.default.createElement(
						'h3',
						{ style: { padding: '10px 0px 0px 10px', color: 'white' } },
						'Title'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'top-bar-right' },
					this.props.custom_options || _react2.default.createElement(
						'ul',
						{ className: 'dropdown menu', 'data-dropdown-menu': true, style: { marginLeft: '5px' } },
						this.props.options.map(renderListItems)
					)
				)
			);
		}
	}]);

	return Navbar;
})(_react.Component);

exports.default = Navbar;