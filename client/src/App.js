import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Client from './pages/Client'
import Creator from './pages/Creator'

// import Anime from 'react-anime'

import XCollection from './pages/XCollection'
import XNoMatch from './pages/XNoMatch';
import WebsiteNav from './components/Navbars/WebsiteNav';
// import Card from "./components/Card"
// import cards from "./cards.json"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStroopwafel, faUserTie, faBook, faBinoculars, faCameraRetro,  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add( faLinkedin,faGithub, faStroopwafel, faUserTie, faBook, faBinoculars, faCameraRetro)



class App extends Component {
  render() {
    return <Router>
      <React.Fragment>

        <WebsiteNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Explore' component={Explore} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/Client' component={Client} />
          <Route exact path='/Creator/:id?' component={Creator} />

          <Route exact path='/XCollection/' component={XCollection} />
          <Route component={XNoMatch} />
        </Switch>
      </React.Fragment>
    </Router>
  }
};

export default App;