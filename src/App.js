import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetail from './components/posts/PostDetail';

class App extends Component {
  render (){
    return(
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/post/:id' component={PostDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
