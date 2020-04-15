import React, { Component } from 'react';
import MoviePage from "./context/MoviePage";
import UserContext from './context/userContext';
import Login from './context/Login';
import CartContext from './context/cartContext';

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
        <CartContext.Provider value={{cart: []}}>
          <UserContext.Provider value={{
            currentUser: this.setState.currentUser, 
            onLoggedIn: this.handleLoggedIn}}>
            <div>
              <MoviePage />
              <Login />
            </div>
          </UserContext.Provider>
        </CartContext.Provider>
      </div>
    )
  }
}

export default App

