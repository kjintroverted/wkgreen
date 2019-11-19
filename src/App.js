import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Spacer } from './components';
import { Home } from './containers';

const opts = {
  headerH: 55
}

function App() {
  return (
    <Root className="App">
      <Router>
        <NavBar>
          <h3 className="title">Williamrobert Green</h3>
          <Spacer />
          {/* <Button>About</Button> */ }
          <Button href="https://github.com/kjintroverted">GitHub</Button>
          {/* <Button>Gallery</Button> */ }
        </NavBar>
        <Main>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </Router>
    </Root>
  );
}

export default App;

const Root = styled.div``

const NavBar = styled.div`
      position: fixed;
      top: 0;
      z-index: 100;
      width: 100vw;
      height: ${opts.headerH }px;
      display: flex;
      background: white;
      align-items: center;
      & .title {
        margin-left: 5px;
        cursor: default;
      }
`

const Main = styled.div`
      margin-top: ${opts.headerH }px;
`