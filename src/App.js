import React, { Component } from 'react';
import MoviePage from "./context/MoviePage";
import UserContext from './context/userContext';

class App extends Component {
  state = {currentUser: {name: "Ubaid"} };
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state.currentUser}>
          <div>
            <MoviePage />
          </div>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App

