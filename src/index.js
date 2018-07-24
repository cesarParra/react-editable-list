import React, { Component } from 'react'
import uuid from 'uuid';
import ListItem from './ListItem';

class EditableList extends Component {
    constructor() {
        super();
        this.state = { title: null, listItems: [ { itemContent : null, extraContent: true, id : uuid.v4()} ] };
    }

    componentDidMount() {
        this.setState({ title: this.props.title });
        this.refs.title.textContent = this.props.title;
    }

    render() {
        return (
            <div>
                <h2 contentEditable ref="title" onKeyUp={(event) => this.onTitleChange(event)}></h2>
                <div className="content-container">
                    {this.renderListItems()}
                </div>
            </div>
        );
    }

    renderListItems() {
        return this.state.listItems.map(
            (listItem) => {
                return(
                <ListItem key={listItem.id} item={listItem}
                    onKeyUp={this.onListItemKeyPress.bind(this)} 
                    onRemove={this.onRemove.bind(this)} onPaste={this.onPaste.bind(this)} 
                    placeholder={this.props.itemPlaceholder} ref={listItem.id} />);}
        );
    }

    onTitleChange(event) {
        this.setState({title: this.refs.title.textContent}, () => this.onChange());
    }

    onListItemKeyPress(event, listItemId, content) {
        let listItemsTemp = Array.from(this.state.listItems);
        let index = listItemsTemp.findIndex(item => item.id === listItemId);
        let currentItem = listItemsTemp[index];
        currentItem.itemContent = content;
        currentItem.extraContent = content ? false : currentItem.extraContent;
        this.setState({listItems: listItemsTemp}, () => {
            if (!content) {
                this.onChange();
            }
        });

        if (content) {
            this.ensureExtraContent();
        }
        
        if (event.keyCode === 13) {
            if (!content) {
                // If no content was added then we don't want to create a new list item
                return;
            }

            // Finding the next sibling by looking at the next list item in the list
            // and getting its Id.
            let nextId = listItemsTemp[index + 1].id;
            this.refs[nextId].focus();
        }
    }

    onRemove(listItemId) {
        let updatedItems = this.state.listItems.filter((item) => item.id !== listItemId);
        this.setState({ listItems: updatedItems }, () => {
            this.ensureExtraContent();
        });
    }

    onPaste(listItemId, linesAdded) {
        let listItemsTemp = Array.from(this.state.listItems);
        let index = listItemsTemp.findIndex(item => item.id === listItemId) + 1;
        for (var i = 0; i < linesAdded.length; i++) {
            listItemsTemp.splice(index + 1, 0, {itemContent: linesAdded[i], id: uuid.v4()});
        }

        this.setState({ listItems: listItemsTemp }, () => {
            this.ensureExtraContent();
        });
    }

    ensureExtraContent(callback = this.onChange.bind(this)) {
        let hasExtraContent = false;
        this.state.listItems.forEach((currentItem) => {
            if (currentItem.extraContent) {
                hasExtraContent = true;
                callback();
                return;
            }
        });

        if (!hasExtraContent) {
            let listItemsTemp = Array.from(this.state.listItems);
            listItemsTemp.push({ itemContent: null, extraContent: true, id: uuid.v4() });
            this.setState({ listItems : listItemsTemp}, callback);
        }
    }

    onChange() {
        let editableListContents = {};
        editableListContents.title = this.state.title;
        editableListContents.listItems = this.state.listItems.map((listItem) => {
            return {
                id: listItem.id,
                text: listItem.itemContent
            };
        });

        this.props.onChange(editableListContents);
    }
}

export default EditableList;