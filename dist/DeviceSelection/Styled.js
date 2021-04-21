"use strict";

var _interopRequireDefault = require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputGroup = exports.StyledVideoGroup = exports.StyledAudioGroup = exports.StyledWrapper = exports.StyledPreviewGroup = exports.title = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/vivekkumar/Documents/custom-chime/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var title = "\n  text-transform: uppercase;\n  font-size: 1rem !important;\n  margin-bottom: 1.75rem;\n";
exports.title = title;

var StyledPreviewGroup = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 2.5rem;\n"])));

exports.StyledPreviewGroup = StyledPreviewGroup;

var StyledWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 65rem;\n  height: auto;\n  padding: 1rem 0 3rem 0;\n\n  > * {\n    flex-basis: auto;\n  }\n\n  @media (min-width: 900px) {\n    flex-direction: row;\n    padding: 2.5rem 0 6rem 0;\n\n    > * {\n      flex-basis: 50%;\n    }\n\n    @media (max-height: 800px) {\n      padding: 2rem 0 2rem;\n    }\n  }\n"])));

exports.StyledWrapper = StyledWrapper;

var StyledAudioGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 3rem 0 0;\n  border-right: 0.125rem solid #e6e6e6;\n\n  @media (max-width: 900px) {\n    padding: 2rem 0 2rem 0;\n    border-right: unset;\n  }\n"])));

exports.StyledAudioGroup = StyledAudioGroup;

var StyledVideoGroup = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 0 0 3rem;\n\n  @media (max-width: 900px) {\n    padding: 0;\n  }\n"])));

exports.StyledVideoGroup = StyledVideoGroup;

var StyledInputGroup = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 1.5rem;\n"])));

exports.StyledInputGroup = StyledInputGroup;