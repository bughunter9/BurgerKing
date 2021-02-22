import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Wall from './Wall';
import Deals from './Deals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';


import './App.css';

function App() {
     return(
         <div className="app">
            <Router>
                <ScrollToTop />
                    <Header />
                        <Switch>
                            <Route path='/wall' component={Wall}>
                                <Wall />
                            </Route>
                            <Route path='/deals' component={Deals}>
                                <Deals />
                            </Route>
                            <Route path='/' component={Home}>
                                <Home />
                            </Route>
                        </Switch>
                    <Footer />
            </Router>
         </div>
     );
}

export default App;
