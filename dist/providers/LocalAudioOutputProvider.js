import _regeneratorRuntime from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef, createContext, useMemo, useCallback, useContext } from "react";
import { useAudioVideo } from "./AudioVideoProvider";
var Context = createContext(null);

var LocalAudioOutputProvider = function LocalAudioOutputProvider(_ref) {
  var children = _ref.children;
  var audioVideo = useAudioVideo();

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isAudioOn = _useState2[0],
      setIsAudioOn = _useState2[1];

  var audioRef = useRef(null);
  useEffect(function () {
    if (!audioVideo) {
      return;
    }

    if (audioRef.current) {
      (function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(element) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  var toggleAudio = useCallback(function () {
    if (!audioRef.current) {
      return;
    }

    setIsAudioOn(!isAudioOn);

    if (isAudioOn) {
      audioVideo === null || audioVideo === void 0 ? void 0 : audioVideo.unbindAudioElement();
    } else {
      (function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(element) {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  var value = useMemo(function () {
    return {
      isAudioOn: isAudioOn,
      toggleAudio: toggleAudio
    };
  }, [isAudioOn, toggleAudio]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: value
  }, children, /*#__PURE__*/React.createElement("audio", {
    ref: audioRef,
    style: {
      display: "none"
    }
  }));
};

var useLocalAudioOutput = function useLocalAudioOutput() {
  var context = useContext(Context);

  if (!context) {
    throw new Error("useLocalAudioOutput must be used within LocalAudioOutputProvider");
  }

  return context;
};

export { LocalAudioOutputProvider, useLocalAudioOutput };