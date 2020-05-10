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
import scene1Config from "../sumerian_exports_8886b90f1c9d40e1a94e94d6fb276c98.json";

// var AWS = require('aws-sdk/dist/aws-sdk-react-native');


Amplify.configure(aws_exports,{
  ...awsconfig,
  XR: { // XR category configuration
    region: 'us-east-1', // Sumerian region
    scenes: { 
      "homepagescene2": { // Friendly scene name
        sceneConfig: scene1Config // Scene configuration from Sumerian publish
      }
    }
  }
});



class Scene extends React.Component{
  async loadAndStartScene() {
    await XR.loadScene("homepagescene2", "sumerian-scene-dom-id");
    XR.start("homepagescene2");
    XR.onSceneEvent('homepagescene2', 'AudioEnabled', () => console.log ('Audio is enable') );
;}
    
    render(){
      return(
        <div id="sumerian-scene-dom-id">
        <div style={ { height: '90vH',width:'65%'} }>
        <SumerianScene sceneName="homepagescene2"/>
        </div>
        </div>
            )
    }
}

class Scenemanual extends React.Component{
  
    render(){
      return(
        <div id="manual" class='info-box'>
        <h1>You can ask me:</h1>
        <ol>
          <h3><li>What can you do?</li></h3>
          <h3><li>What is the purpose of the vtc?</li></h3>
          <h3><li>What is the event information?</li></h3>
          <h3><li>What is the event date</li></h3>
          <h3><li>Where is the event held?</li></h3>
          <h3><li>What is the purpose of the homepage?</li></h3>
          <h3><li>How to use the webpage?</li></h3>
          <h3><li>How to use the photo sharing page?</li></h3>
          <h3><li>How to create album?</li></h3>
          <h3><li>How to search the photo?</li></h3>
        </ol>
        </div>
            )
    }
}




class Home extends Component {
  render() {

    return (
      <Router>
        <Grid padded>
          <Grid.Column>
            <div className="container" >
            <div className="row">
            
            <div className="col-md-12">
            <Scene/>
                            <Scenemanual/>

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