"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antd = require("antd");
var _icons = require("@ant-design/icons");
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "title", "placement", "open", "onClose", "size", "extra", "width", "spinLoad"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var TlDrawer = function TlDrawer(_ref) {
  var children = _ref.children,
    className = _ref.className,
    title = _ref.title,
    placement = _ref.placement,
    open = _ref.open,
    onClose = _ref.onClose,
    size = _ref.size,
    extra = _ref.extra,
    width = _ref.width,
    _ref$spinLoad = _ref.spinLoad,
    spinLoad = _ref$spinLoad === void 0 ? false : _ref$spinLoad,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Drawer, _objectSpread(_objectSpread({
    title: title,
    closable: false,
    onClose: onClose,
    open: open,
    className: "custom-drawer ".concat(className),
    size: size,
    extra: extra,
    width: width,
    zIndex: 999,
    maskClosable: false
  }, restProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CloseOutlined, {
      className: "close-icon",
      style: {
        color: "var(--text-on-secondary)"
      },
      onClick: onClose
    }), children]
  }));
};
var _default = exports["default"] = TlDrawer;