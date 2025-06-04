"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lottieReact = _interopRequireDefault(require("lottie-react"));
var _default_loader = _interopRequireDefault(require("./default_loader.json"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TlLoadingSpinner = function TlLoadingSpinner(_ref) {
  var spinning = _ref.spinning,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size;
  return spinning && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "w-100 p-0 m-0 d-flex loaderOverLay",
    style: {
      position: "fixed",
      overflow: "hidden",
      zIndex: "99999",
      height: "100vh"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_lottieReact["default"], {
      animationData: _default_loader["default"],
      style: {
        width: "30%",
        height: "30%"
      },
      className: "m-auto"
    })
  });
};
var _default = exports["default"] = TlLoadingSpinner;