import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map"
import HomePage from "./components/HomePage/HomePage"
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/list" component={List} />
        </Switch>
        <Map />
        <Footer />
      </main>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
