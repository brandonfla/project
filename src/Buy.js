import React, { Component } from 'react';

class Buy extends Component {

  render() {
    return (
      <div className="buyList">

      
        <div className="buyBox">
            <p>To Buy:</p>       
            <input type="text"
            ref={(input) => {this.textInput = input}} value={this.props.noteText} 
            onChange={noteText => this.props.updateNoteText(noteText)}
            onKeyPress={this.props.handleKeyPress}
        />
          <button onClick={this.props.addNote}>Add</button>
                <ul>
                    {this.props.notes.map( note => (
                        <li onClick={ () => this.props.handleClickItem(note)}>{note}</li>
                    ))}
                </ul>
        </div>
        </div>
    );
  }
}

export default Buy;
