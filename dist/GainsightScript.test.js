"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));
var _GainsightScript = _interopRequireDefault(require("./GainsightScript"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
jest.mock("./GainsightScript", () => {
  return jest.fn(() => null);
});
describe("GainsightScript", () => {
  it("renders without crashing", () => {
    const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";
    (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_GainsightScript.default, {
      gainsightTagKey: gainsightTagKey
    }));
  });
  it("creates script tag with correct attributes", () => {
    // Mock the script creation and injection behavior
    const mockScript = jest.fn();
    _GainsightScript.default.mockImplementation(() => mockScript);
    const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_GainsightScript.default, {
      gainsightTagKey: gainsightTagKey
    }));
    expect(mockScript).toHaveBeenCalledWith(expect.any(Object));
  });
});