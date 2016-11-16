'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cubbie = require('cubbie');

var _cubbie2 = _interopRequireDefault(_cubbie);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ScriptButton = require('./ScriptButton');

var _ScriptButton2 = _interopRequireDefault(_ScriptButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function secondaryScriptMapHandler(script, i) {
  if (_lodash2.default.isArray(script)) {
    return _react2.default.createElement(
      'div',
      { className: 'group', key: "group-" + i },
      script.map(secondaryScriptMapHandler)
    );
  } else {
    var isSilent = _cubbie2.default.state.silentScripts.some(function (x) {
      return x === script;
    });
    return _react2.default.createElement(_ScriptButton2.default, { key: script, cmdName: script, isSilent: isSilent,
      spinnerImg: _cubbie2.default.state.theme.secondarySpinnerPath });
  }
}

var SecondaryScripts = function (_Component) {
  _inherits(SecondaryScripts, _Component);

  function SecondaryScripts() {
    _classCallCheck(this, SecondaryScripts);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SecondaryScripts).apply(this, arguments));
  }

  _createClass(SecondaryScripts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'secondaryScripts' },
        _cubbie2.default.state.secondaryScripts.map(secondaryScriptMapHandler)
      );
    }
  }]);

  return SecondaryScripts;
}(_react.Component);

exports.default = SecondaryScripts;