import Home from"./com/home";
import Booth from"./com/booth";
import Workshop from"./com/workshop";
import Nav from "./com/navbar";
import Profile from "./com/profile";
import Upload from "./com/upload";
import QRcode from "./com/qrcode";
import lex from "./com/buildlex.js";
import React,{ useState, Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import { Divider, Form, Grid, Header, Input, List, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import Select from 'react-select';
import { Connect, S3Image,SumerianScene } from 'aws-amplify-react';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';
import Amplify, { API, Auth, graphqlOperation, Storage ,XR} from 'aws-amplify';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import aws_exports from './aws-exports';
import './App.css';
// import { Navbar, BSpan } from '@bootstrap-4-react';

Amplify.configure(aws_exports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

Auth.currentSession()
    .then(data => console.log(data))
    .catch(err => console.log(err));


class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Route exact path='/' component={Home} />
        <Route path='/booth' component={Booth} />
        <Route path='/workshop' component={Workshop} />
        <Route path='/upload' component={Upload} />
        <Route path='/profile' component={Profile} />
        <Route path='/buildlex' component={lex} />
      </Router>
    );
  }
}


export default withAuthenticator(App,  {
  signUpConfig: {
    signUpFields: [{ label:"Company",key: 'custom:CompanyName', required: true },{ label:"Url",key: 'custom:Url', required: true },{ label:"Position",key: 'custom:Position', required: true },
    { label:"FullName",key: 'custom:FullName', required: true }]
  }
},{includeGreetings: true});