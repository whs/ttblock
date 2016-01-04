module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(18);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(7);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(9);
    }, '/500': function _() {
      return __webpack_require__(10);
    }, '/elementalist': function elementalist() {
      return __webpack_require__(11);
    }, '/': function _() {
      return __webpack_require__(12);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "._37FNPHY8dxUSFT6J_JNfhJ{\n\twidth: 960px;\n\tmargin: auto;\n\tmargin-bottom: 40px;\n}\n._3QLKxM0ZfnlJP-5mqoKxcd{\n\twidth: 1170px;\n\tmargin: auto;\n}\n._3QLKxM0ZfnlJP-5mqoKxcd::after{\n\tdisplay: block;\n\tcontent: \"\";\n\tclear: both;\n\tpadding-bottom: 40px;\n\tborder-bottom: #ddd solid 1px;\n\tmargin-bottom: 40px;\n}\n\n._22pvPhtueVAhqDXdGw6UE8{\n\tfont-size: 16pt;\n\tmargin: 60px 40px;\n\tline-height: 2em;\n}\n\n._2rhtxc8Y7ruo9yvN_hG8lj{\n\twidth: 640px;\n\theight: 360px;\n\tbackground-color: #ccc;\n\tfloat: left;\n}\n.O8mfFQdSU2JDHaXxs5Yj{\n\twidth: 460px;\n\tmargin-left: 20px;\n\tfloat: left;\n}\n\n._1bTTiTt6orUT4sNG824N8Y{\n\tfloat: left;\n\tmargin-right: 20px;\n}\n\n.wYsdPNAibapHwnSEZvFw-{\n\tcolor: #EA7D00;\n}\n._1SpsGY8eli4YKN7m_2L1kn{\n\tcolor: #005AA1;\n}\n.wYsdPNAibapHwnSEZvFw-:before, ._1SpsGY8eli4YKN7m_2L1kn:before{\n  font: normal normal normal 16px/1 octicons;\n  display: inline-block;\n  text-decoration: none;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin-right: 5px;\n}\n.wYsdPNAibapHwnSEZvFw-:before{\n\tcontent: '\\F02D';\n}\n._1SpsGY8eli4YKN7m_2L1kn:before{\n\tcontent: '\\F059'\n}\n\n._2B8Cwn90dTVlsjfmx-hn3-{\n\tcolor: #DBD004;\n}", ""]);

  // exports
  exports.locals = {
  	"container": "_37FNPHY8dxUSFT6J_JNfhJ",
  	"step": "_3QLKxM0ZfnlJP-5mqoKxcd",
  	"preamble": "_22pvPhtueVAhqDXdGw6UE8",
  	"figure": "_2rhtxc8Y7ruo9yvN_hG8lj",
  	"description": "O8mfFQdSU2JDHaXxs5Yj",
  	"profession": "_1bTTiTt6orUT4sNG824N8Y",
  	"warn": "wYsdPNAibapHwnSEZvFw-",
  	"tip": "_1SpsGY8eli4YKN7m_2L1kn",
  	"amber": "_2B8Cwn90dTVlsjfmx-hn3-"
  };

/***/ },
/* 4 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(15);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(16);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(17);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(13);

  var _Navigation = __webpack_require__(8);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_Navigation2['default'], null),
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(14);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _Link = __webpack_require__(2);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation() {
    return _react2['default'].createElement(
      'nav',
      null,
      _react2['default'].createElement(
        'ul',
        { className: _styleCss2['default'].nav },
        _react2['default'].createElement(
          'li',
          { className: _styleCss2['default'].main },
          _react2['default'].createElement(
            'a',
            { href: '/', onClick: _Link2['default'].handleClick },
            'Triple Trouble Blocking Guide'
          ),
          ':'
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '/elementalist', onClick: _Link2['default'].handleClick },
            'Elementalist'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '/animation', onClick: _Link2['default'].handleClick },
            'Wurm Animation'
          )
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(3);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: _styleCss2['default'].container },
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(3);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container },
  					_react2['default'].createElement('img', { src: '/Elementalist_icon.png', className: _styleCss2['default'].profession }),
  					_react2['default'].createElement(
  						'h1',
  						null,
  						'Elementalist'
  					),
  					_react2['default'].createElement(
  						'h3',
  						null,
  						'Triple Trouble Blocking Guide'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						_react2['default'].createElement(
  							'strong',
  							null,
  							'Quick Links: '
  						),
  						' ',
  						_react2['default'].createElement(
  							'a',
  							{ href: '#weapon' },
  							'Weapons'
  						),
  						' · ',
  						_react2['default'].createElement(
  							'a',
  							{ href: '#spec' },
  							'Specialization'
  						),
  						' · ',
  						_react2['default'].createElement(
  							'a',
  							{ href: '#step' },
  							'Steps'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container, id: 'weapon' },
  					_react2['default'].createElement(
  						'h4',
  						null,
  						'Weapons'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'A ',
  						_react2['default'].createElement(
  							'strong',
  							null,
  							'Focus'
  						),
  						' is required. Usually paired with ',
  						_react2['default'].createElement(
  							'strong',
  							null,
  							'Dagger'
  						),
  						' for Ring of Earth (Skill 2), another reflect, but is not really used here.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'No need to use an exotic one, as we are looking for invulnerability here and not damage. You can use the trading post at Marshwatch Haven.'
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container, id: 'spec' },
  					_react2['default'].createElement(
  						'h4',
  						null,
  						'Specialization'
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].step, id: 'step' },
  					_react2['default'].createElement('div', { className: _styleCss2['default'].figure }),
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].description },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Step 1'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'When the wurm spawn it will spin twice before starts'
  						),
  						_react2['default'].createElement(
  							'ul',
  							null,
  							_react2['default'].createElement(
  								'li',
  								null,
  								_react2['default'].createElement(
  									'span',
  									{ className: _styleCss2['default'].amber },
  									'Amber'
  								),
  								' will eat the abomination in between the spins'
  							)
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: _styleCss2['default'].warn },
  							'Very rarely, it will spin only once before it starts.'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].step },
  					_react2['default'].createElement('div', { className: _styleCss2['default'].figure }),
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].description },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Step 2'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'Position yourself at this spot. You should be right below rock to the left, and one step to the right of it.'
  						),
  						_react2['default'].createElement(
  							'ul',
  							null,
  							_react2['default'].createElement(
  								'li',
  								null,
  								_react2['default'].createElement(
  									'span',
  									{ className: _styleCss2['default'].amber },
  									'Amber'
  								),
  								' has a bush that you can also use as reference'
  							)
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].step },
  					_react2['default'].createElement('div', { className: _styleCss2['default'].figure }),
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].description },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Step 3'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'When the wurm is about to spit (',
  							_react2['default'].createElement(
  								'a',
  								{ href: '/animation', onClick: _componentsLink2['default'].handleClick },
  								'animation guide'
  							),
  							'), use an invulnerability skill.'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'The skill should be pressed closer to the actual spit (usually when the head is going down) to be able to cover all 3, as the skills has very short duration'
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: _styleCss2['default'].warn },
  							'The wurm may spit back to back, so if you have to use Magnetic Shield casting it beforehand could be useful.'
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: _styleCss2['default'].warn },
  							'Fortify (Magnetic Shield 5) has a very short duration, so the timing is more precise.'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].step },
  					_react2['default'].createElement('div', { className: _styleCss2['default'].figure }),
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].description },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Step 4'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'The game will show 3 ',
  							_react2['default'].createElement(
  								'em',
  								null,
  								'Invulnerable'
  							),
  							', one per direction if you have blocked husks. If there are 9, you have blocked eggs.'
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: _styleCss2['default'].tip },
  							'Since husk has longer cooldown, you can use Swirling Winds (Air 4) to block next set of eggs. It is safer, as it does not requires precise positioning. Consider the ',
  							_react2['default'].createElement(
  								'a',
  								{ href: '/animation', onClick: _componentsLink2['default'].handleClick },
  								'animation guide'
  							),
  							' for a simplified version of wurm skill rotation.'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container },
  					_react2['default'].createElement(
  						'h4',
  						null,
  						'Other tips'
  					),
  					_react2['default'].createElement(
  						'ul',
  						{ className: _styleCss2['default'].tipList },
  						_react2['default'].createElement(
  							'li',
  							null,
  							'Only one person will get ',
  							_react2['default'].createElement(
  								'em',
  								null,
  								'Invulnerable'
  							),
  							' message. If you\'re doing it as a group and you get no message, you should be using another invulnerability skill on the second spit if it is spitting back to back.'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							'Stone Sheath (Magnetic Shield 2) block one attack, which can be used to block spins. Keep in mind though that if something attack you during the block it will be blocked instead of the spin. '
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							'Magnetic Shield autoattack chain has a charging attack which cause you to lose positioning. If you\'re holding it during burn phase, it is better not to burn at all'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							'Mist Form and Take Root (Sylvari racial elite) can be used to block spits caused by small spins. When used this way you will see a lot of ',
  							_react2['default'].createElement(
  								'em',
  								null,
  								'Invulnerable'
  							),
  							' message.'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							'Magnetic Wave (Earth Focus 4) clears two conditions. It also can be used to reflect two set of eggs.'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container },
  					'This guide is based on ',
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://wiki.guildwars2.com/wiki/User:Ventaurion/WurmNotes/SoloEleBlock' },
  						'Ventaurion\'s SoloEleBlock guide'
  					),
  					'.'
  				)
  			);
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(3);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: _styleCss2['default'].container },
          _react2['default'].createElement(
            'h1',
            null,
            'Triple Trouble Blocking Guide'
          ),
          _react2['default'].createElement(
            'p',
            { className: _styleCss2['default'].preamble },
            'Triple Trouble is a unique boss: not only coodination and DPS, it also requires player skills to complete it. In this guide, we will cover the most important part of the fight: ',
            _react2['default'].createElement(
              'strong',
              null,
              'preventing mobs from ruining your runs'
            ),
            '.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'At every heads, the wurm will spit out eggs and husks on a set interval. To be able to complete this, those enemies should be dealed with. The traditional way of doing it is to reflect or use projectile destroyers when the wurm is spitting eggs, while the unblockable husks are dealed by people with condition-based build.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'As knowledge of the fight improve, people found that invulnerability can also block projectiles which remove the need to split the zerg to two groups. It is also easier to setup: an organized triple decap map could be setup by ',
            _react2['default'].createElement(
              'strong',
              null,
              '6 people'
            ),
            ': one commander and one blocker per head.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'This guide is split into two parts: guide for each professions, and the animation guide. Use the top bar to change to the part you wish to read.'
          ),
          _react2['default'].createElement(
            'ul',
            null,
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/elementalist', onClick: _componentsLink2['default'].handleClick },
                'Elementalist blocking'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/animation', onClick: _componentsLink2['default'].handleClick },
                'Animation guide'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            'This guide is made possible by the help of following people:',
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Created by Zemoregal'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Elementalist guide based on ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://wiki.guildwars2.com/wiki/User:Ventaurion/WurmNotes/SoloEleBlock' },
                  'Ventaurion\'s SoloEleBlock'
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "a{\n\ttext-decoration: none;\n\tcolor: #06812E;\n}\n\nh1{\n\tfont-size: 42pt;\n}\nh3{\n\tmargin-top: -20px;\n\tfont-size: 20pt;\n}\nh4{\n\tfont-size: 18pt;\n\tmargin: 0;\n}\n\nbody{\n\tline-height: 1.8em;\n\tfont-family: Merriweather;\n}", ""]);

  // exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(4)();
  // imports


  // module
  exports.push([module.id, "._1wP3z47NNs6jmxwufvYhg2{\n\tfont-size: 9pt;\n\ttext-transform: uppercase;\n\tbackground-color: #E5E5E5;\n\tpadding: 10px 0;\n\tmargin: 0;\n\tmargin-bottom: 60px;\n}\n._1wP3z47NNs6jmxwufvYhg2 a{\n\ttext-decoration: none;\n\tcolor: #06812E;\n}\n._1wP3z47NNs6jmxwufvYhg2 li{\n\tdisplay: inline;\n\tmargin-left: 20px;\n}\n._1r2gydHXaLeFog2HxbsBB5{\n\tfont-size: 120%;\n\tfont-weight: bold;\n}", ""]);

  // exports
  exports.locals = {
  	"nav": "_1wP3z47NNs6jmxwufvYhg2",
  	"main": "_1r2gydHXaLeFog2HxbsBB5"
  };

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);