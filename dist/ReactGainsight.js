"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactGainsight = void 0;
var _react = require("react");
var _warn = _interopRequireDefault(require("./utils/warn"));
var _info = _interopRequireDefault(require("./utils/info"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ReactGainsight = _ref => {
  let {
    gainsightTagKey
  } = _ref;
  const [scriptLoaded, setScriptLoaded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!gainsightTagKey) {
      (0, _warn.default)("TAG KEY IS REQUIRED");
      return;
    }
    if (scriptLoaded) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://web-sdk.aptrinsic.com/api/aptrinsic.js?a=".concat(gainsightTagKey);
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.head.appendChild(script);
    (0, _info.default)("SCRIPT LOADED");
  }, [gainsightTagKey, scriptLoaded]);
  return null;
};
exports.ReactGainsight = ReactGainsight;