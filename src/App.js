import React, { Component } from 'react';
import MoviePage from "./context/MoviePage";
import UserContext from './context/userContext';
import Login from './context/Login';

class App extends Component {
  handleLoggedIn = userName => {
    console.log("Getting the user: "+ userName);
    const user = {name: "Ubaid Rana"};
    this.setState({currentUser: user});

  }
  state = {currentUser: {name: null }};
  render() {
    return (
      <div>
        <UserContext.Provider value={{
          currentUser: this.setState.currentUser, 
          onLoggedIn: this.handleLoggedIn}}>
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App

