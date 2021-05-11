"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recorder = void 0;

var _ffmpeg = require("@ffmpeg/ffmpeg");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Recorder = function Recorder() {
  var _this = this;

  _classCallCheck(this, Recorder);

  _defineProperty(this, "isRecording", false);

  _defineProperty(this, "chunks", []);

  _defineProperty(this, "recorder", null);

  _defineProperty(this, "FFmpeg", (0, _ffmpeg.createFFmpeg)({
    log: true
  }));

  _defineProperty(this, "startRecording", function (stream) {
    var _this$recorder;

    console.log("[Recorder] recorder start!!!!!!!!!!!!!!!!!");
    var options = {
      mimeType: "video/webm;codecs=h264,opus"
    };
    _this.chunks = [];
    _this.recorder = new MediaRecorder(stream, options);

    _this.recorder.ondataavailable = function (e) {
      var _this$chunks;

      (_this$chunks = _this.chunks) === null || _this$chunks === void 0 ? void 0 : _this$chunks.push(e.data);
    };

    (_this$recorder = _this.recorder) === null || _this$recorder === void 0 ? void 0 : _this$recorder.start(1000);
    _this.isRecording = true;
  });

  _defineProperty(this, "stopRecording", function () {
    var _this$recorder2;

    console.log("[Recorder] recorder stop!!!!!!!!!!!!!!!!!");
    (_this$recorder2 = _this.recorder) === null || _this$recorder2 === void 0 ? void 0 : _this$recorder2.stop();
    _this.isRecording = false;
  });

  _defineProperty(this, "toMp4", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _this$ffmpeg, _this$ffmpeg4, _this$ffmpeg5;

    var name, outName, a, _this$ffmpeg2, _this$ffmpeg3, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("[Recorder] recorder mp4!!!!!!!!!!!!!!!!!");
            name = "record.webm";
            outName = "out.mp4";
            a = document.createElement("a");
            a.download = outName;

            if (!(((_this$ffmpeg = _this.ffmpeg) === null || _this$ffmpeg === void 0 ? void 0 : _this$ffmpeg.isLoaded()) === false)) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return (_this$ffmpeg2 = _this.ffmpeg) === null || _this$ffmpeg2 === void 0 ? void 0 : _this$ffmpeg2.load();

          case 8:
            (_this$ffmpeg3 = _this.ffmpeg) === null || _this$ffmpeg3 === void 0 ? void 0 : _this$ffmpeg3.setProgress(function (_ref2) {
              var ratio = _ref2.ratio;
              console.log("progress:", ratio);
            });

          case 9:
            _context.t0 = _this.ffmpeg;
            _context.t1 = name;
            _context.next = 13;
            return (0, _ffmpeg.fetchFile)(new Blob(_this.chunks));

          case 13:
            _context.t2 = _context.sent;

            _context.t0.FS.call(_context.t0, "writeFile", _context.t1, _context.t2);

            console.log("FFMPEG START!");
            _context.next = 18;
            return (_this$ffmpeg4 = _this.ffmpeg) === null || _this$ffmpeg4 === void 0 ? void 0 : _this$ffmpeg4.run("-i", name, "-c", "copy", outName);

          case 18:
            data = (_this$ffmpeg5 = _this.ffmpeg) === null || _this$ffmpeg5 === void 0 ? void 0 : _this$ffmpeg5.FS("readFile", outName);
            a.href = URL.createObjectURL(new Blob([data.buffer], {
              type: "video/mp4"
            }));
            a.click();
            console.log("FFMPEG DONE!");

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};

exports.Recorder = Recorder;