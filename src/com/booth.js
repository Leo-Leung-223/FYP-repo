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
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import Iframe from 'react-iframe'


import '../App.css';
Amplify.configure(aws_exports);
Amplify.configure(awsconfig);


const BoothInfo = [
  { label: "Nextlink", value: 1 },
  { label: "Ha Company", value: 2 },
  { label: "Ecloud Valley ", value: 3 },
  { label: "Melco", value: 4 }
]; 


class Sumerian extends React.Component {
  render() {
    return (
        <div>
          <SumerianScene sceneName="cindy" />
        </div>    
    );
  }
}


/*class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
        name: '',
        description: '',
    };
    
      <Iframe url="https://us-east-1.sumerian.aws/95ebc374ca994e4da13171874dea578e.scene"
        width="1000px"
        height="1000px"
        id="myId"
        className="myClassname"
        display="initial"
        allow="geolocation; microphone; camera; midi; encrypted-media;"
        position="relative"/>
        </div>    
    
  }

  handleChange(name, event) {
      this.setState({ [name]: event.target.value });
  }

  async submit() {
    const { onCreate } = this.props;
    const input = {
      name: this.state.name,
      description: this.state.description
    }
    console.log(input);

    try {
    	await onCreate({input})
    } catch (err) {
    	console.error(err);
    }

  }

  render(){
    return (
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={(event) => { this.handleChange('name', event)}}
            />
            <input
                name="description"
                placeholder="description"
                onChange={(event) => { this.handleChange('description', event)}}
            />
            <button onClick={this.submit}>
                Add
            </button>
        </div>
    );
  }
}*/


class Booth extends React.Component {
    render() {
        return (
          <div>
          </div>
        )
    }
}


export default Booth;