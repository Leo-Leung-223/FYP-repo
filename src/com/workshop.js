
import React,{ useState, Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import { Divider, Form, Grid, Header, Input, List, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import Select from 'react-select';
import { Connect, S3Image, withAuthenticator,SumerianScene } from 'aws-amplify-react';
import Amplify, { API, Auth, graphqlOperation, Storage ,XR} from 'aws-amplify';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import awsconfig from '../aws-exports';
import aws_exports from '../aws-exports';
import '../App.css';
Amplify.configure(aws_exports);
Amplify.configure(awsconfig);


class Sumerian extends React.Component {
  render() {
    return (
      <div className="sumerian">
        <h1 align="center">Below is Workshop information ! Please click the image for guidacne!</h1>
        <a href="https://0b662260c2584ff6bbaffc61c6aa4426.us-east-1.sumerian.aws/">
        <img class="center" src={require("../deepracer.png")}/>
        </a>
      </div>
    );
  }
}


const Workshoplist = [
  { label: "Deeepracer", value: 1 },
  { label: "Sumerian", value: 2 },
  { label: "Docker", value: 3 },
  { label: "AI", value: 4 }
]; 


class Workshop extends Component {
    render() {
        return (
          <div>
          <Sumerian />
          </div>
        )
    }
}

export default Workshop;