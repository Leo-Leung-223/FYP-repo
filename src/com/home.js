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
import Iframe from 'react-iframe'
import scene1Config from "../sumerian_exports_95ebc374ca994e4da13171874dea578e.json";

Amplify.configure(aws_exports,{
  ...awsconfig,
  XR: { // XR category configuration
    region: 'us-east-1', // Sumerian region
    scenes: { 
      "homepagescene": { // Friendly scene name
        sceneConfig: scene1Config // Scene configuration from Sumerian publish
      }
    }
  }
});



class Scene extends React.Component{
  async loadAndStartScene() {
    await XR.loadScene("homepagescene", "sumerian-scene-dom-id");
    XR.start("homepagescene");
    XR.onSceneEvent('homepagescene', 'AudioEnabled', () => console.log ('Audio is enable') );
;}
    
    render(){
      return(
        <div id="sumerian-scene-dom-id">
        <SumerianScene sceneName="homepagescene"/>
        </div>
            )
    }
}


class Sumerian extends React.Component {
  render() {
    return (
      <div className="sumerian">

      </div>
    );
  }
}


class Home extends Component {
  render() {
    return (
      <Router>
        <Grid padded>
          <Grid.Column>
            <div className="container">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <div style={ { height: '100vh' } }>
            <Scene />
            </div>
            </div>
            </div>
            </div>
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default Home;