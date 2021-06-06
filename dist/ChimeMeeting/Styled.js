"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledContent = exports.StyledLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLayout = _styledComponents.default.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100%;\n\n  display: grid;\n\n  .video-content {\n    grid-area: content;\n  }\n  .fullscreen {\n    height: 100%;\n  }\n\n  ", "\n\n  .nav {\n    grid-area: nav;\n  }\n\n  .roster {\n    grid-area: roster;\n    z-index: 2;\n  }\n\n  @media screen and (min-width: 769px) {\n    .mobile-toggle {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"content\";\n\n    .nav {\n      grid-area: unset;\n      position: fixed;\n    }\n\n    .roster {\n      grid-area: unset;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      max-width: 320px;\n    }\n  }\n\n  @media screen and (max-width: 460px) {\n    .roster {\n      max-width: 100%;\n    }\n  }\n"])), function (_ref) {
  var showNav = _ref.showNav,
      showRoster = _ref.showRoster;

  if (showNav && showRoster) {
    return "\n        grid-template-columns: auto auto 1fr;\n        grid-template-areas: 'nav roster content';\n      ";
  }

  if (showNav) {
    return "\n        grid-template-columns: auto 1fr;\n        grid-template-areas: 'nav content';\n      ";
  }

  if (showRoster) {
    return "\n        grid-template-columns: auto 1fr;\n        grid-template-areas: 'roster content';\n      ";
  }

  return "\n      grid-template-columns: 1fr;\n      grid-template-areas: 'content';\n    ";
});

exports.StyledLayout = StyledLayout;

var StyledContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  grid-area: content;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  .fullscreen {\n    height: 100%;\n  }\n  .videos {\n    flex: 1;\n  }\n\n  .controls {\n    position: absolute;\n    bottom: 1rem;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  @media screen and (max-width: 768px) {\n    .controls {\n      position: static;\n      transform: unset;\n    }\n  }\n"])));

exports.StyledContent = StyledContent;