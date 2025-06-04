"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowWarningNotification = exports.ShowSuccessNotification = exports.ShowInfoNotification = exports.ShowErrorNotification = void 0;
var _reactToastify = require("react-toastify");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["title", "subTitle", "position", "autoClose", "hideProgressBar", "closeOnClick", "pauseOnHover", "draggable", "progress", "theme"],
  _excluded2 = ["title", "subTitle", "position", "autoClose", "hideProgressBar", "closeOnClick", "pauseOnHover", "draggable", "progress", "theme"],
  _excluded3 = ["title", "subTitle", "position", "autoClose", "hideProgressBar", "closeOnClick", "pauseOnHover", "draggable", "progress", "theme"],
  _excluded4 = ["title", "subTitle", "position", "autoClose", "hideProgressBar", "closeOnClick", "pauseOnHover", "draggable", "progress", "theme"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var ShowSuccessNotification = exports.ShowSuccessNotification = function ShowSuccessNotification(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Success" : _ref$title,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? "" : _ref$subTitle,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "top-right" : _ref$position,
    _ref$autoClose = _ref.autoClose,
    autoClose = _ref$autoClose === void 0 ? 1500 : _ref$autoClose,
    _ref$hideProgressBar = _ref.hideProgressBar,
    hideProgressBar = _ref$hideProgressBar === void 0 ? false : _ref$hideProgressBar,
    _ref$closeOnClick = _ref.closeOnClick,
    closeOnClick = _ref$closeOnClick === void 0 ? true : _ref$closeOnClick,
    _ref$pauseOnHover = _ref.pauseOnHover,
    pauseOnHover = _ref$pauseOnHover === void 0 ? true : _ref$pauseOnHover,
    _ref$draggable = _ref.draggable,
    draggable = _ref$draggable === void 0 ? true : _ref$draggable,
    progress = _ref.progress,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? "light" : _ref$theme,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var Msg = function Msg() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h6", {
        className: "fw-bold",
        children: [" ", title]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [" ", subTitle, " "]
      })]
    });
  };
  return _reactToastify.toast.success(/*#__PURE__*/(0, _jsxRuntime.jsx)(Msg, {}), _objectSpread({
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme
  }, restProps));
};
var ShowErrorNotification = exports.ShowErrorNotification = function ShowErrorNotification(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? "Error" : _ref2$title,
    _ref2$subTitle = _ref2.subTitle,
    subTitle = _ref2$subTitle === void 0 ? "" : _ref2$subTitle,
    _ref2$position = _ref2.position,
    position = _ref2$position === void 0 ? "top-right" : _ref2$position,
    _ref2$autoClose = _ref2.autoClose,
    autoClose = _ref2$autoClose === void 0 ? 5000 : _ref2$autoClose,
    _ref2$hideProgressBar = _ref2.hideProgressBar,
    hideProgressBar = _ref2$hideProgressBar === void 0 ? false : _ref2$hideProgressBar,
    _ref2$closeOnClick = _ref2.closeOnClick,
    closeOnClick = _ref2$closeOnClick === void 0 ? true : _ref2$closeOnClick,
    _ref2$pauseOnHover = _ref2.pauseOnHover,
    pauseOnHover = _ref2$pauseOnHover === void 0 ? true : _ref2$pauseOnHover,
    _ref2$draggable = _ref2.draggable,
    draggable = _ref2$draggable === void 0 ? true : _ref2$draggable,
    progress = _ref2.progress,
    _ref2$theme = _ref2.theme,
    theme = _ref2$theme === void 0 ? "light" : _ref2$theme,
    restProps = _objectWithoutProperties(_ref2, _excluded2);
  var Msg = function Msg() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h6", {
        className: "fw-bold",
        children: [" ", title]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [" ", subTitle, " "]
      })]
    });
  };
  return _reactToastify.toast.error(/*#__PURE__*/(0, _jsxRuntime.jsx)(Msg, {}), _objectSpread({
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme
  }, restProps));
};
var ShowWarningNotification = exports.ShowWarningNotification = function ShowWarningNotification(_ref3) {
  var _ref3$title = _ref3.title,
    title = _ref3$title === void 0 ? "Warning" : _ref3$title,
    _ref3$subTitle = _ref3.subTitle,
    subTitle = _ref3$subTitle === void 0 ? "" : _ref3$subTitle,
    _ref3$position = _ref3.position,
    position = _ref3$position === void 0 ? "top-right" : _ref3$position,
    _ref3$autoClose = _ref3.autoClose,
    autoClose = _ref3$autoClose === void 0 ? 5000 : _ref3$autoClose,
    _ref3$hideProgressBar = _ref3.hideProgressBar,
    hideProgressBar = _ref3$hideProgressBar === void 0 ? false : _ref3$hideProgressBar,
    _ref3$closeOnClick = _ref3.closeOnClick,
    closeOnClick = _ref3$closeOnClick === void 0 ? true : _ref3$closeOnClick,
    _ref3$pauseOnHover = _ref3.pauseOnHover,
    pauseOnHover = _ref3$pauseOnHover === void 0 ? true : _ref3$pauseOnHover,
    _ref3$draggable = _ref3.draggable,
    draggable = _ref3$draggable === void 0 ? true : _ref3$draggable,
    progress = _ref3.progress,
    _ref3$theme = _ref3.theme,
    theme = _ref3$theme === void 0 ? "light" : _ref3$theme,
    restProps = _objectWithoutProperties(_ref3, _excluded3);
  var Msg = function Msg() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h6", {
        className: "fw-bold",
        children: [" ", title]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [" ", subTitle, " "]
      })]
    });
  };
  return _reactToastify.toast.warning(/*#__PURE__*/(0, _jsxRuntime.jsx)(Msg, {}), _objectSpread({
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme
  }, restProps));
};
var ShowInfoNotification = exports.ShowInfoNotification = function ShowInfoNotification(_ref4) {
  var _ref4$title = _ref4.title,
    title = _ref4$title === void 0 ? "Info" : _ref4$title,
    _ref4$subTitle = _ref4.subTitle,
    subTitle = _ref4$subTitle === void 0 ? "" : _ref4$subTitle,
    _ref4$position = _ref4.position,
    position = _ref4$position === void 0 ? "top-right" : _ref4$position,
    _ref4$autoClose = _ref4.autoClose,
    autoClose = _ref4$autoClose === void 0 ? 5000 : _ref4$autoClose,
    _ref4$hideProgressBar = _ref4.hideProgressBar,
    hideProgressBar = _ref4$hideProgressBar === void 0 ? false : _ref4$hideProgressBar,
    _ref4$closeOnClick = _ref4.closeOnClick,
    closeOnClick = _ref4$closeOnClick === void 0 ? true : _ref4$closeOnClick,
    _ref4$pauseOnHover = _ref4.pauseOnHover,
    pauseOnHover = _ref4$pauseOnHover === void 0 ? true : _ref4$pauseOnHover,
    _ref4$draggable = _ref4.draggable,
    draggable = _ref4$draggable === void 0 ? true : _ref4$draggable,
    progress = _ref4.progress,
    _ref4$theme = _ref4.theme,
    theme = _ref4$theme === void 0 ? "light" : _ref4$theme,
    restProps = _objectWithoutProperties(_ref4, _excluded4);
  var Msg = function Msg() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h6", {
        className: "fw-bold",
        children: [" ", title]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [" ", subTitle, " "]
      })]
    });
  };
  return _reactToastify.toast.info(/*#__PURE__*/(0, _jsxRuntime.jsx)(Msg, {}), _objectSpread({
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress,
    theme: theme
  }, restProps));
};