"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./style.scss");
var _images = require("../../assets/images");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "changeAccordianResponse"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var TlAccordian = function TlAccordian(_ref) {
  var children = _ref.children,
    changeAccordianResponse = _ref.changeAccordianResponse,
    props = _objectWithoutProperties(_ref, _excluded);
  var contentEl = (0, _react.useRef)();
  var handleToggle = props.handleToggle,
    active = props.active,
    data = props.data,
    noborder = props.noborder;
  var label = data.label,
    subLabel = data.subLabel,
    id = data.id;
  var _useState = (0, _react.useState)("0px"),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1]; // State to track height dynamically

  (0, _react.useEffect)(function () {
    if (contentEl.current) {
      if (active === id) {
        contentEl.current.style.height = "auto"; // Set to auto to get natural height
        var newHeight = contentEl.current.scrollHeight + "px";
        setHeight(newHeight); // Update state with new height
      } else {
        setHeight("0px"); // Collapse when inactive
      }
    }
  }, [active, id, children, changeAccordianResponse]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames["default"])({
      'accordion__card': true,
      'no-border': noborder
    }),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "accordion__header ".concat(active === id ? 'active' : ''),
      onClick: function onClick() {
        return handleToggle(id);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "accordion__toggle ".concat(active === id ? 'active' : ''),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
            className: "accordion__title",
            children: label
          }), subLabel && active === id ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "accordion__sub-title",
            children: subLabel
          }) : active === id && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {})]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _images.DownArrow,
          alt: "Arrow"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: contentEl,
      className: "accordion__collapse ".concat(active === id ? 'show' : ''),
      style: {
        height: active === id ? height : "0px",
        overflow: "hidden"
        // transition: "height 0.3s ease-in-out",
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "accordion__body",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "accordion__content",
          children: children
        })
      })
    })]
  });
};
var _default = exports["default"] = TlAccordian;