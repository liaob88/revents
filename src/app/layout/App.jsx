import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard.jsx/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' className='main' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <React.Fragment>
            <NavBar />
            <Container>
              <Route exact path='/' className='main' component={HomePage} />
              <Route path='/events' className='main' component={EventDashboard} />
              <Route path='/events/:id' className='main' component={EventDetailedPage} />
              <Route path='/people' className='main' component={PeopleDashboard} />
              <Route path='/profile/:id' className='main' component={UserDetailedPage} />
              <Route path='/settings' className='main' component={SettingsDashboard} />
              <Route path='/createEvent' className='main' component={EventForm} />
            </Container>
          </React.Fragment>
        )}/>
      </React.Fragment>
    );
  }
}

export default App;

