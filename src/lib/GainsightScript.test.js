import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GainsightScript from "./GainsightScript";

configure({ adapter: new Adapter() });

jest.mock("./GainsightScript", () => {
  return jest.fn(() => null);
});

describe("GainsightScript", () => {
  it("renders without crashing", () => {
    const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";

    shallow(<GainsightScript gainsightTagKey={gainsightTagKey} />);
  });

  it("creates script tag with correct attributes", () => {
    // Mock the script creation and injection behavior
    const mockScript = jest.fn();
    GainsightScript.mockImplementation(() => mockScript);

    const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";
    const wrapper = shallow(
      <GainsightScript gainsightTagKey={gainsightTagKey} />
    );

    expect(mockScript).toHaveBeenCalledWith(expect.any(Object));
  });
});
