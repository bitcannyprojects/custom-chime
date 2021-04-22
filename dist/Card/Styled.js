"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCard = exports.SmallText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SmallText = _styledComponents.default.small(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.5);\n"])));

exports.SmallText = SmallText;

var StyledCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  .ch-body {\n    margin-bottom: 1rem;\n  }\n\n  .ch-header {\n    font-size: 1.5rem;\n  }\n\n  .ch-title {\n    font-size: 1.25rem;\n    margin-top: 1rem;\n  }\n\n  .ch-description {\n    margin: 1rem 0 1rem 0;\n  }\n"])));

exports.StyledCard = StyledCard;