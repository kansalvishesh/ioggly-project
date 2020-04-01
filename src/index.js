import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./ioggly.css";
import Home from "./container/home";
import ContactUs from "./container/contactUs";
import Services from './container/services';
import Team from "./container/team";
import PageShell from "./component/pageShell";


const app = ( 
    <Router>
        <div>
            <Route path="/" exact component={PageShell(Home)}></Route>
            <Route exact path="/services" component={PageShell(Services)}/>
            <Route exact path="/contact" component={PageShell(ContactUs)}/>
            <Route exact path="/team" component={PageShell(Team)}/>
        </div>
    </Router>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
