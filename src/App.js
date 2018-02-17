import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
	/*this should be added in deployement<BrowserRouter basename = "/my-app">*/
	<BrowserRouter>
      <div className="App">
        <Blog />
      </div>
	</BrowserRouter>
    );
  }
}

export default App;
