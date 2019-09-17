import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard.jsx/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testareas/TestComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' className='main' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <React.Fragment>
            <NavBar />
            <Container>
              <Switch key={this.props.location.key}>
                <Route exact path='/' className='main' component={HomePage} />
                <Route exact path='/events' className='main' component={EventDashboard} />
                <Route path='/events/:id' className='main' component={EventDetailedPage} />
                <Route path='/people' className='main' component={PeopleDashboard} />
                <Route path='/profile/:id' className='main' component={UserDetailedPage} />
                <Route path='/settings' className='main' component={SettingsDashboard} />
                <Route path={['/createEvent', '/manage/:id']} className='main' component={EventForm} />
                <Route path='/test' component={TestComponent} />
              </Switch>
              
            </Container>
          </React.Fragment>
        )}/>
      </React.Fragment>
    );
  }
}

export default withRouter(App);

