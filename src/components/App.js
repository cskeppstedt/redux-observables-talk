import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <h1>
        {this.props.text}
      </h1>
    );
  }
}

export default App;
