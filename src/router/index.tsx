import * as React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import  Home from '../view/home/index';
import Login from '../view/login/index';


export default class RouterGroup extends React.Component {
    render() {
        return (
                <Router>
                    < Route path="/login"  component={Login } />
                    < Route path="/index" component={Home} /> 
                </Router>
            )       
    }
}