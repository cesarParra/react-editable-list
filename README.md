# react-editable-list

[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React component for an editable list.

[npm-badge]: https://badge.fury.io/js/react-editable-list-component.svg
[npm]: https://www.npmjs.org/package/react-editable-list-component

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

[npm package](https://www.npmjs.com/package/react-editable-list-component)

React component that allows you to create editable lists in the style of TODO lists.

## Installation

`$ npm i --save react-editable-list-component`

## Usage

You can use the component like this:

    <EditableList 
		title="Demo" 
		itemPlaceholder="+" />

The title prop allows you to specify the title your list will have and the itemPlaceholder allows you to specify the character you want for the placeholder of a blank line in the list.

### Load default items
You can also specify a list of items you want the component to load with:

    <EditableList 
		title="Demo" 
		itemPlaceholder="+"
		items={['test1', 'test2']} />

### Subscribe to changes in the list

You can use the onChange prop to pass a function to get the always up to date data from the list:

    <EditableList onChange={this.onChange.bind(this)} title="Demo" items={['test1', 'test2']} itemPlaceholder="+" />

An object representing the latest information will be passed every time the items in the list or the title changes:
 
    onChange(latestInfo) {
        // { listItems: [{id: "4440a6bc-cceb-4906-9538-2b01a3059a01", text: "Test1"}
        //              {id: "26a42e91-95f9-4e35-bf7f-b2511338766d", text: "Test2"}]
        // title: "Demo" }
        console.log('Latest information in the component', latestInfo);
    }