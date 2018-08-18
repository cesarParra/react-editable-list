import React from 'react';
import { shallow } from 'enzyme';

import EditableList from 'src/';
import ListItem from 'src/ListItem';

describe('<EditableList />', () => {
  it('renders an editable list', () => {
    const editableList = shallow(<EditableList title="Demo" items={['test1', 'test2']} itemPlaceholder="+" />);
    expect(editableList.find(ListItem)).to.have.length(3);
  });
});