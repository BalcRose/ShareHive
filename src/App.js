import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import Create from './components/pages/Create';
import About from './components/pages/About';
import Chat from './components/chat';
import ContactUs from './components/contactus';



function App() {

  //google login API

 /* function 
useEffect(() => {
google.accounts.id.initialize ({
  client_id: "1085776193825-im3hsa2eq8agikhuu1gu5sej5le7v5uq.apps.googleusercontent.com",
  callback: handleCallbackResponse
})
}, []); */

  // glA
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Login} />
          <Route path='/create' component={Create}></Route>
          <Route path='/about' component={About}></Route>
          <Route path= '/Chat' component = {Chat} /> 
          <Route path= '/contact-us' component = {ContactUs} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
