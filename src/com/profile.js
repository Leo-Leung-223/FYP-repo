import { Cache } from 'aws-amplify';
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
Auth.currentSession()
    .then(data => console.log(data))
    .catch(err => console.log(err));


if (typeof window !== 'undefined') {
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}


const username=localStorage.getItem("CognitoIdentityServiceProvider.2h4363or7u2322k4bvtr1q82m.LastAuthUser")

function PredictionsUpload() {
  /* This is Identify Entities Advanced feature
   * This will upload user images to the appropriate bucket prefix
   * and a Lambda trigger will automatically perform indexing
   */
  function upload(event) {
    const { target: { files } } = event;
    const [file,] = files || [];
    Storage.put(username, file, {
      level: 'protected',
      customPrefix: {
        protected: 'protected/predictions/index-faces/',
      }
    });
  }

  return (
    <div className="Text">
      <div>
        <h3>Upload your personal photo</h3>
        <input type="file" onChange={upload}></input>
      </div>
    </div>
  );
}

class Profile extends React.Component{
  render() {
    const username=localStorage.getItem("CognitoIdentityServiceProvider.2h4363or7u2322k4bvtr1q82m.LastAuthUser")
    return(
      <div>
        <p id="username">  Hello:{username}, please upload your personal photo. </p>
        <PredictionsUpload />
      </div>
      
    )
    
  } 
}

export default Profile;