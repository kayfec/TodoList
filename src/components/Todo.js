import React from 'react';
import {TodoItem} from './TodoItem';

export class Todo extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = {
        items: [],
        value: '',
      };
     }
  
    add(e) {
      this.setState(prevState => {
        prevState.items.push({
          id: new Date().getTime(),
          text: this.state.value
        });

        return {
          items: prevState.items,
          value: ''
        };
      });
    }
      
    handleChange(event) {
      this.setState({value: event.target.value});
    }


    handleRemove(index) {
      this.setState(prevState => {
        prevState.items.splice(index, 1);

        return {
          items: prevState.items,
          value: ''
        };
      });
    }
    
    render() { 
      // const todoItems = []; // 2 длинный вариант
      // for (let x in this.state.items) {
      //   todoItems.push(<TodoItem key={this.state.items[x].id} item={this.state.items[x]} />);
      // }

      const todoItems = this.state.items.map((item, index) => (
        <TodoItem key={item.id} item={item} removeClick={() => this.handleRemove(index)} />
      ));

      return (
        <div>
          <h2>Todo List</h2>
          <div>Что надо зделать?</div>
          <div>
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </div>
          <button onClick={this.add.bind(this)}>Добавить</button>
          <div>Заметки:</div>
          {todoItems}
        </div>
      );
    }
      
}