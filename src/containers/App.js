import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MENU from '../assets/menu.png';
import AboutMe from '../components/AboutMe/AboutMe';
import Dashbord from '../components/DashBord/Dashbord';
import Home from '../components/Home/Home';
import MyPhotos from '../components/MyPhotos/MyPhotos';
import NavBar from '../components/NavBar/Navbar';
import PageNotFound from '../components/PageNotFound';
import '../Styles/Animation.css';
import styles from './App.module.css';


class App extends Component {


  state = {
    showNav: false
  }

  showNavHandler = () => {
    this.setState({ showNav: true })
  }

  closeNavHandler = () => {
    this.setState((preState) => {
      return { showNav: !preState.showNav }
    })
  }

  render() {
    return (
      <div className={styles.App}>

        <BrowserRouter>
          <NavBar
            showNav={this.state.showNav}
            closeNavHandler={this.closeNavHandler} />

          <div className={styles.Title}>

            <button onClick={this.showNavHandler} className={styles.ShowMenu}><img src={MENU} alt="MENU"/></button>

            <h1 className={styles.App__mytext}>Amit Samadder</h1>
          </div>

          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/dashbord' component={Dashbord} exact={true} />
            <Route path='/aboutme' component={AboutMe} exact={true} />
            <Route path='/myPhotos' component={MyPhotos} exact={true} />
            <Route component={PageNotFound} />
          </Switch>
          
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
