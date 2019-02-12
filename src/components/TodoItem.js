import React from 'react';

export class TodoItem extends React.Component {
    render() {  
        return (
            <div>
                <input type="checkbox" /> * {this.props.item.text} 
                <button onClick={this.props.removeClick}>Удалить</button>
            </div>
        );
    }
}  
