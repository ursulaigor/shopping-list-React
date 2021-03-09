import React from 'react';
import './ShoppingList.css';


class ShoppingList extends React.Component {
  state = {
    inputValue: "",
    list : []
  }
  
  updateInputValue(ev){
    this.setState({
      inputValue: ev.target.value
    })
  }
  
  addItem(ev){
      if (this.state.inputValue===""){
          return;
      }
    this.setState({
        list: this.state.list.concat([this.state.inputValue]),
        inputValue : ""
    })
  }

  removeItem(index){
    this.state.list.splice(index,1);  
    this.setState({
        list: this.state.list
    })
  }

  handleKeyDown(ev){
    if (ev.key === 'Enter') {
        this.addItem(ev);
    }
  }

  render() {
    return (
      <div>
        <div class="shopping-add">
            <div>
            <input autoFocus value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} type="text" placeholder="Add an item"/>
            <button onClick={this.addItem.bind(this)} >Add to Shopping list</button>
            </div>
        </div>
        <div class="shopping-list">
            <ul>
            {this.state.list.map(function(item, index){
                return <li >{item} <button onClick={function(){ this.removeItem(index)}.bind(this) }>Delete</button></li>;
            }.bind(this))}
            </ul>
        </div>
      </div>
    );  
  }
}

export default ShoppingList;
