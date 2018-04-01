import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route,Link,Switch } from 'react-router-dom';
import Home from './components/Home';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';
import Create from './components/Create';

class App extends Component {
  constructor(){
    super()
    this.state={
      daily: [],
      weekly: [],
      monthly: []
    }
  }

  render() {
    const { daily,weekly,monthly } = this.state;
    return (
      <div className="App">
        <nav>
          <div className='main-header'><h3>Jasmine's Personal To-Do</h3></div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/daily'>Daily</Link>
            </li>
            <li>
              <Link to='/weekly'>Weekly</Link>
            </li>
            <li>
              <Link to='/monthly'>Monthly</Link>
            </li>
            <li>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/daily' component={Daily} />
            <Route exact path='/weekly' component={Weekly} />
            <Route exact path='/monthly' component={Monthly} />
            <Route exact path='/create' component={Create} />
          </Switch>
      </div>
    );
  }
}

export default App;
