import React from 'react';

class Bought extends React.Component {
 render() {
    return (
      <div className="boughtList">         
      <p>Bought:</p>
        <div>
          <ul>
          {this.props.bought.map( note => (
            <li onClick={ () => this.props.handleClickItem(note)}>{note}</li>
        ))}
          </ul>
        </div>
  </div>
    );
  }
}

export default Bought;
