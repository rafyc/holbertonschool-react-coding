import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import React from 'react'
import { shallow } from "enzyme";


describe('BodySectionWithMarginBottom', () => {
  let wrapper;
  const props = {
    title: "test title",
    children: React.createElement('p', 'test children node'),
  }

  beforeEach(() => {
    wrapper = shallow(<BodySection {...props} />);
  });

  it('should render BodySection with the props passed correctly to the child component', () => {
    expect(wrapper.containsAllMatchingElements([
      <div className="BodySectionWithMargin">
        <BodySection {...props} />
      </div>
    ]));
  })

})
