import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

import pricing from './components/pricing';
import NavBar from './components/Navbar';
import Timeline from './components/Timeline/Timeline';
function App() {
  const font = {
    fonts: {
      
      heading: 'Nunito',
      body: 'Nunito',
    },
  };

  const theme = extendTheme(font);
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/join" component={pricing} />
          <Route exact path="/timeline" component={Timeline} />
          <Route  path="/" component={Home} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
