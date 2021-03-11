import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetail from './components/posts/PostDetail';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import CreatePost from './components/posts/CreatePost';
import UserProfile from './components/auth/userProfile/UserProfile';
import EditUserProfile from './components/auth/userProfile/EditUserProfile';

class App extends Component {
  render (){
    return(
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/post/:id' component={PostDetail}/>
              <Route path='/signin' component={SignIn} />
              <Route path='/register' component={Register} />
              <Route path='/createpost' component={CreatePost} />
              <Route path='/userprofile' component={UserProfile} />
              <Route path='/edituserprofile' component={EditUserProfile} />
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
