import React, { Component } from 'react';
import Buy from './Buy';
import Bought from './Bought';


class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
      bought: [],
    }

    this.addNote = this.addNote.bind(this);
    this.updateNoteText = this.updateNoteText.bind(this);
  }

  handleClickItem = note => {
    this.setState({ bought: this.state.bought.concat(note), notes: this.state.notes.filter( n => n !== note)});
}
   
updateNoteText(noteText) {
      this.setState({ noteText: noteText.target.value })
}

addNote() {
    if (this.state.noteText === '') {return}
      const notesFoundInToBuy = this.state.notes.filter( note => note.toLowerCase() === this.state.noteText.toLowerCase() );
      const notesFoundInBought = this.state.bought.filter( note => note.toLowerCase() === this.state.noteText.toLowerCase())
  
    if ( notesFoundInToBuy.length > 0 || notesFoundInBought.length > 0) {
      return;
  }
      this.setState({ noteText: '', notes: this.state.notes.concat(this.state.noteText) });
  }

  deleteNote(index) {
        let notesArr = this.state.notes;
        notesArr.splice(index, 1);
        this.setState({ notes: notesArr })
  }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        this.setState({ noteText: e.target.value }, () => {
        this.addNote();    
      })
    }
  }
  render() {
    return (
      <div>
        <Buy notes={this.state.notes} noteText={this.state.noteText}
          addNote={this.addNote} handleClickItem={this.handleClickItem} deleteNote={this.deleteNote} handleKeyPress={this.handleKeyPress} updateNoteText={this.updateNoteText}/>
        <Bought bought={this.state.bought}/>
      </div>
    )
  }
}

export default ListItems;