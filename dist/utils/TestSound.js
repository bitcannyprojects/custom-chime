import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import { DefaultAudioMixController, TimeoutScheduler } from "amazon-chime-sdk-js";

var TestSound = function TestSound(sinkId) {
  var frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 440;
  var durationSec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var rampSec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
  var maxGainValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.1;

  _classCallCheck(this, TestSound);

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
  var audioMixController = new DefaultAudioMixController();

  var handlingBindingAsynchronous = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  new TimeoutScheduler((rampSec * 2 + durationSec + 1) * 1000).start(function () {
    audioContext.close();
  });
};

export default TestSound;