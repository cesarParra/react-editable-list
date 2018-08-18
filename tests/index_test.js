import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import EditableList from 'src/';
import ListItem from 'src/ListItem';

describe('<EditableList />', () => {
  it('renders an editable list', () => {
    const editableList = mount(<EditableList title="Demo" items={['test1', 'test2']} itemPlaceholder="+" />);
    expect(editableList.find(ListItem)).to.have.length(3);
  });
});