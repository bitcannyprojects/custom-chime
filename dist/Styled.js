import _taggedTemplateLiteral from "/Users/vivekkumar/Documents/vattend-react/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

import styled from "styled-components";
export var StyledLayout = styled.main(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100%;\n\n  display: grid;\n\n  .video-content {\n    grid-area: content;\n  }\n\n  ", "\n\n  .nav {\n    grid-area: nav;\n  }\n\n  .roster {\n    grid-area: roster;\n    z-index: 2;\n  }\n\n  @media screen and (min-width: 769px) {\n    .mobile-toggle {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    grid-template-areas: \"content\";\n\n    .nav {\n      grid-area: unset;\n      position: fixed;\n    }\n\n    .roster {\n      grid-area: unset;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      max-width: 320px;\n    }\n  }\n\n  @media screen and (max-width: 460px) {\n    .roster {\n      max-width: 100%;\n    }\n  }\n"])), function (_ref) {
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
export var StyledContent = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  grid-area: content;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .videos {\n    flex: 1;\n  }\n\n  .controls {\n    position: absolute;\n    bottom: 1rem;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  @media screen and (max-width: 768px) {\n    .controls {\n      position: static;\n      transform: unset;\n    }\n  }\n"])));
export var StyledList = styled.dl(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n\n  dt {\n    display: inline-block;\n    margin-bottom: 0.75rem;\n    margin-right: 0.5rem;\n\n    &::after {\n      content: \":\";\n    }\n  }\n\n  dd {\n    display: inline-block;\n    font-weight: 600;\n  }\n"])));