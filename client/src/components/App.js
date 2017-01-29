import React, { Component } from 'react';
import AddForm from './AddForm'
import CharacterList from './CharacterList'

class App extends Component {
  render() {
    return (
      <div>
        <AddForm store={this.props.store} />
        <CharacterList store={this.props.store} />
      </div>
    );
  }
}

export default App