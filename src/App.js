import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Assam from './Assam';
import Meghalaya from './Meghalaya';
import Punjab  from './Punjab';
import Odisha from './Odisha';
import Andhra_pradesh from './Andhra_pradesh';
import Chandigarh from './Chandigarh';
import West_bengal from './West_bengal';
import Uttrakhand from './Uttrakhand';
import Tamil_nadu from './Tamil_nadu';
import Sikkim from './Sikkim';
import Login from './Login';
import Subscribe from './Subscribe';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
    <Switch>
      <Route path ="/sikkim">
        <Header/>
        <Sikkim/>
        <Footer/>
      </Route> 
      <Route path ="/tamil nadu">
        <Header/>
        <Tamil_nadu/>
        <Footer/>
      </Route> 
      <Route path ="/uttrakhand">
        <Header/>
        <Uttrakhand/>
        <Footer/>
      </Route> 
      <Route path ="/west bengal">
        <Header/>
        <West_bengal/>
        <Footer/>
      </Route> 
      <Route path ="/chandigarh">
        <Header/>
        <Chandigarh/>
        <Footer/>
      </Route> 
      <Route path ="/andhra pradesh">
        <Header/>
        <Andhra_pradesh/>
        <Footer/>
      </Route> 
      <Route path ="/odisha">
        <Header/>
        <Odisha/>
        <Footer/>
      </Route> 
      <Route path ="/punjab">
        <Header/>
        <Punjab/>
        <Footer/>
      </Route> 
      <Route path ="/meghalaya">
        <Header/>
        <Meghalaya/>
        <Footer/>
      </Route> 
      <Route path ="/assam">
        <Header/>
        <Assam/>
        <Footer/>
      </Route> 
      <Route path ="/about">
        <Header/>
        <About/>
        <Footer/>
      </Route>
      <Route path ="/loginPage">
        <Header/>
        <Login/>
      </Route>
      <Route path ="/subscribe">
        <Header/>
        <Subscribe/>
      </Route>
      <Route  path="/">
        <Header/>
        <Home/>
        <Footer/>
      </Route> 
 
    </Switch>
    </div>
  </Router>
  );
}


export default App;
