import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';
import StudentManager from './Components/Students';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import ManageAccountsManager from './Components/ManageAccounts';
import AuthService from './utils/AuthService'
//import CSVLocation from './Components/CSVPages/Location';
import CSVProgram from './Components/CSVPages/Program';
import CSVStudent from './Components/CSVPages/Student';
import WipeResponse from './Components/CSVPages/WipeResponse';
import Sites from './Components/Sites';
import Container from './Components/Container';
import MyAccountCompiler from './Components/MyAccount';
import Programs from './Components/Programs';
import AddSite from './Components/AddSite';
import AddProgram from './Components/AddProgram';
import AddStudent from './Components/AddStudent';
import CurrentSeason from './Components/CurrentSeason';
import AddAccount from "./Components/AddAccount";
import EditStudent from "./Components/EditStudent";

/*
This file is what routes all the paths in the react-app
*/
// const auth = new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com');
const auth = new AuthService();

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/Login' })
    }
}


const checkAuth = (nextState, replace) => {
    if (auth.loggedIn()) {
        replace({ pathname: '/MyAccount' })
    }
}

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Container} auth={auth}>
                <IndexRedirect to="Login" />
                <Route path="Login" component={Login} onEnter={checkAuth} auth={auth}/>
                <Route path="MyAccount" component={MyAccountCompiler} onEnter={requireAuth}/>
                <Route path="Sites" component={Sites} onEnter={requireAuth} />
                <Route path="Students" component={StudentManager} onEnter={requireAuth} />
                <Route path="ManageAccounts" component={ManageAccountsManager} onEnter={requireAuth} />
                <Route path="CurrentSeason" component={CurrentSeason} onEnter={requireAuth}/>
                <Route path="CSVPage2" component={CSVProgram} onEnter={requireAuth}/>
                <Route path="CSVPage3" component={CSVStudent} onEnter={requireAuth}/>
                <Route path="WipeResponse" component={WipeResponse} onEnter={requireAuth}/>
                <Route path="Programs" component={Programs} onEnter={requireAuth}/>
                <Route path="AddSite" component={AddSite} onEnter={requireAuth}/>
                <Route path="AddAccount" component={AddAccount} onEnter={requireAuth}/>
                <Route path="AddStudent" component={AddStudent} onEnter={requireAuth}/>
                <Route path="AddProgram" component={AddProgram} onEnter={requireAuth}/>
                <Route path="EditStudent" component={EditStudent} onEnter={requireAuth}/>
            </Route>
        </Router>
    ),
  document.getElementById('root')
);
