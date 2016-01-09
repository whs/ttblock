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

  var _regeneratorRuntime = __webpack_require__(97)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(101);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(16);

  var _coreLocation = __webpack_require__(15);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(22);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(26);
    }, '/500': function _() {
      return __webpack_require__(27);
    }, '/animation': function animation() {
      return __webpack_require__(28);
    }, '/elementalist': function elementalist() {
      return __webpack_require__(29);
    }, '/': function _() {
      return __webpack_require__(30);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return _regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return _regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return _regeneratorRuntime.awrap(callback(_react2['default'].createElement(
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
        return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                if (window.ga) {
                  window.ga('send', 'pageview');
                }
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

  module.exports = require("babel-runtime/helpers/interop-require-default");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/class-call-check");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/create-class");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/get");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 7 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"container":"_37FNPHY8dxUSFT6J_JNfhJ","preamble":"_22pvPhtueVAhqDXdGw6UE8","classHeader":"_1ES-8EuO3qwQecUeElhPlo","profession":"_1bTTiTt6orUT4sNG824N8Y","warn":"wYsdPNAibapHwnSEZvFw-","tip":"_1SpsGY8eli4YKN7m_2L1kn","amber":"_2B8Cwn90dTVlsjfmx-hn3-"};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _objectWithoutProperties = __webpack_require__(96)['default'];

  var _extends = __webpack_require__(95)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _coreLocation = __webpack_require__(15);

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(31);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _context = __webpack_require__(10);

  var _context2 = _interopRequireDefault(_context);

  var _GwSkillDescription = __webpack_require__(11);

  var _GwSkillDescription2 = _interopRequireDefault(_GwSkillDescription);

  var _reactPopover = __webpack_require__(102);

  var _reactPopover2 = _interopRequireDefault(_reactPopover);

  var GwSkill = (function (_Component) {
  	_inherits(GwSkill, _Component);

  	function GwSkill() {
  		_classCallCheck(this, GwSkill);

  		_get(Object.getPrototypeOf(GwSkill.prototype), 'constructor', this).apply(this, arguments);

  		this.state = {
  			tooltip: false
  		};
  	}

  	_createClass(GwSkill, [{
  		key: 'getDetail',
  		value: function getDetail() {
  			return (0, _context2['default'])('./' + this.props.id + '.json');
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var skillDetail = this.getDetail();
  			var name = skillDetail.name;

  			if (this.props.iconOnly) {
  				name = null;
  			}

  			return _react2['default'].createElement(
  				_reactPopover2['default'],
  				{ isOpen: this.state.tooltip, body: this.getPopup(), preferPlace: 'column' },
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].skill, onMouseOver: this.onMouseOver.bind(this), onMouseOut: this.onMouseOut.bind(this), onTouchStart: this.onTouchStart.bind(this), onTouchEnd: this.onTouchEnd.bind(this) },
  					_react2['default'].createElement(
  						'a',
  						{ href: this.getSkillLink(), target: '_blank', onClick: this.onClick.bind(this) },
  						_react2['default'].createElement('img', { src: skillDetail.icon }),
  						name
  					)
  				)
  			);
  		}
  	}, {
  		key: 'getPopup',
  		value: function getPopup() {
  			return _react2['default'].createElement(_GwSkillDescription2['default'], { id: this.props.id });
  		}
  	}, {
  		key: 'getSkillLink',
  		value: function getSkillLink() {
  			var skillDetail = this.getDetail();
  			var name = skillDetail.name.replace(/ /g, '_');

  			return 'https://wiki.guildwars2.com/wiki/' + name;
  		}
  	}, {
  		key: 'onMouseOver',
  		value: function onMouseOver(e) {
  			this.setState({ tooltip: true });
  		}
  	}, {
  		key: 'onMouseOut',
  		value: function onMouseOut() {
  			this.setState({ tooltip: false });
  		}
  	}, {
  		key: 'onTouchStart',
  		value: function onTouchStart(e) {
  			if (this.props.onClick) {
  				return;
  			}

  			this.onMouseOver(e);
  			e.preventDefault();
  		}
  	}, {
  		key: 'onTouchEnd',
  		value: function onTouchEnd(e) {
  			if (this.props.onClick) {
  				return;
  			}

  			this.onMouseOut(e);
  			e.preventDefault();
  		}
  	}, {
  		key: 'onClick',
  		value: function onClick(e) {
  			return this.props.onClick && this.props.onClick(e);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			id: _react2['default'].PropTypes.number.isRequired,
  			iconOnly: _react2['default'].PropTypes.bool,
  			onClick: _react2['default'].PropTypes.func
  		},
  		enumerable: true
  	}]);

  	return GwSkill;
  })(_react.Component);

  exports['default'] = GwSkill;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  exports['default'] = __webpack_require__(17);
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _getIterator = __webpack_require__(94)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(32);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _GwSkillContext = __webpack_require__(10);

  var _GwSkillContext2 = _interopRequireDefault(_GwSkillContext);

  var GwSkill = (function (_Component) {
  	_inherits(GwSkill, _Component);

  	function GwSkill() {
  		_classCallCheck(this, GwSkill);

  		_get(Object.getPrototypeOf(GwSkill.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(GwSkill, [{
  		key: 'getDetail',
  		value: function getDetail() {
  			return (0, _GwSkillContext2['default'])('./' + this.props.id + '.json');
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var skillDetail = this.getDetail();
  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleCss2['default'].skill },
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].cast },
  					this.getDuration()
  				),
  				_react2['default'].createElement(
  					'h4',
  					null,
  					skillDetail.name
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].description },
  					skillDetail.description
  				),
  				_react2['default'].createElement(
  					'ul',
  					{ className: _styleCss2['default'].facts },
  					this.renderFacts()
  				)
  			);
  		}
  	}, {
  		key: 'renderFacts',
  		value: function renderFacts() {
  			var facts = this.getDetail().facts;
  			return facts && facts.map(function (fact, index) {
  				if (!fact.icon) {
  					return null;
  				}

  				var data = fact.description || fact.value || fact.duration || fact.percent || fact.field_type || fact.distance || fact.hit_count;
  				var image = _react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].icon },
  					_react2['default'].createElement('img', { src: fact.icon })
  				);

  				if (fact.text == 'Apply Buff/Condition') {
  					fact.text = '' + fact.status;
  					if (fact.duration > 0) {
  						fact.text += ' (' + fact.duration + 's)';
  					}
  				}

  				if (fact.apply_count && fact.apply_count > 1) {
  					image = _react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].icon },
  						_react2['default'].createElement('img', { src: fact.icon }),
  						_react2['default'].createElement(
  							'div',
  							{ className: _styleCss2['default'].stack },
  							fact.apply_count
  						)
  					);
  				}

  				if (data) {
  					return _react2['default'].createElement(
  						'li',
  						{ key: index },
  						image,
  						_react2['default'].createElement(
  							'div',
  							{ className: _styleCss2['default'].detail },
  							_react2['default'].createElement(
  								'strong',
  								null,
  								fact.text,
  								': '
  							),
  							' ',
  							data
  						)
  					);
  				} else {
  					return _react2['default'].createElement(
  						'li',
  						{ key: index },
  						image,
  						_react2['default'].createElement(
  							'div',
  							{ className: _styleCss2['default'].detail },
  							fact.text
  						)
  					);
  				}
  			});
  		}
  	}, {
  		key: 'getDuration',
  		value: function getDuration() {
  			var value = this.getFact('Recharge');

  			if (value) {
  				return _react2['default'].createElement(
  					'span',
  					null,
  					_react2['default'].createElement('span', { className: 'octicon octicon-clock' }),
  					' ',
  					value.value
  				);
  			}
  		}
  	}, {
  		key: 'getFact',
  		value: function getFact(fact) {
  			var detail = this.getDetail();
  			if (!detail.facts) {
  				return null;
  			}
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;

  			try {
  				for (var _iterator = _getIterator(detail.facts), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var item = _step.value;

  					if (item.type == fact) {
  						return item;
  					}
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator['return']) {
  						_iterator['return']();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}

  			return null;
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			id: _react2['default'].PropTypes.number.isRequired
  		},
  		enumerable: true
  	}]);

  	return GwSkill;
  })(_react.Component);

  exports['default'] = GwSkill;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(33);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _context = __webpack_require__(20);

  var _context2 = _interopRequireDefault(_context);

  var _GwTrait = __webpack_require__(13);

  var _GwTrait2 = _interopRequireDefault(_GwTrait);

  var GwSpec = (function (_Component) {
  	_inherits(GwSpec, _Component);

  	function GwSpec() {
  		_classCallCheck(this, GwSpec);

  		_get(Object.getPrototypeOf(GwSpec.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(GwSpec, [{
  		key: 'getDetail',
  		value: function getDetail() {
  			return (0, _context2['default'])('./' + this.props.id + '.json');
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _this = this;

  			var detail = this.getDetail();

  			var traitList = [detail.minor_traits[0], detail.major_traits[0], detail.major_traits[1], detail.major_traits[2], detail.minor_traits[1], detail.major_traits[3], detail.major_traits[4], detail.major_traits[5], detail.minor_traits[2], detail.major_traits[6], detail.major_traits[7], detail.major_traits[8]];

  			var traits = traitList.map(function (id, index) {
  				var cls = [_styleCss2['default'].trait];

  				if (_this.props.highlight) {
  					if (_this.props.highlight.indexOf(id) != -1 || [0, 4, 8].indexOf(index) != -1) {
  						cls.push(_styleCss2['default'].highlight);
  					} else {
  						cls.push(_styleCss2['default'].unhighlight);
  					}
  				}

  				return _react2['default'].createElement(
  					'div',
  					{ className: cls.join(' '), 'data-index': index, key: id },
  					_react2['default'].createElement(_GwTrait2['default'], { id: id, iconOnly: true, onClick: _this.onTraitClick.bind(_this, id) })
  				);
  			});

  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleCss2['default'].specWrap },
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].spec, style: { backgroundImage: 'url(\'' + detail.background + '\')' } },
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].specName },
  						detail.name
  					),
  					_react2['default'].createElement('img', { src: detail.icon, className: _styleCss2['default'].specIcon }),
  					traits
  				)
  			);
  		}
  	}, {
  		key: 'onTraitClick',
  		value: function onTraitClick(id, e) {
  			return this.props.onTraitClick && this.props.onTraitClick(e, id);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			id: _react2['default'].PropTypes.number.isRequired,
  			onTraitClick: _react2['default'].PropTypes.func
  		},
  		enumerable: true
  	}]);

  	return GwSpec;
  })(_react.Component);

  exports['default'] = GwSpec;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _context = __webpack_require__(14);

  var _context2 = _interopRequireDefault(_context);

  var _GwSkill2 = __webpack_require__(9);

  var _GwSkill3 = _interopRequireDefault(_GwSkill2);

  var _GwTraitDescription = __webpack_require__(21);

  var _GwTraitDescription2 = _interopRequireDefault(_GwTraitDescription);

  var GwTrait = (function (_GwSkill) {
  	_inherits(GwTrait, _GwSkill);

  	function GwTrait() {
  		_classCallCheck(this, GwTrait);

  		_get(Object.getPrototypeOf(GwTrait.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(GwTrait, [{
  		key: 'getDetail',
  		value: function getDetail() {
  			return (0, _context2['default'])('./' + this.props.id + '.json');
  		}
  	}, {
  		key: 'getPopup',
  		value: function getPopup() {
  			return _react2['default'].createElement(_GwTraitDescription2['default'], { id: this.props.id });
  		}
  	}]);

  	return GwTrait;
  })(_GwSkill3['default']);

  exports['default'] = GwTrait;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  exports['default'] = __webpack_require__(19);
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _fbjsLibExecutionEnvironment = __webpack_require__(16);

  var _historyLibCreateBrowserHistory = __webpack_require__(98);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(99);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(100);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  var map = {
  	"./15795.json": 38,
  	"./21647.json": 39,
  	"./5521.json": 40,
  	"./5525.json": 41,
  	"./5530.json": 42,
  	"./5546.json": 43,
  	"./5555.json": 44,
  	"./5623.json": 45,
  	"./5639.json": 46,
  	"./5641.json": 47
  };
  function webpackContext(req) {
  	return __webpack_require__(webpackContextResolve(req));
  };
  function webpackContextResolve(req) {
  	return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  };
  webpackContext.keys = function webpackContextKeys() {
  	return Object.keys(map);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 17;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  var map = {
  	"./26.json": 48,
  	"./41.json": 49,
  	"./48.json": 50
  };
  function webpackContext(req) {
  	return __webpack_require__(webpackContextResolve(req));
  };
  function webpackContextResolve(req) {
  	return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  };
  webpackContext.keys = function webpackContextKeys() {
  	return Object.keys(map);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 18;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  var map = {
  	"./1232.json": 51,
  	"./1277.json": 52,
  	"./1279.json": 53,
  	"./1280.json": 54,
  	"./1281.json": 55,
  	"./1282.json": 56,
  	"./1289.json": 57,
  	"./1502.json": 58,
  	"./1503.json": 59,
  	"./1507.json": 60,
  	"./1508.json": 61,
  	"./1672.json": 62,
  	"./1674.json": 63,
  	"./1839.json": 64,
  	"./1886.json": 65,
  	"./1891.json": 66,
  	"./1902.json": 67,
  	"./1938.json": 68,
  	"./1948.json": 69,
  	"./1952.json": 70,
  	"./1962.json": 71,
  	"./1986.json": 72,
  	"./2015.json": 73,
  	"./2025.json": 74,
  	"./2033.json": 75,
  	"./214.json": 76,
  	"./221.json": 77,
  	"./222.json": 78,
  	"./223.json": 79,
  	"./224.json": 80,
  	"./226.json": 81,
  	"./227.json": 82,
  	"./229.json": 83,
  	"./232.json": 84,
  	"./275.json": 85,
  	"./277.json": 86,
  	"./278.json": 87,
  	"./279.json": 88,
  	"./280.json": 89,
  	"./281.json": 90,
  	"./282.json": 91,
  	"./287.json": 92,
  	"./289.json": 93
  };
  function webpackContext(req) {
  	return __webpack_require__(webpackContextResolve(req));
  };
  function webpackContextResolve(req) {
  	return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  };
  webpackContext.keys = function webpackContextKeys() {
  	return Object.keys(map);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 19;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  exports['default'] = __webpack_require__(18);
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _GwTraitContext = __webpack_require__(14);

  var _GwTraitContext2 = _interopRequireDefault(_GwTraitContext);

  var _GwSkillDescription2 = __webpack_require__(11);

  var _GwSkillDescription3 = _interopRequireDefault(_GwSkillDescription2);

  var GwTraitDescription = (function (_GwSkillDescription) {
  	_inherits(GwTraitDescription, _GwSkillDescription);

  	function GwTraitDescription() {
  		_classCallCheck(this, GwTraitDescription);

  		_get(Object.getPrototypeOf(GwTraitDescription.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(GwTraitDescription, [{
  		key: 'getDetail',
  		value: function getDetail() {
  			return (0, _GwTraitContext2['default'])('./' + this.props.id + '.json');
  		}
  	}]);

  	return GwTraitDescription;
  })(_GwSkillDescription3['default']);

  exports['default'] = GwTraitDescription;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(34);

  var _Navigation = __webpack_require__(23);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(35);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _Link = __webpack_require__(8);

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
            'Triple Trouble Blocking Guide:'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: '/elementalist', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement('img', { src: '/Elementalist_tango_icon_20px.png' }),
            ' Elementalist'
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(36);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var Step = (function (_Component) {
  	_inherits(Step, _Component);

  	function Step() {
  		_classCallCheck(this, Step);

  		_get(Object.getPrototypeOf(Step.prototype), 'constructor', this).apply(this, arguments);

  		this.state = {
  			index: 0
  		};
  	}

  	_createClass(Step, [{
  		key: 'render',
  		value: function render() {
  			var stepNumber = null;

  			if (this.props.number) {
  				stepNumber = _react2['default'].createElement(
  					'h4',
  					null,
  					'Step ',
  					this.props.number
  				);
  			}

  			var figureList = null;

  			if (this.getFigure().length > 1) {
  				figureList = _react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].figureList },
  					this.getFigureList()
  				);
  			}

  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleCss2['default'].step },
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].figure },
  					this.getFigure().length > 0 && this.getFigure()[this.state.index]
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].description },
  					stepNumber,
  					_react2['default'].Children.toArray(this.props.children).filter(function (x) {
  						return x.type != Figure;
  					}),
  					figureList
  				)
  			);
  		}
  	}, {
  		key: 'changeFigure',
  		value: function changeFigure(index) {
  			this.setState({ index: index });
  		}
  	}, {
  		key: 'getFigure',
  		value: function getFigure() {
  			return _react2['default'].Children.toArray(this.props.children).filter(function (x) {
  				return x.type == Figure;
  			});
  		}
  	}, {
  		key: 'getFigureList',
  		value: function getFigureList() {
  			var _this = this;

  			return this.getFigure().map(function (figure, index) {
  				var cls = _this.state.index === index ? _styleCss2['default'].active : '';

  				if (figure.props.children.type == 'video' && figure.props.children.props.poster) {
  					figure = _react2['default'].createElement(
  						Figure,
  						{ key: index },
  						_react2['default'].createElement('img', { src: figure.props.children.props.poster })
  					);
  				}

  				return _react2['default'].createElement(
  					'div',
  					{ className: cls, onClick: _this.changeFigure.bind(_this, index), key: index },
  					figure
  				);
  			});
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			number: _react2['default'].PropTypes.number
  		},
  		enumerable: true
  	}]);

  	return Step;
  })(_react.Component);

  exports.Step = Step;

  var Figure = (function (_Component2) {
  	_inherits(Figure, _Component2);

  	function Figure() {
  		_classCallCheck(this, Figure);

  		_get(Object.getPrototypeOf(Figure.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Figure, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleCss2['default'].figureItem },
  				this.props.children
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			children: _react2['default'].PropTypes.element.isRequired
  		},
  		enumerable: true
  	}]);

  	return Figure;
  })(_react.Component);

  exports.Figure = Figure;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _GwSpec = __webpack_require__(12);

  var _GwSpec2 = _interopRequireDefault(_GwSpec);

  var _styleCss = __webpack_require__(37);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var TraitExplaination = (function (_Component) {
  	_inherits(TraitExplaination, _Component);

  	function TraitExplaination() {
  		_classCallCheck(this, TraitExplaination);

  		_get(Object.getPrototypeOf(TraitExplaination.prototype), 'constructor', this).apply(this, arguments);

  		this.state = {
  			traitId: 0
  		};
  	}

  	_createClass(TraitExplaination, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleCss2['default'].traitExplaination },
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].spec },
  					this.getSpec()
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].explain },
  					this.getExplaination()
  				)
  			);
  		}
  	}, {
  		key: 'getSpec',
  		value: function getSpec() {
  			var clickHandler = this.onTraitClick.bind(this);
  			return _react2['default'].Children.toArray(this.props.children).filter(function (x) {
  				return x.type == _GwSpec2['default'];
  			}).map(function (x) {
  				return _react2['default'].cloneElement(x, {
  					onTraitClick: clickHandler
  				});
  			});
  		}
  	}, {
  		key: 'onTraitClick',
  		value: function onTraitClick(e, id) {
  			e.preventDefault();
  			this.setState({ traitId: id });
  		}
  	}, {
  		key: 'getExplaination',
  		value: function getExplaination() {
  			return this.getExplainationById(this.state.traitId) || this.getExplainationById(0);
  		}
  	}, {
  		key: 'getExplainationById',
  		value: function getExplainationById(id) {
  			var child = _react2['default'].Children.toArray(this.props.children).filter(function (x) {
  				return x.type == Explaination && x.props.id == id;
  			});

  			return child && child[0];
  		}
  	}]);

  	return TraitExplaination;
  })(_react.Component);

  exports.TraitExplaination = TraitExplaination;

  var Explaination = (function (_Component2) {
  	_inherits(Explaination, _Component2);

  	function Explaination() {
  		_classCallCheck(this, Explaination);

  		_get(Object.getPrototypeOf(Explaination.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Explaination, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				null,
  				this.props.children
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			id: _react2['default'].PropTypes.number.isRequired
  		},
  		enumerable: true
  	}]);

  	return Explaination;
  })(_react.Component);

  exports.Explaination = Explaination;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(7);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(7);

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(7);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _componentsLink = __webpack_require__(8);

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
  					_react2['default'].createElement(
  						'h1',
  						null,
  						'Animation guide'
  					),
  					'Soon ',
  					_react2['default'].createElement(
  						'sup',
  						null,
  						'TM'
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(7);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _componentsLink = __webpack_require__(8);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _componentsGwSkill = __webpack_require__(9);

  var _componentsGwSkill2 = _interopRequireDefault(_componentsGwSkill);

  var _componentsGwSpec = __webpack_require__(12);

  var _componentsGwSpec2 = _interopRequireDefault(_componentsGwSpec);

  var _componentsGwTrait = __webpack_require__(13);

  var _componentsGwTrait2 = _interopRequireDefault(_componentsGwTrait);

  var _componentsTraitExplaination = __webpack_require__(25);

  var _componentsStep = __webpack_require__(24);

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
  						'div',
  						{ className: _styleCss2['default'].classHeader },
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
  						'div',
  						null,
  						_react2['default'].createElement('p', null),
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
  						' for ',
  						_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5525 }),
  						' (Earth Skill 2), another reflect, but is not really used here.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'If you don\'t already have one you don\'t need to get an exotic, as we are looking for invulnerability here and not damage. You can use the trading post at Marshwatch Haven.'
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container, id: 'spec' },
  					_react2['default'].createElement(
  						'h4',
  						null,
  						'Specializations'
  					)
  				),
  				_react2['default'].createElement(
  					_componentsTraitExplaination.TraitExplaination,
  					null,
  					_react2['default'].createElement(_componentsGwSpec2['default'], { id: 26, highlight: [282, 277, 1674] }),
  					_react2['default'].createElement(_componentsGwSpec2['default'], { id: 41, highlight: [232, 214, 226] }),
  					_react2['default'].createElement(_componentsGwSpec2['default'], { id: 48, highlight: [1952, 2015, 1986] }),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 0 },
  						_react2['default'].createElement(
  							'p',
  							null,
  							'Here\'s the list of specialization you should be running. The major  focus here is to reduce cooldown for Earth and Air attunement.'
  						),
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement('p', null),
  							'The Tempest line is optional. The main use here is from ',
  							_react2['default'].createElement(_componentsGwTrait2['default'], { id: 1952 }),
  							'. If you don\'t have it you can use any other lines.'
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: _styleCss2['default'].tip },
  							'Click on a trait to view its explaination'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 282 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Earth\'s Embrace'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'Help with survivability. Hopefully you won\'t really need it.'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 277 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Geomancer\'s Training'
  						),
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement('p', null),
  							'Main trait of this specialization. It is used to reduce cooldown of ',
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5521 })
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 1674 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Stone Heart'
  						),
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement('p', null),
  							'Help with survivability. I found that with how the veteran wurms attack you ',
  							_react2['default'].createElement(_componentsGwTrait2['default'], { id: 1508 }),
  							' isn\'t really helpful here.'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 232 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Ferocious Winds'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'This one is from meta build. Helps with DPS.'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 214 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Aeromancer\'s Training'
  						),
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement('p', null),
  							'Main trait of this specialization. It is used to reduce cooldown of ',
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5530 })
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 226 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Bolt to the Heart'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'This one is from meta build. Helps with DPS.'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 1952 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Gale Song'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'This trait help you back on your feet when you get knocked back from failed spin dodging, or when veteran wurms slammed you.'
  						),
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement('p', null),
  							'Ideally you can predict the attack and can dodge, or pop ',
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5639 }),
  							' or ',
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5641 }),
  							' beforehand to save your positioning but if you can\'t, this trait will save you once every 40 seconds.'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 2015 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Harmonious Conduit'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'This trait is from meta build. It increase your damage output for a short time after you have successfully overload an attunement.'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'I haven\'t tried the stability, but it probably can be used in clutch situation to save your positioning. However, it might grab the attention of veterans around you.'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTraitExplaination.Explaination,
  						{ id: 1986 },
  						_react2['default'].createElement(
  							'h4',
  							null,
  							'Elemental Bastion'
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							'This trait is from meta build. It reduce incoming damage for 5 seconds when your HP hit 75%.'
  						)
  					)
  				),
  				_react2['default'].createElement('p', { id: 'step' }),
  				_react2['default'].createElement(
  					_componentsStep.Step,
  					{ number: 1 },
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('video', { src: '/ele/firstspin.webm', poster: '/ele/firstspin.jpg', loop: true, autoPlay: true })
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
  				),
  				_react2['default'].createElement(
  					_componentsStep.Step,
  					{ number: 2 },
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('img', { src: '/ele/spot-1.jpg' })
  					),
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('img', { src: '/ele/spot-3.jpg' })
  					),
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('img', { src: '/ele/spot-2.jpg' })
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
  							'The model of all 3 wurms are the same.'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(
  								'span',
  								{ className: _styleCss2['default'].amber },
  								'Amber'
  							),
  							' has a bush that you can also use as a reference.'
  						)
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].tip },
  						'The spot is also one of its hitbox. You can hit it with air autoattack and see where\'s the damage show up.'
  					),
  					_react2['default'].createElement(
  						'p',
  						{ className: _styleCss2['default'].warn },
  						'The reference screenshots is captured with low graphics. On higher graphics the internal may look different.'
  					)
  				),
  				_react2['default'].createElement(
  					_componentsStep.Step,
  					{ number: 3 },
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('video', { src: '/ele/huskblock.webm', poster: '/ele/huskblock.jpg', loop: true, autoPlay: true })
  					),
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('video', { src: '/ele/shieldblock.webm', poster: '/ele/shieldblock.jpg', loop: true, autoPlay: true })
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
  						'ul',
  						null,
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5521 }),
  							' (Earth 5)'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5546 }),
  							' (Utility) Skill 5: ',
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5623 }),
  							' is also usable. Keep in mind that with its very short duration the timing is more precise.'
  						)
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
  					)
  				),
  				_react2['default'].createElement(
  					_componentsStep.Step,
  					{ number: 4 },
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('video', { src: '/ele/eggblock.webm', poster: '/ele/eggblock.jpg', loop: true, autoPlay: true })
  					),
  					_react2['default'].createElement(
  						_componentsStep.Figure,
  						null,
  						_react2['default'].createElement('video', { src: '/ele/swirlingwinds.webm', poster: '/ele/swirlingwinds.jpg', loop: true, autoPlay: true })
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
  						' messages, one per direction if you have blocked husks. If there are 9, you have blocked eggs.'
  					),
  					_react2['default'].createElement('p', null),
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleCss2['default'].tip },
  						'Since husk has longer cooldown, you can use ',
  						_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5530 }),
  						' (Air 4) to block eggs if you know it will be eggs. It is safer, as it does not requires precise positioning. However, with its long cast time it should be casted immediately after the spit animation start.'
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
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 21647 }),
  							' (Magnetic Shield 2) block one attack, which can be used to block spins. Keep in mind though that if something attack you during the block it will be blocked instead of the spin. '
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							'Magnetic Shield autoattack chain has a charging attack which cause you to lose positioning. If you\'re holding it during burn phase, it is better not to burn at all'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 15795 }),
  							' and Take Root (Sylvari racial elite) can be used to block spits caused by small spins. When used this way you will see a lot of ',
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
  							_react2['default'].createElement(_componentsGwSkill2['default'], { id: 5555 }),
  							' (Earth Focus 4) clears two conditions. It also can be used to reflect two set of eggs.'
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _get = __webpack_require__(5)['default'];

  var _inherits = __webpack_require__(6)['default'];

  var _createClass = __webpack_require__(4)['default'];

  var _classCallCheck = __webpack_require__(3)['default'];

  var _interopRequireDefault = __webpack_require__(1)['default'];

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _react = __webpack_require__(2);

  var _react2 = _interopRequireDefault(_react);

  var _styleCss = __webpack_require__(7);

  var _styleCss2 = _interopRequireDefault(_styleCss);

  var _componentsLink = __webpack_require__(8);

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
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container },
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
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleCss2['default'].container },
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
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(
  								'a',
  								{ href: 'https://github.com/whs/ttblock' },
  								'Fork and contribute to this guide on GitHub'
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
/* 31 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"skill":"_2GJ3Em1tADf-zMCe7jPm4v"};

/***/ },
/* 32 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"skill":"_3IzAHf5lDBcuhOtRPGqndw","description":"_1Up85ku6KDrKgUaxINb-gR","cast":"_3LWYDg4_wOwVWMiKjCyEHe","facts":"_1oydZ9Swry6JSVB2fy-xml","icon":"_2qRLmjpAcwmvoChWNHY31C","stack":"_1fukw2w8MaN_fp9-XbHIYw","detail":"_1EcCc70-W0aaSUwnJj45W3"};

/***/ },
/* 33 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"spec":"_1OwXsC6K8ORvj6SK2IBT1w","specName":"_3e2XwdDCCQrEkCvs1MR8wc","specIcon":"_3RCNb2STd4ncFtxiIeVQcG","trait":"_2IGSH6-KO_Wy8HfLU2aJgG","unhighlight":"_1kovXQynRn05Bw0RzpfhzM","specWrap":"_3Kx6sFWcxP151dXOdR5p0p"};

/***/ },
/* 34 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },
/* 35 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"nav":"_1wP3z47NNs6jmxwufvYhg2","main":"_1r2gydHXaLeFog2HxbsBB5"};

/***/ },
/* 36 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"step":"maAhOXAOJgFWbOoVG9ELu","description":"_34YnO3E_7xFYPyvyrQdy0N","figure":"_2sXG6Qy9ttHawhrKMrUTo4","figureItem":"MISJBmcfHXwn4zeF50PYU","figureList":"_3exJNv7jjaSsQaxdgN5Sjz","active":"iT1Hzgoi5rbrfYaBFC0Be"};

/***/ },
/* 37 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"traitExplaination":"_3vLeBN5a1JDbNBQIeW-rHd","spec":"_3hpvOiqVOwDv-9LJZiSXe-","explain":"_2WYL4RHm0OxG3jzkmTjZ_e"};

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Mist Form",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 60
  		},
  		{
  			"text": "Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 3
  		},
  		{
  			"text": "Prevents Capture-Point Contribution",
  			"type": "NoData",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png"
  		},
  		{
  			"text": "Movement Speed Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 66
  		}
  	],
  	"description": "Cantrip. Morph into an invulnerable, vaporous mist for a brief time.",
  	"type": "Utility",
  	"weapon_type": "None",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Utility",
  	"categories": [
  		"Cantrip"
  	],
  	"icon": "https://render.guildwars2.com/file/0A1E58F3900AB25D79A7A9FDF343F1742915775C/103341.png",
  	"id": 15795,
  	"chat_link": "[&B7M9AAA=]"
  };

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Stone Sheath",
  	"facts": [
  		{
  			"text": "Range",
  			"type": "Range",
  			"value": 240
  		},
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 8
  		},
  		{
  			"text": "Damage",
  			"type": "Damage",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"hit_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/79FF0046A5F9ADA3B4C4EC19ADB4CB124D5F0021/102848.png",
  			"duration": 6,
  			"status": "Bleeding",
  			"description": "Deals damage every second; stacks intensity.",
  			"apply_count": 3
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 240
  		},
  		{
  			"text": "Number of Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 3
  		}
  	],
  	"description": "Block the next attack and cause bleeding to foes around you.",
  	"type": "Weapon",
  	"weapon_type": "Sword",
  	"professions": [],
  	"slot": "Weapon_2",
  	"icon": "https://render.guildwars2.com/file/F5EB23E2BD4F1AA8C7BC0704534242F51034FC0F/867450.png",
  	"id": 21647,
  	"chat_link": "[&B49UAAA=]"
  };

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Obsidian Flesh",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 50
  		},
  		{
  			"text": "Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 4
  		},
  		{
  			"text": "Prevents Capture-Point Contribution",
  			"type": "NoData",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png"
  		}
  	],
  	"description": "Envelop yourself in stony armor, making yourself invulnerable.",
  	"type": "Weapon",
  	"weapon_type": "Dagger",
  	"attunement": "Earth",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Weapon_4",
  	"icon": "https://render.guildwars2.com/file/F12B0EDB12DD216E110ADA44A238559AF27396AD/103330.png",
  	"id": 5521,
  	"chat_link": "[&B5EVAAA=]"
  };

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Ring of Earth",
  	"facts": [
  		{
  			"text": "Range",
  			"type": "Range",
  			"value": 240
  		},
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 6
  		},
  		{
  			"text": "Damage",
  			"type": "Damage",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"hit_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/79FF0046A5F9ADA3B4C4EC19ADB4CB124D5F0021/102848.png",
  			"duration": 12,
  			"status": "Bleeding",
  			"description": "Deals damage every second; stacks intensity.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png",
  			"duration": 3,
  			"status": "Crippled",
  			"description": "Movement speed decreased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 240
  		},
  		{
  			"text": "Blocks Missiles",
  			"type": "NoData",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png"
  		},
  		{
  			"text": "Number of Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 5
  		}
  	],
  	"description": "Bleed foes with a ring of rocky spikes.",
  	"type": "Weapon",
  	"weapon_type": "Dagger",
  	"attunement": "Earth",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Weapon_2",
  	"icon": "https://render.guildwars2.com/file/0AFCBDA61E7BE315E50FE567B23632C803BF02A3/103107.png",
  	"id": 5525,
  	"chat_link": "[&B5UVAAA=]"
  };

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Swirling Winds",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 30
  		},
  		{
  			"text": "Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 6
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 400
  		}
  	],
  	"description": "Create a swirling wind that destroys projectiles.",
  	"type": "Weapon",
  	"weapon_type": "Dagger",
  	"attunement": "Air",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Weapon_5",
  	"icon": "https://render.guildwars2.com/file/2931CBED030FDBF30F0A0B293A0010925B90FDA6/103250.png",
  	"id": 5530,
  	"chat_link": "[&B5oVAAA=]"
  };

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Conjure Earth Shield",
  	"facts": [
  		{
  			"text": "Unblockable",
  			"type": "Unblockable",
  			"value": true
  		},
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 60
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/B4BCCD185B24380C953EAD0E5702BFAB96F3BF08/103342.png",
  			"duration": 0,
  			"status": "Conjure Earth Attributes",
  			"description": "Increased vitality and toughness.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/B4BCCD185B24380C953EAD0E5702BFAB96F3BF08/103342.png",
  			"duration": 60,
  			"status": "Conjure Earth Charges",
  			"description": "Skill uses remaining with this conjured weapon.",
  			"apply_count": 15
  		},
  		{
  			"text": "Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 60
  		}
  	],
  	"description": "Conjure. Manifest a magnetic shield in your hands and at the target location. Wielders of the weapon gain increased toughness and vitality.",
  	"type": "Utility",
  	"weapon_type": "None",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Utility",
  	"categories": [
  		"Conjure"
  	],
  	"traited_facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/B4BCCD185B24380C953EAD0E5702BFAB96F3BF08/103342.png",
  			"duration": 60,
  			"status": "Conjure Earth Charges",
  			"description": "Skill uses remaining with this conjured weapon.",
  			"apply_count": 25,
  			"requires_trait": 328,
  			"overrides": 3
  		}
  	],
  	"icon": "https://render.guildwars2.com/file/B4BCCD185B24380C953EAD0E5702BFAB96F3BF08/103342.png",
  	"id": 5546,
  	"chat_link": "[&B6oVAAA=]"
  };

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Magnetic Wave",
  	"facts": [
  		{
  			"text": "Range",
  			"type": "Range",
  			"value": 300
  		},
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 25
  		},
  		{
  			"text": "Damage",
  			"type": "Damage",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"hit_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png",
  			"duration": 5,
  			"status": "Crippled",
  			"description": "Movement speed decreased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Reflection Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 3
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 300
  		},
  		{
  			"text": "Number of Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 5
  		},
  		{
  			"text": "Combo Finisher",
  			"type": "ComboFinisher",
  			"percent": 100,
  			"finisher_type": "Blast"
  		}
  	],
  	"description": "Damage foes, cure three of your conditions, and reflect projectiles with a magnetic surge.",
  	"type": "Weapon",
  	"weapon_type": "Focus",
  	"attunement": "Earth",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Weapon_4",
  	"icon": "https://render.guildwars2.com/file/BBF16D6BF9CDA755420759F7D5F8D3FF6B2065DA/103343.png",
  	"id": 5555,
  	"chat_link": "[&B7MVAAA=]"
  };

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Fortify",
  	"facts": [
  		{
  			"text": "Range",
  			"type": "Range",
  			"value": 100
  		},
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 30
  		},
  		{
  			"text": "Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 3
  		},
  		{
  			"text": "Prevents Capture-Point Contribution",
  			"type": "NoData",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png"
  		}
  	],
  	"description": "Use magnetism to envelop yourself in a shield, becoming invulnerable.",
  	"type": "Weapon",
  	"weapon_type": "Sword",
  	"professions": [],
  	"slot": "Weapon_5",
  	"icon": "https://render.guildwars2.com/file/3C601AB809DAB4119DAF4B96DC0031C2CADABC9B/103368.png",
  	"id": 5623,
  	"chat_link": "[&B/cVAAA=]"
  };

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Armor of Earth",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 75
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  			"duration": 6,
  			"status": "Protection",
  			"description": "Incoming damage decreased; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/3D3A1C2D6D791C05179AB871902D28782C65C244/415959.png",
  			"duration": 6,
  			"status": "Stability",
  			"description": "Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared, or taunted.",
  			"apply_count": 10
  		},
  		{
  			"text": "Duration",
  			"type": "Time",
  			"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  			"duration": 6
  		}
  	],
  	"description": "Cantrip. Protect yourself with earth armor and gain protection and stability.",
  	"type": "Utility",
  	"weapon_type": "None",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Utility",
  	"categories": [
  		"Cantrip"
  	],
  	"icon": "https://render.guildwars2.com/file/C4FF5D0F0942BC27D7277CC9CB64280F451B16C5/103070.png",
  	"id": 5639,
  	"chat_link": "[&BwcWAAA=]"
  };

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = {
  	"name": "Arcane Shield",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 75
  		},
  		{
  			"text": "Damage",
  			"type": "Damage",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"hit_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/A20219EB6F5FC52A0E537163B4A9051606C11B52/65735.png",
  			"duration": 5,
  			"status": "Arcane Shield",
  			"description": "Blocks attacks. Explodes after blocking three attacks.",
  			"apply_count": 3
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 360
  		},
  		{
  			"text": "Number of Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 5
  		}
  	],
  	"description": "Arcane. Block attacks with an energy shield. If it blocks three attacks, it explodes for critical damage.",
  	"type": "Utility",
  	"weapon_type": "None",
  	"professions": [
  		"Elementalist"
  	],
  	"slot": "Utility",
  	"categories": [
  		"Arcane"
  	],
  	"icon": "https://render.guildwars2.com/file/A20219EB6F5FC52A0E537163B4A9051606C11B52/65735.png",
  	"id": 5641,
  	"chat_link": "[&BwkWAAA=]"
  };

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 26,
  	"name": "Earth",
  	"profession": "Elementalist",
  	"elite": false,
  	"minor_traits": [
  		278,
  		279,
  		280
  	],
  	"major_traits": [
  		282,
  		1507,
  		289,
  		275,
  		281,
  		277,
  		1508,
  		287,
  		1674
  	],
  	"icon": "https://render.guildwars2.com/file/BA6BC962A7ABA1330B3AC4141299397C0036559F/1011985.png",
  	"background": "https://render.guildwars2.com/file/B9C5BE9716010E3F7F170A52B5B272327CDA49A1/1012037.png"
  };

/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 41,
  	"name": "Air",
  	"profession": "Elementalist",
  	"elite": false,
  	"minor_traits": [
  		221,
  		222,
  		223
  	],
  	"major_traits": [
  		227,
  		224,
  		232,
  		229,
  		214,
  		1502,
  		226,
  		1503,
  		1672
  	],
  	"icon": "https://render.guildwars2.com/file/D3DB62FF6055021A717F3C6A0C19502F2C4EC1FF/1011983.png",
  	"background": "https://render.guildwars2.com/file/97BE972EC832ABC4F8645FF4A063EFF89B2942B8/1012034.png"
  };

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 48,
  	"name": "Tempest",
  	"profession": "Elementalist",
  	"elite": true,
  	"minor_traits": [
  		2025,
  		1938,
  		1948
  	],
  	"major_traits": [
  		1952,
  		1962,
  		1886,
  		1891,
  		1902,
  		2015,
  		1839,
  		2033,
  		1986
  	],
  	"icon": "https://render.guildwars2.com/file/D1970ABC09D07B4275C7E47DDD0EDC0F4CFC050C/1029930.png",
  	"background": "https://render.guildwars2.com/file/D22197110A38F5651AA3F4C23914A197DD2C5BA1/1029936.png"
  };

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1232,
  	"tier": 2,
  	"name": "Preparedness",
  	"description": "Increases maximum initiative by 3.",
  	"slot": "Minor",
  	"specialization": 44,
  	"icon": "https://render.guildwars2.com/file/6B47FB123522D290119FE8936D990D1C9CED2F60/1012772.png"
  };

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1277,
  	"tier": 2,
  	"name": "Bountiful Theft",
  	"description": "Stealing grants you and all nearby allies vigor. You rip boons from your target and grant them to nearby allies.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/58E92EBAF0DB4DA7C4AC04D9B22BCA5ECF0100DE/102843.png",
  			"duration": 10,
  			"status": "Vigor",
  			"description": "Endurance regeneration increased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Boons Stolen",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 2
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 240
  		},
  		{
  			"text": "Number of Allied Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 5
  		}
  	],
  	"specialization": 44,
  	"icon": "https://render.guildwars2.com/file/C1D1E47EA4F66866ECE25FAF5359F54DBC2140B3/1012765.png"
  };

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1279,
  	"tier": 1,
  	"name": "Serpent's Touch",
  	"description": "Stealing inflicts poison. While in the downed state, your attacks apply poison.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/559B0AF9FB5E1243D2649FAAE660CCB338AACC19/102840.png",
  			"duration": 10,
  			"status": "Poisoned",
  			"description": "Deals damage every second; decreases healing effectiveness by 33%; damage stacks intensity.",
  			"apply_count": 2
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/559B0AF9FB5E1243D2649FAAE660CCB338AACC19/102840.png",
  			"duration": 2,
  			"status": "Poisoned",
  			"description": "Deals damage every second; decreases healing effectiveness by 33%; damage stacks intensity.",
  			"apply_count": 1
  		}
  	],
  	"traited_facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/559B0AF9FB5E1243D2649FAAE660CCB338AACC19/102840.png",
  			"duration": 13,
  			"status": "Poisoned",
  			"description": "Deals damage every second; decreases healing effectiveness by 33%; damage stacks intensity.",
  			"apply_count": 2,
  			"requires_trait": 1291,
  			"overrides": 0
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/559B0AF9FB5E1243D2649FAAE660CCB338AACC19/102840.png",
  			"duration": 3,
  			"status": "Poisoned",
  			"description": "Deals damage every second; decreases healing effectiveness by 33%; damage stacks intensity.",
  			"apply_count": 1,
  			"requires_trait": 1291,
  			"overrides": 1
  		}
  	],
  	"specialization": 28,
  	"icon": "https://render.guildwars2.com/file/0FEE00DFE899386F321C0F719EC70FED03AB03E7/1012747.png"
  };

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1280,
  	"tier": 2,
  	"name": "Lotus Poison",
  	"description": "Weaken targets when you poison them.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 10
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/6CB0E64AF9AA292E332A38C1770CE577E2CDE0E8/102853.png",
  			"duration": 4,
  			"status": "Weakness",
  			"description": "Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 28,
  	"icon": "https://render.guildwars2.com/file/F1441E7BBAA8502E50B6105C246B0ED9AF110154/1012748.png"
  };

/***/ },
/* 55 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1281,
  	"tier": 1,
  	"name": "Keen Observer",
  	"description": "Critical-hit chance is increased while your health is above the threshold.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Critical Chance Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/63015872E20761F5E76F803A90666FBE4E262BC9/536051.png",
  			"percent": 5
  		},
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 90
  		}
  	],
  	"specialization": 35,
  	"icon": "https://render.guildwars2.com/file/B809D24257F305F97259FE7C141D7CAF04431F0D/1012735.png"
  };

/***/ },
/* 56 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1282,
  	"tier": 3,
  	"name": "Ferocious Strikes",
  	"description": "Gain increased critical damage against foes whose health is above the threshold.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 50
  		},
  		{
  			"text": "Damage Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"percent": 10
  		}
  	],
  	"specialization": 35,
  	"icon": "https://render.guildwars2.com/file/519532119E92CFFF9375E2E3CFC4326B46659F63/1012737.png"
  };

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1289,
  	"tier": 1,
  	"name": "Vigorous Recovery",
  	"description": "Gain vigor when using a healing skill.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/58E92EBAF0DB4DA7C4AC04D9B22BCA5ECF0100DE/102843.png",
  			"duration": 7,
  			"status": "Vigor",
  			"description": "Endurance regeneration increased by 50%; stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 54,
  	"icon": "https://render.guildwars2.com/file/F6031E3A99700AD327760C9D276F1A21A2EAF8BD/1012715.png"
  };

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1502,
  	"tier": 2,
  	"name": "Tempest Defense",
  	"description": "Surround yourself with a Shocking Aura when disabled (stun, daze, knockback, pull, knockdown, sink, float, fear, or launch). Deal more damage to stunned or knocked-down foes.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Damage Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"percent": 20
  		}
  	],
  	"skills": [
  		{
  			"name": "Shocking Aura",
  			"facts": [
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 25
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/9D30A3547A777040C5FE730816A13932FDFDD77F/103104.png",
  					"duration": 4,
  					"status": "Shocking Aura",
  					"description": "Stun nearby attacking foes with an electric shock (only once per 2 seconds for each attacker).",
  					"apply_count": 1
  				},
  				{
  					"text": "Stun",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/143F46DEF466062F01C52B69922FFCEF73DCA801/156668.png",
  					"duration": 1
  				}
  			],
  			"description": "Envelop yourself with electrical energy that stuns nearby foes if they attack you. Each attacker can be affected by this only once every 2 seconds.",
  			"traited_facts": [
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/96D90DF84CAFE008233DD1C2606A12C1A0E68048/102842.png",
  					"duration": 5,
  					"status": "Fury",
  					"description": "Critical Chance increased by 20%; stacks duration.",
  					"apply_count": 1,
  					"requires_trait": 227
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  					"duration": 3,
  					"status": "Protection",
  					"description": "Incoming damage decreased; stacks duration.",
  					"apply_count": 1,
  					"requires_trait": 289
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/20CFC14967E67F7A3FD4A4B8722B4CF5B8565E11/102836.png",
  					"duration": 5,
  					"status": "Swiftness",
  					"description": "Movement speed increased by 33%; stacks duration.",
  					"apply_count": 1,
  					"requires_trait": 227
  				}
  			],
  			"icon": "https://render.guildwars2.com/file/9D30A3547A777040C5FE730816A13932FDFDD77F/103104.png",
  			"id": 5791,
  			"chat_link": "[&B58WAAA=]"
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/4505D3D02606283B02124C3304697304E663ECAE/1012275.png"
  };

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1503,
  	"tier": 3,
  	"name": "Fresh Air",
  	"description": "Recharge air attunement on a critical hit.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge Reduced",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 100
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/FA64C9F2750F986E52E8376F22EDBA3844A8C603/1012277.png"
  };

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1507,
  	"tier": 1,
  	"name": "Serrated Stones",
  	"description": "Bleeds you apply last longer; deal more damage to bleeding foes.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Damage Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"percent": 5
  		},
  		{
  			"text": "Duration Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 20
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/0A2B6F1BC25AC118B67DC31F9A0BA6427ABB6A6A/1012295.png"
  };

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1508,
  	"tier": 3,
  	"name": "Diamond Skin",
  	"description": "Conditions cannot be applied to you when your health is above the threshold.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 90
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/D1014421F0E06325664204C905200002987E38C5/1012300.png"
  };

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1672,
  	"tier": 3,
  	"name": "Lightning Rod",
  	"description": "Disabling an enemy (stun, daze, knockback, knockdown, sink, float, fear, pull, or launch) causes them to be struck by a lightning bolt.",
  	"slot": "Major",
  	"skills": [
  		{
  			"name": "Lightning Rod",
  			"facts": [
  				{
  					"text": "Damage",
  					"type": "Damage",
  					"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  					"hit_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/6CB0E64AF9AA292E332A38C1770CE577E2CDE0E8/102853.png",
  					"duration": 4,
  					"status": "Weakness",
  					"description": "Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.",
  					"apply_count": 1
  				}
  			],
  			"description": "Call down lightning on a disabled foe.",
  			"icon": "https://render.guildwars2.com/file/00A93FDC4F99D29749B27C4D73C5A1644A0F3726/104675.png",
  			"id": 24305,
  			"chat_link": "[&B/FeAAA=]"
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/0D26024404D06BBB0A3BD70340251740C73E0F2C/1012278.png"
  };

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1674,
  	"tier": 3,
  	"name": "Stone Heart",
  	"description": "You cannot be critically hit while attuned to earth.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/22F1BDACFBEBC8FF2BF77B22B3E535D2BA03D140/1012302.png",
  			"duration": 0,
  			"status": "Stone Heart",
  			"description": "You cannot be critically hit while attuned to earth.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/22F1BDACFBEBC8FF2BF77B22B3E535D2BA03D140/1012302.png"
  };

/***/ },
/* 64 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1839,
  	"tier": 3,
  	"name": "Imbued Melodies",
  	"description": "While wielding a warhorn, your boon duration is increased. Use Sand Squall when struck while below the health threshold.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 10
  		},
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 90
  		},
  		{
  			"text": "Duration Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 20
  		}
  	],
  	"skills": [
  		{
  			"name": "Sand Squall",
  			"facts": [
  				{
  					"text": "Range",
  					"type": "Range",
  					"value": 600
  				},
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 30
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/048054BEC158D010706002C22AF47952ECC5A33C/103108.png",
  					"duration": 5,
  					"status": "Magnetic Aura",
  					"description": "Reflect projectiles with magnetic energy.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  					"duration": 2,
  					"status": "Protection",
  					"description": "Incoming damage decreased; stacks duration.",
  					"apply_count": 1
  				},
  				{
  					"text": "Duration Increase",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"duration": 2
  				},
  				{
  					"text": "Number of Targets",
  					"type": "Number",
  					"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  					"value": 5
  				},
  				{
  					"text": "Radius",
  					"type": "Distance",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"distance": 600
  				},
  				{
  					"text": "Combo Finisher",
  					"type": "ComboFinisher",
  					"percent": 100,
  					"finisher_type": "Blast"
  				}
  			],
  			"description": "Apply protection to you and your allies, then increase the duration of all boons currently existing on you and your allies. Gain magnetic aura.",
  			"icon": "https://render.guildwars2.com/file/7B047DE80C026DCF420E43DD16D80409E8C679A4/1029996.png",
  			"id": 31835,
  			"chat_link": "[&B1t8AAA=]"
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/32047761CEA507A4A5DC2A2CB431D85D02E9BBBF/1029950.png"
  };

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1886,
  	"tier": 1,
  	"name": "Unstable Conduit",
  	"description": "Overloading an attunement grants an aura based on the element you're attuned to when the ability is completed.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/2AE8672D7A08BB4129B6F0F40C2BC10642D55C28/102884.png",
  			"duration": 5,
  			"status": "Fire Shield",
  			"description": "Enveloped in a fiery shield that burns foes, grants might each time you are struck (1-second cooldown per attacker).",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/1C91E9C799469ACC6EAF1ACD4B0AD8ACAB0C69A2/103035.png",
  				"status": "Fire Attunement",
  				"description": "Cast fire spells."
  			}
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/0D5599084DE820990E9F6D5A6853900553B205BC/103077.png",
  			"duration": 5,
  			"status": "Frost Aura",
  			"description": "Chill foes that strike you (only once per second for each attacker); incoming damage is reduced by 10%.",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/737E1B9F7855B9F5D3DE1C990CD42118EF3D1C92/102820.png",
  				"status": "Water Attunement",
  				"description": "Cast water spells."
  			}
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/9D30A3547A777040C5FE730816A13932FDFDD77F/103104.png",
  			"duration": 5,
  			"status": "Shocking Aura",
  			"description": "Stun nearby attacking foes with an electric shock (only once per 2 seconds for each attacker).",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/4857F59020DE3B0950B9C91F3D234A1C1932984A/103048.png",
  				"status": "Air Attunement",
  				"description": "Cast air spells."
  			}
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/048054BEC158D010706002C22AF47952ECC5A33C/103108.png",
  			"duration": 5,
  			"status": "Magnetic Aura",
  			"description": "Reflect projectiles with magnetic energy.",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/4B8056D9BD080DC8E74AE6A57B2B383A2D4265C9/102870.png",
  				"status": "Earth Attunement",
  				"description": "Cast earth spells."
  			}
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/51765B3330426700C8A2E580B23637CA9CD728FB/1029945.png"
  };

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1891,
  	"tier": 2,
  	"name": "Tempestuous Aria",
  	"description": "Allies affected by your shouts gain might. Enemies are affected by weakness.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png",
  			"duration": 10,
  			"status": "Might",
  			"description": "Increased outgoing damage; stacks intensity.",
  			"apply_count": 2
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/6CB0E64AF9AA292E332A38C1770CE577E2CDE0E8/102853.png",
  			"duration": 3,
  			"status": "Weakness",
  			"description": "Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 600
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/0C2A72B848A7FBB596DE6096B4C45814D3266EEB/1029946.png"
  };

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1902,
  	"tier": 2,
  	"name": "Invigorating Torrents",
  	"description": "Auras you apply also grant regeneration and vigor.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/58E92EBAF0DB4DA7C4AC04D9B22BCA5ECF0100DE/102843.png",
  			"duration": 5,
  			"status": "Vigor",
  			"description": "Endurance regeneration increased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/F69996772B9E18FD18AD0AABAB25D7E3FC42F261/102835.png",
  			"duration": 5,
  			"status": "Regeneration",
  			"description": "Gain health every second; stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/053DD3F436F333340672EB1F7F951F540ADFDBC4/1029947.png"
  };

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1938,
  	"tier": 2,
  	"name": "Speedy Conduit",
  	"description": "Gain swiftness when overloading an attunement.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/20CFC14967E67F7A3FD4A4B8722B4CF5B8565E11/102836.png",
  			"duration": 8,
  			"status": "Swiftness",
  			"description": "Movement speed increased by 33%; stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/BCB57FA30EB89935259B04A72DF20F5A0E0E5C5B/1029954.png"
  };

/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1948,
  	"tier": 3,
  	"name": "Hardy Conduit",
  	"description": "Gain protection while overloading an attunement. Protection has increased effectiveness.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  			"duration": 3,
  			"status": "Protection",
  			"description": "Incoming damage decreased; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Effectiveness Increased",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 20
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/F61B0203A07CDF17A3613731EE93F6C09410E825/1029953.png"
  };

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1952,
  	"tier": 1,
  	"name": "Gale Song",
  	"description": "Trigger \"Eye of the Storm!\" when a foe attempts to control you by stun, daze, knockback, pull, knockdown, sink, float, fear, taunt, or launch.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 40
  		}
  	],
  	"skills": [
  		{
  			"name": "\"Eye of the Storm!\"",
  			"facts": [
  				{
  					"text": "Range",
  					"type": "Range",
  					"value": 600
  				},
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 40
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/E04392C3D8ED985125973AEB99D8460C483263F9/103458.png",
  					"duration": 5,
  					"status": "Superspeed",
  					"description": "Movement speed is greatly increased.",
  					"apply_count": 1
  				},
  				{
  					"text": "Number of Targets",
  					"type": "Number",
  					"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  					"value": 5
  				},
  				{
  					"text": "Radius",
  					"type": "Distance",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"distance": 600
  				}
  			],
  			"description": "Shout. Imbue your voice with the element of air, massively increasing speed for nearby allies. The effects of this shout linger, breaking stun for nearby allies.",
  			"categories": [
  				"Shout"
  			],
  			"icon": "https://render.guildwars2.com/file/0A4809D69EDAD4FC34F9D46A035096B2EA48D412/1029990.png",
  			"id": 30745,
  			"chat_link": "[&Bxl4AAA=]"
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/65ED3B2F3816172BC7E23598DA93A0731D6D0245/1029943.png"
  };

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1962,
  	"tier": 1,
  	"name": "Latent Stamina",
  	"description": "Apply vigor in a radius when attuning to water. Granting vigor to allies also restores a portion of endurance.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 10
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/58E92EBAF0DB4DA7C4AC04D9B22BCA5ECF0100DE/102843.png",
  			"duration": 3,
  			"status": "Vigor",
  			"description": "Endurance regeneration increased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Endurance Gained",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 10
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 240
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/BA1F1D070867AC48FE57F876315657DDA25A044E/1029944.png"
  };

/***/ },
/* 72 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 1986,
  	"tier": 3,
  	"name": "Elemental Bastion",
  	"description": "Auras you apply heal allies. Apply a frost aura to yourself and nearby allies when struck while below the health threshold.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge",
  			"type": "Recharge",
  			"value": 30
  		},
  		{
  			"text": "Healing",
  			"type": "AttributeAdjust",
  			"icon": "https://render.guildwars2.com/file/D4347C52157B040943051D7E09DEAD7AF63D4378/156662.png",
  			"value": 778,
  			"target": "Healing"
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/0D5599084DE820990E9F6D5A6853900553B205BC/103077.png",
  			"duration": 5,
  			"status": "Frost Aura",
  			"description": "Chill foes that strike you (only once per second for each attacker); incoming damage is reduced by 10%.",
  			"apply_count": 1
  		},
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 75
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 360
  		},
  		{
  			"text": "Number of Allied Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 5
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/570FD4DD0094280F906ACAAD37705E9B0F4ADA63/1029949.png"
  };

/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 2015,
  	"tier": 2,
  	"name": "Harmonious Conduit",
  	"description": "Gain stability when beginning an overload. Upon successfully completing an overload, gain increased damage for a period of time.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/3D3A1C2D6D791C05179AB871902D28782C65C244/415959.png",
  			"duration": 4,
  			"status": "Stability",
  			"description": "Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared, or taunted.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/DC03410B07E666C9F8AECFEDCE9855C65136E597/1029948.png",
  			"duration": 5,
  			"status": "Harmonious Conduit",
  			"description": "Your damage is increased.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/DC03410B07E666C9F8AECFEDCE9855C65136E597/1029948.png"
  };

/***/ },
/* 74 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 2025,
  	"tier": 1,
  	"name": "Singularity",
  	"description": "Attain elemental singularity by remaining in an attunement for a period of time. Upon attaining singularity, you may overload the attunement to your vicinity.",
  	"slot": "Minor",
  	"skills": [
  		{
  			"name": "Overload Fire",
  			"facts": [
  				{
  					"text": "Range",
  					"type": "Range",
  					"value": 180
  				},
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 20
  				},
  				{
  					"text": "Pulse Damage",
  					"type": "Damage",
  					"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  					"hit_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/B47BF5803FED2718D7474EAF9617629AD068EE10/102849.png",
  					"duration": 3,
  					"status": "Burning",
  					"description": "Deals damage every second; stacks intensity.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png",
  					"duration": 12,
  					"status": "Might",
  					"description": "Increased outgoing damage; stacks intensity.",
  					"apply_count": 1
  				},
  				{
  					"text": "Duration",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  					"duration": 5
  				},
  				{
  					"text": "Interval",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"duration": 1
  				},
  				{
  					"text": "Combo Field",
  					"type": "ComboField",
  					"field_type": "Fire"
  				},
  				{
  					"text": "Combo Finisher",
  					"type": "ComboFinisher",
  					"percent": 100,
  					"finisher_type": "Whirl"
  				}
  			],
  			"description": "Overload. Unleash all flames you've accumulated, searing enemies and strengthening allies. Finishing the cast leaves a tornado behind. Using this skill causes the attunement to have a longer recharge.",
  			"categories": [
  				"Overload"
  			],
  			"traited_facts": [
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/2AE8672D7A08BB4129B6F0F40C2BC10642D55C28/102884.png",
  					"duration": 4,
  					"status": "Fire Shield",
  					"description": "Enveloped in a fiery shield that burns foes, grants might each time you are struck (1-second cooldown per attacker).",
  					"apply_count": 1,
  					"requires_trait": 1886
  				}
  			],
  			"icon": "https://render.guildwars2.com/file/3A04F5D420A86664A3044B950E145E022A49D8AA/1029985.png",
  			"id": 29706,
  			"chat_link": "[&Bwp0AAA=]"
  		},
  		{
  			"name": "Overload Water",
  			"facts": [
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 20
  				},
  				{
  					"text": "Healing",
  					"type": "AttributeAdjust",
  					"icon": "https://render.guildwars2.com/file/D4347C52157B040943051D7E09DEAD7AF63D4378/156662.png",
  					"value": 392,
  					"target": "Healing"
  				},
  				{
  					"text": "Final Heal",
  					"type": "AttributeAdjust",
  					"icon": "https://render.guildwars2.com/file/D4347C52157B040943051D7E09DEAD7AF63D4378/156662.png",
  					"value": 3220,
  					"target": "Healing"
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/F69996772B9E18FD18AD0AABAB25D7E3FC42F261/102835.png",
  					"duration": 8,
  					"status": "Regeneration",
  					"description": "Gain health every second; stacks duration.",
  					"apply_count": 1
  				},
  				{
  					"text": "Conditions Removed per Pulse",
  					"type": "Number",
  					"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  					"value": 1
  				},
  				{
  					"text": "Interval",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"duration": 1
  				},
  				{
  					"text": "Radius",
  					"type": "Distance",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"distance": 360
  				},
  				{
  					"text": "Water Attunement Recharge",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  					"duration": 20
  				}
  			],
  			"description": "Overload. Create a surge of accumulated water magic, healing and cleansing allies. When the cast ends, heal the area and apply regeneration. Using this skill causes the attunement to have a longer recharge.",
  			"categories": [
  				"Overload"
  			],
  			"traited_facts": [
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/0D5599084DE820990E9F6D5A6853900553B205BC/103077.png",
  					"duration": 4,
  					"status": "Frost Aura",
  					"description": "Chill foes that strike you (only once per second for each attacker); incoming damage is reduced by 10%.",
  					"apply_count": 1,
  					"requires_trait": 1886
  				}
  			],
  			"icon": "https://render.guildwars2.com/file/0E3DEF200ACD40FE281956CBA511E934F2B3F82A/1029986.png",
  			"id": 29415,
  			"chat_link": "[&B+dyAAA=]"
  		},
  		{
  			"name": "Overload Air",
  			"facts": [
  				{
  					"text": "Range",
  					"type": "Range",
  					"value": 360
  				},
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 20
  				},
  				{
  					"text": "Damage",
  					"type": "Damage",
  					"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  					"hit_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/592CC2A120322000BC7234B8522BBE7BAF2F4A57/1029987.png",
  					"duration": 10,
  					"status": "Static Charge",
  					"description": "Your next attack delivers a lightning strike.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/3A394C1A0A3257EB27A44842DDEEF0DF000E1241/102850.png",
  					"duration": 10,
  					"status": "Vulnerability",
  					"description": "Damage and condition damage taken are increased; stacks intensity.",
  					"apply_count": 1
  				},
  				{
  					"text": "Radius",
  					"type": "Distance",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"distance": 360
  				},
  				{
  					"text": "Attack Interval",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"duration": 0
  				},
  				{
  					"text": "Number of Targets",
  					"type": "Number",
  					"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  					"value": 3
  				},
  				{
  					"text": "Combo Field",
  					"type": "ComboField",
  					"icon": "https://render.guildwars2.com/file/59E0DB6A699810641C959926ADFEF73E08CC255B/156655.png",
  					"field_type": "Lightning"
  				},
  				{
  					"text": "Field Duration",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  					"duration": 4
  				}
  			],
  			"description": "Overload. Use your air magic to summon a nimbus that repeatedly strikes nearby enemies. When this ability is complete, imbue your allies with electricity and create a lingering static region that strikes enemies at the same interval. Using this skill causes the attunement to have a longer recharge.",
  			"categories": [
  				"Overload"
  			],
  			"traited_facts": [
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/9D30A3547A777040C5FE730816A13932FDFDD77F/103104.png",
  					"duration": 4,
  					"status": "Shocking Aura",
  					"description": "Stun nearby attacking foes with an electric shock (only once per 2 seconds for each attacker).",
  					"apply_count": 1,
  					"requires_trait": 1886
  				}
  			],
  			"icon": "https://render.guildwars2.com/file/592CC2A120322000BC7234B8522BBE7BAF2F4A57/1029987.png",
  			"id": 29719,
  			"chat_link": "[&Bxd0AAA=]"
  		},
  		{
  			"name": "Overload Earth",
  			"facts": [
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 20
  				},
  				{
  					"text": "Damage",
  					"type": "Damage",
  					"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  					"hit_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png",
  					"duration": 3,
  					"status": "Crippled",
  					"description": "Movement speed decreased by 50%; stacks duration.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/79FF0046A5F9ADA3B4C4EC19ADB4CB124D5F0021/102848.png",
  					"duration": 9,
  					"status": "Bleeding",
  					"description": "Deals damage every second; stacks intensity.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/397A613651BFCA2832B6469CE34735580A2C120E/102844.png",
  					"duration": 4,
  					"status": "Immobile",
  					"description": "Unable to move; stacks duration.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  					"duration": 1,
  					"status": "Protection",
  					"description": "Incoming damage decreased; stacks duration.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/3D3A1C2D6D791C05179AB871902D28782C65C244/415959.png",
  					"duration": 4,
  					"status": "Stability",
  					"description": "Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared, or taunted.",
  					"apply_count": 3
  				},
  				{
  					"text": "Interval",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"duration": 1
  				},
  				{
  					"text": "Storm Duration",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  					"duration": 4
  				},
  				{
  					"text": "Radius",
  					"type": "Distance",
  					"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  					"distance": 240
  				},
  				{
  					"text": "Number of Targets",
  					"type": "Number",
  					"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  					"value": 5
  				},
  				{
  					"text": "Combo Finisher",
  					"type": "ComboFinisher",
  					"icon": "https://render.guildwars2.com/file/A513F3653D33FBA4220D2D307799F8A327A36A3B/156656.png",
  					"percent": 100,
  					"finisher_type": "Blast"
  				}
  			],
  			"description": "Overload. Ride your stored earth magic around, granting protection to other allies you move over and crippling enemies, then deliver a final immobilizing blast of power to the area, leaving behind a dust cyclone that delivers the same effects as the overload. Using this skill causes the attunement to have a longer recharge.",
  			"categories": [
  				"Overload"
  			],
  			"traited_facts": [
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/048054BEC158D010706002C22AF47952ECC5A33C/103108.png",
  					"duration": 4,
  					"status": "Magnetic Aura",
  					"description": "Reflect projectiles with magnetic energy.",
  					"apply_count": 1,
  					"requires_trait": 1886
  				}
  			],
  			"icon": "https://render.guildwars2.com/file/975A1DE89BA70721BD0E0F6D601C259066F8D468/1029988.png",
  			"id": 29618,
  			"chat_link": "[&B7JzAAA=]"
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/B5B020BD12E7A490DE9551FA06D920AC4F9A6036/1029952.png"
  };

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 2033,
  	"tier": 3,
  	"name": "Lucid Singularity",
  	"description": "Remove and gain massive resistance to movement-impeding conditions while overloading your attunements.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/397A613651BFCA2832B6469CE34735580A2C120E/102844.png",
  			"duration": 0,
  			"status": "Immobile",
  			"description": "Unable to move; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png",
  			"duration": 0,
  			"status": "Crippled",
  			"description": "Movement speed decreased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/28C4EC547A3516AF0242E826772DA43A5EAC3DF3/102839.png",
  			"duration": 0,
  			"status": "Chilled",
  			"description": "Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Condition Duration Reduction",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 100
  		}
  	],
  	"specialization": 48,
  	"icon": "https://render.guildwars2.com/file/2E3AEA68A85501D1209EABD2E1603C0151ED9292/1029951.png"
  };

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 214,
  	"tier": 2,
  	"name": "Aeromancer's Training",
  	"description": "Gain precision while attuned to air. Reduces recharge on all air weapon skills.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge Reduced",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 33
  		},
  		{
  			"text": "Precision Increase",
  			"type": "AttributeAdjust",
  			"icon": "https://render.guildwars2.com/file/E1E7C4D3A6E62F3D5C9F627CE8175BFB0C614CBE/156652.png",
  			"value": 190,
  			"target": "Precision"
  		}
  	],
  	"traited_facts": [
  		{
  			"text": "Ferocity Increase",
  			"type": "AttributeAdjust",
  			"icon": "https://render.guildwars2.com/file/E1E7C4D3A6E62F3D5C9F627CE8175BFB0C614CBE/156652.png",
  			"value": 190,
  			"requires_trait": 396,
  			"target": "Precision"
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/A747E59680760ACDDEAACBD053BF3C7F1A335919/1012274.png"
  };

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 221,
  	"tier": 1,
  	"name": "Zephyr's Speed",
  	"description": "Move faster while attuned to air.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Movement Speed Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 25
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/9B55449FC8EF093FE4925DDE9BF41B5A6298BAAA/1012279.png"
  };

/***/ },
/* 78 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 222,
  	"tier": 2,
  	"name": "Electric Discharge",
  	"description": "Strike your target with a bolt of lightning when attuning to air.",
  	"slot": "Minor",
  	"skills": [
  		{
  			"name": "Lightning Strike",
  			"facts": [
  				{
  					"text": "Range",
  					"type": "Range",
  					"value": 900
  				},
  				{
  					"text": "Damage",
  					"type": "Damage",
  					"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  					"hit_count": 1
  				}
  			],
  			"description": "Strike your foe with lightning.",
  			"icon": "https://render.guildwars2.com/file/9C090BF7E893030BABD5DC4BA4020262AD91CE2C/103134.png",
  			"id": 21636,
  			"chat_link": "[&B4RUAAA=]"
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/F4622EE8300028599369D4084EA7A2774D250DEA/1012280.png"
  };

/***/ },
/* 79 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 223,
  	"tier": 3,
  	"name": "Weak Spot",
  	"description": "Chance to cause vulnerability on critical hits.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Chance on Critical Hit",
  			"type": "Percent",
  			"percent": 60
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/3A394C1A0A3257EB27A44842DDEEF0DF000E1241/102850.png",
  			"duration": 5,
  			"status": "Vulnerability",
  			"description": "Damage and condition damage taken are increased; stacks intensity.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/E7BA4EA452211E5978E51E4EAF6EA1DA3C337F38/1012281.png"
  };

/***/ },
/* 80 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 224,
  	"tier": 1,
  	"name": "One with Air",
  	"description": "Gain superspeed when attuning to air.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/E04392C3D8ED985125973AEB99D8460C483263F9/103458.png",
  			"duration": 3,
  			"status": "Superspeed",
  			"description": "Movement speed is greatly increased.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/200BAEAD2FCD181E102556B02AF5F326EC583DD0/1012271.png"
  };

/***/ },
/* 81 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 226,
  	"tier": 3,
  	"name": "Bolt to the Heart",
  	"description": "Deal more damage when your foe's health drops below the threshold.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 50
  		},
  		{
  			"text": "Damage Increase",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"percent": 20
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/3E4E727D6D23DFEF4205F272A15E2136799DE291/1012276.png"
  };

/***/ },
/* 82 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 227,
  	"tier": 1,
  	"name": "Zephyr's Boon",
  	"description": "Auras grant fury and swiftness when applied.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/96D90DF84CAFE008233DD1C2606A12C1A0E68048/102842.png",
  			"duration": 5,
  			"status": "Fury",
  			"description": "Critical Chance increased by 20%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/20CFC14967E67F7A3FD4A4B8722B4CF5B8565E11/102836.png",
  			"duration": 5,
  			"status": "Swiftness",
  			"description": "Movement speed increased by 33%; stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/0542900C005EB41CEDFAF003D91A9104D479A848/1012270.png"
  };

/***/ },
/* 83 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 229,
  	"tier": 2,
  	"name": "Inscription",
  	"description": "Grants a boon associated with your current attunement when you cast a glyph. Reduces glyph recharge.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png",
  			"duration": 20,
  			"status": "Might",
  			"description": "Increased outgoing damage; stacks intensity.",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/1C91E9C799469ACC6EAF1ACD4B0AD8ACAB0C69A2/103035.png",
  				"status": "Fire Attunement",
  				"description": "Cast fire spells."
  			}
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/F69996772B9E18FD18AD0AABAB25D7E3FC42F261/102835.png",
  			"duration": 10,
  			"status": "Regeneration",
  			"description": "Gain health every second; stacks duration.",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/737E1B9F7855B9F5D3DE1C990CD42118EF3D1C92/102820.png",
  				"status": "Water Attunement",
  				"description": "Cast water spells."
  			}
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/20CFC14967E67F7A3FD4A4B8722B4CF5B8565E11/102836.png",
  			"duration": 10,
  			"status": "Swiftness",
  			"description": "Movement speed increased by 33%; stacks duration.",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/4857F59020DE3B0950B9C91F3D234A1C1932984A/103048.png",
  				"status": "Air Attunement",
  				"description": "Cast air spells."
  			}
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "PrefixedBuff",
  			"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  			"duration": 3,
  			"status": "Protection",
  			"description": "Incoming damage decreased; stacks duration.",
  			"apply_count": 1,
  			"prefix": {
  				"text": "Apply Buff/Condition",
  				"icon": "https://render.guildwars2.com/file/4B8056D9BD080DC8E74AE6A57B2B383A2D4265C9/102870.png",
  				"status": "Earth Attunement",
  				"description": "Cast earth spells."
  			}
  		},
  		{
  			"text": "Recharge Reduced",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 20
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/0157D1D40CF9B505B907DB95149F767A6FDB09DD/1012273.png"
  };

/***/ },
/* 84 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 232,
  	"tier": 1,
  	"name": "Ferocious Winds",
  	"description": "Gain ferocity based on your precision.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Attribute Conversion",
  			"type": "BuffConversion",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 7,
  			"source": "Precision",
  			"target": "CritDamage"
  		}
  	],
  	"specialization": 41,
  	"icon": "https://render.guildwars2.com/file/A0EB166CD43079B2F7206ED305FD6C3D049BB704/1012272.png"
  };

/***/ },
/* 85 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 275,
  	"tier": 2,
  	"name": "Strength of Stone",
  	"description": "Gain condition damage based on your toughness.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Attribute Conversion",
  			"type": "BuffConversion",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 10,
  			"source": "Toughness",
  			"target": "ConditionDamage"
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/567BA00AEB795B5021E5924CC3511DE3AAC26438/1012297.png"
  };

/***/ },
/* 86 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 277,
  	"tier": 2,
  	"name": "Geomancer's Training",
  	"description": "You recover more quickly from crippling, immobilizing, and chilling. Reduces recharge on all earth weapon skills.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge Reduced",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 33
  		},
  		{
  			"text": "Duration Decreased",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 33
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/28C4EC547A3516AF0242E826772DA43A5EAC3DF3/102839.png",
  			"duration": 0,
  			"status": "Chilled",
  			"description": "Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png",
  			"duration": 0,
  			"status": "Crippled",
  			"description": "Movement speed decreased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/397A613651BFCA2832B6469CE34735580A2C120E/102844.png",
  			"duration": 0,
  			"status": "Immobile",
  			"description": "Unable to move; stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/F728C60BB5589D550F36CAFAC2ADC75D5FE327D1/1012299.png"
  };

/***/ },
/* 87 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 278,
  	"tier": 1,
  	"name": "Stone Flesh",
  	"description": "Gain toughness while attuned to earth.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Attribute Adjust",
  			"type": "AttributeAdjust",
  			"icon": "https://render.guildwars2.com/file/E1E7C4D3A6E62F3D5C9F627CE8175BFB0C614CBE/156652.png",
  			"value": 150,
  			"target": "Toughness"
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/9FACD0F31DF1DF1957C59DA67ED9F76ACB55BEB8/1012303.png"
  };

/***/ },
/* 88 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 279,
  	"tier": 2,
  	"name": "Earthen Blast",
  	"description": "Damage foes and cripple them for 3 seconds when attuning to earth.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Damage",
  			"type": "Damage",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"hit_count": 1
  		},
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/070325E519C178D502A8160523766070D30C0C19/102838.png",
  			"duration": 3,
  			"status": "Crippled",
  			"description": "Movement speed decreased by 50%; stacks duration.",
  			"apply_count": 1
  		},
  		{
  			"text": "Number of Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 3
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 240
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/2531DCAFAEAB452C90C4572E1ADCE8236DCF5636/1012304.png"
  };

/***/ },
/* 89 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 280,
  	"tier": 3,
  	"name": "Geomancer's Defense",
  	"description": "You take less damage from foes within close range.",
  	"slot": "Minor",
  	"facts": [
  		{
  			"text": "Damage Reduced",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png",
  			"percent": 10
  		},
  		{
  			"text": "Range Threshold",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 360
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/257409CA020B07357A19A7F02330302BF54E229C/1012305.png"
  };

/***/ },
/* 90 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 281,
  	"tier": 2,
  	"name": "Rock Solid",
  	"description": "Grant stability to nearby allies when attuning to earth.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/3D3A1C2D6D791C05179AB871902D28782C65C244/415959.png",
  			"duration": 2,
  			"status": "Stability",
  			"description": "Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared, or taunted.",
  			"apply_count": 1
  		},
  		{
  			"text": "Number of Targets",
  			"type": "Number",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"value": 5
  		},
  		{
  			"text": "Radius",
  			"type": "Distance",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"distance": 240
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/4D23C1FE504D402ABF3E80F30FE396A9FA55A63E/1012298.png"
  };

/***/ },
/* 91 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 282,
  	"tier": 1,
  	"name": "Earth's Embrace",
  	"description": "Gain Armor of Earth when your health drops below the threshold.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Health Threshold",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png",
  			"percent": 50
  		}
  	],
  	"skills": [
  		{
  			"name": "Armor of Earth",
  			"facts": [
  				{
  					"text": "Recharge",
  					"type": "Recharge",
  					"value": 75
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  					"duration": 6,
  					"status": "Protection",
  					"description": "Incoming damage decreased; stacks duration.",
  					"apply_count": 1
  				},
  				{
  					"text": "Apply Buff/Condition",
  					"type": "Buff",
  					"icon": "https://render.guildwars2.com/file/3D3A1C2D6D791C05179AB871902D28782C65C244/415959.png",
  					"duration": 6,
  					"status": "Stability",
  					"description": "Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared, or taunted.",
  					"apply_count": 10
  				},
  				{
  					"text": "Duration",
  					"type": "Time",
  					"icon": "https://render.guildwars2.com/file/7B2193ACCF77E56C13E608191B082D68AA0FAA71/156659.png",
  					"duration": 6
  				}
  			],
  			"description": "Cantrip. Protect yourself with earth armor and gain protection and stability.",
  			"categories": [
  				"Cantrip"
  			],
  			"icon": "https://render.guildwars2.com/file/C4FF5D0F0942BC27D7277CC9CB64280F451B16C5/103070.png",
  			"id": 5777,
  			"chat_link": "[&B5EWAAA=]"
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/94B6E0582A0CC93604F12220F703C5D22C59097A/1012294.png"
  };

/***/ },
/* 92 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 287,
  	"tier": 3,
  	"name": "Written in Stone",
  	"description": "Maintain the passive effects of signets when you activate them. Reduces recharge of signets.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Recharge Reduced",
  			"type": "Percent",
  			"icon": "https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png",
  			"percent": 20
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/5160CCF906702A4478C533EF5DA6BD02956E9378/1012301.png"
  };

/***/ },
/* 93 */
/***/ function(module, exports) {

  module.exports = {
  	"id": 289,
  	"tier": 1,
  	"name": "Elemental Shielding",
  	"description": "Grant protection when applying an aura to yourself or an ally.",
  	"slot": "Major",
  	"facts": [
  		{
  			"text": "Apply Buff/Condition",
  			"type": "Buff",
  			"icon": "https://render.guildwars2.com/file/CD77D1FAB7B270223538A8F8ECDA1CFB044D65F4/102834.png",
  			"duration": 3,
  			"status": "Protection",
  			"description": "Incoming damage decreased; stacks duration.",
  			"apply_count": 1
  		}
  	],
  	"specialization": 26,
  	"icon": "https://render.guildwars2.com/file/9EA9E5B50D71ACE02E1413073901CD2B152E559C/1012296.png"
  };

/***/ },
/* 94 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/object-without-properties");

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 98 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 99 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 100 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 101 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 102 */
/***/ function(module, exports) {

  module.exports = require("react-popover");

/***/ }
/******/ ]);