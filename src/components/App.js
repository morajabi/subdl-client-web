/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { media } from '../utils/styleUtils';

import loganLarge from '../assets/images/logan-large.jpg';
import loganSmall from '../assets/images/logan-small.jpg';

import TopNav from './TopNav';
import Footer from './Footer';
import Home from './Home';
import Search from './Search';
import Subtitles from './Subtitles';
import Login from './login';
import Register from './Register';

const About = ({ match }) => (
  <div>About {match.url}</div>
);

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  padding: 0 0 120px 0;
  ${(props) => props.isHome ? css`
    ${media.from.medium`
      background: url(${loganLarge}) right bottom no-repeat;
      background-size: auto 70%;
    `}
    ${media.from.large`
      background: url(${loganLarge}) right bottom no-repeat;
      background-size: contain;
    `}
    ${media.to.medium`
      background: url(${loganSmall}) right bottom no-repeat;
      background-size: auto 50%;
    `}
  ` : css`

  `}
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ match, location }) => {
          const isHome = location.pathname === '/';

          return (
            <Main isHome={isHome}>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/subtitles" component={Subtitles} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/Register" component={Register} />
              <Footer showBgCaption={isHome} />
            </Main>
          );
        }} />
      </Router>
    );
  }
}

export default App;
