import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">


      <Router>
          {/* <Header /> */}
          
      </Router>



      <header className="App-header">
        <img src={logo} className="App-logo" />  
      </header>
  

    </div>
  );
}

export default App;
