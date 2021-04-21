"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _amazonChimeSdkJs = require("amazon-chime-sdk-js");

var TestSound = function TestSound(sinkId) {
  var frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 440;
  var durationSec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var rampSec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
  var maxGainValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.1;
  (0, _classCallCheck2.default)(this, TestSound);
  // @ts-ignore
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();
  var gainNode = audioContext.createGain();
  gainNode.gain.value = 0;
  var oscillatorNode = audioContext.createOscillator();
  oscillatorNode.frequency.value = frequency;
  oscillatorNode.connect(gainNode);
  var destinationStream = audioContext.createMediaStreamDestination();
  gainNode.connect(destinationStream);
  var currentTime = audioContext.currentTime;
  var startTime = currentTime + 0.1;
  gainNode.gain.linearRampToValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(maxGainValue, startTime + rampSec);
  gainNode.gain.linearRampToValueAtTime(maxGainValue, startTime + rampSec + durationSec);
  gainNode.gain.linearRampToValueAtTime(0, startTime + rampSec * 2 + durationSec);
  oscillatorNode.start();
  var audioMixController = new _amazonChimeSdkJs.DefaultAudioMixController();

  var handlingBindingAsynchronous = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!("setSinkId" in HTMLAudioElement.prototype)) {
                _context.next = 9;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return audioMixController.bindAudioDevice({
                deviceId: sinkId
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              console.error("Failed to bind audio device", _context.t0);

            case 9:
              _context.prev = 9;
              _context.next = 12;
              return audioMixController.bindAudioElement(new Audio());

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t1 = _context["catch"](9);
              console.error("Failed to bind audio element", _context.t1);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6], [9, 14]]);
    }));

    return function handlingBindingAsynchronous() {
      return _ref.apply(this, arguments);
    };
  }();

  handlingBindingAsynchronous();
  audioMixController.bindAudioStream(destinationStream.stream);
  new _amazonChimeSdkJs.TimeoutScheduler((rampSec * 2 + durationSec + 1) * 1000).start(function () {
    audioContext.close();
  });
};

var _default = TestSound;
exports.default = _default;