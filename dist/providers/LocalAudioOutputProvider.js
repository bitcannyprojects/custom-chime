"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalAudioOutput = exports.LocalAudioOutputProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AudioVideoProvider = require("./AudioVideoProvider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Context = /*#__PURE__*/(0, _react.createContext)(null);

var LocalAudioOutputProvider = function LocalAudioOutputProvider(_ref) {
  var children = _ref.children;
  var audioVideo = (0, _AudioVideoProvider.useAudioVideo)();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isAudioOn = _useState2[0],
      setIsAudioOn = _useState2[1];

  var audioRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!audioVideo) {
      return;
    }

    if (audioRef.current) {
      (function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(element) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return audioVideo.bindAudioElement(element);

                case 3:
                  _context.next = 8;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context["catch"](0);
                  console.error("Failed to bind audio element.", _context.t0);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 5]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      })()(audioRef.current);
    }

    return function () {
      audioVideo.unbindAudioElement();
      setIsAudioOn(true);
    };
  }, [audioVideo]);
  var toggleAudio = (0, _react.useCallback)(function () {
    if (!audioRef.current) {
      return;
    }

    setIsAudioOn(!isAudioOn);

    if (isAudioOn) {
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.unbindAudioElement();
    } else {
      (function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(element) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.bindAudioElement(element);

                case 3:
                  _context2.next = 8;
                  break;

                case 5:
                  _context2.prev = 5;
                  _context2.t0 = _context2["catch"](0);
                  console.error("Failed to bind audio element.", _context2.t0);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 5]]);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      })()(audioRef.current);
    }
  }, [audioRef, audioVideo, isAudioOn]);
  var value = (0, _react.useMemo)(function () {
    return {
      isAudioOn: isAudioOn,
      toggleAudio: toggleAudio
    };
  }, [isAudioOn, toggleAudio]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: value
  }, children, /*#__PURE__*/_react.default.createElement("audio", {
    ref: audioRef,
    style: {
      display: "none"
    }
  }));
};

exports.LocalAudioOutputProvider = LocalAudioOutputProvider;

var useLocalAudioOutput = function useLocalAudioOutput() {
  var context = (0, _react.useContext)(Context);

  if (!context) {
    throw new Error("useLocalAudioOutput must be used within LocalAudioOutputProvider");
  }

  return context;
};

exports.useLocalAudioOutput = useLocalAudioOutput;