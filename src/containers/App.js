import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './App.module.css';
import SideBar from '../components/SideBar';
import Home from '../components/Home';
import Dashbord from '../components/Dashbord';
import AboutMe from '../components/AboutMe';
import PageNotFound from '../components/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        
        <BrowserRouter>
        <SideBar />
        <h1 className={styles.App__mytext}>Amit Samadder</h1>
            <Switch>
                <Route path='/' component={Home} exact={true}/>
                <Route path='/dashbord' component={Dashbord} exact={true}/>
                <Route path='/aboutme' component={AboutMe} exact={true}/>
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
