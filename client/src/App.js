import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import Header from './components/Header/Header.js';
import Packages from './components/Packages/Packages.js';
import Contact from './components/Contact/Contact.js';

class App extends Component {
  constructor(){
    super()
  }
  state ={
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler= () => {
    this.setState({sideDrawerOpen: false})
  };


  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <Navigation drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className="article">
          <p>This is the page content</p>
          <Header />
          <Packages />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
