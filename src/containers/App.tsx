import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MENU from "../assets/menu.png";
import AboutMe from "../components/AboutMe/AboutMe";
import Dashboard from "../components/Dashboard/Dashboard";
import Experience from "../components/Experience/Experience";
import Home from "../components/Home/Home";
import MyPhotos from "../components/MyPhotos/MyPhotos";
import PageNotFound from "../components/PageNotFound";
import NavBar from "../components/UI/NavBar/Navbar";
import styles from "./App.module.css";

interface IState {
  showNav: boolean;
}

class App extends Component {
  state: IState = {
    showNav: false,
  };

  showNavHandler = () => {
    this.setState({ showNav: true });
  };

  closeNavHandler = () => {
    this.setState((preState: IState) => {
      return { showNav: !preState.showNav };
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter>
          <NavBar
            showNav={this.state.showNav}
            closeNavHandler={this.closeNavHandler}
          />

          <div className={styles.Title}>
            <button onClick={this.showNavHandler} className={styles.ShowMenu}>
              <img src={MENU} alt="MENU" />
            </button>
          </div>

          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/aboutMe" component={AboutMe} exact={true} />
            <Route path="/myPhotos" component={MyPhotos} exact={true} />
            <Route path="/experience" component={Experience} exact={true} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
