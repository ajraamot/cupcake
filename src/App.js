import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Customization from './components/Customization';
import OrderManagement from './components/OrderManagement';

import logo from './logo.svg';
import './App.css';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <Tabs>
   <TabList>
      {/* <Tab>React</Tab> */}
      <Tab>Cupcake Customization</Tab>
      <Tab>Cupcake Order Management</Tab>
    </TabList>
    {/* <TabPanel>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      
      </TabPanel>       */}
    <TabPanel>
      <Customization/>
    </TabPanel>
    <TabPanel>
      <OrderManagement/>
    </TabPanel>
    </Tabs>
  );
}

export default App;
