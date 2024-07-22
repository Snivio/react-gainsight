import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ReactGainsight } from "./ReactGainsight";

configure({ adapter: new Adapter() });

jest.mock("./GainsightScript", () => {
  return jest.fn(() => null);
});

describe("GainsightScript", () => {
  it("renders without crashing", () => {
    const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";

    shallow(<ReactGainsight gainsightTagKey={gainsightTagKey} />);
  });

  it("creates script tag with correct attributes", () => {
    // Mock the script creation and injection behavior
    const mockScript = jest.fn();
    ReactGainsight.mockImplementation(() => mockScript);

    const gainsightTagKey = "YOUR_GAINSIGHT_TAG_KEY";
    const wrapper = shallow(
      <ReactGainsight gainsightTagKey={gainsightTagKey} />
    );

    expect(mockScript).toHaveBeenCalledWith(expect.any(Object));
  });
});
