import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="AUTH" showMenuIconButton={false} />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
