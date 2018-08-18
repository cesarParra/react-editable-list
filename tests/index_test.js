import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import EditableList from 'src/';
import ListItem from 'src/ListItem';

describe('<EditableList />', () => {
  it('allows us to set the title', () => {
    const editableList = mount(<EditableList title="Test" />);
    expect(editableList.props().title).to.equal('Test');
    editableList.setProps({ title: 'Different Title' });
    expect(editableList.props().title).to.equal('Different Title');
  });

  it('renders one item when no items are passed', () => {
    const editableList = mount(<EditableList title="Test" itemPlaceholder="+" />);
    expect(editableList.find(ListItem)).to.have.length(1);
  });

  it('renders correct number of list items when items are passed', () => {
    const editableList = mount(<EditableList title="Test" items={['test1', 'test2']} itemPlaceholder="+" />);
    expect(editableList.find(ListItem)).to.have.length(3);
  });
});