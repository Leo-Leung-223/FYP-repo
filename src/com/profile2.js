import React, { Component } from  'react';
import aws_exports from '../aws-exports';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import * as schema from '../graphql/schema';
import { withAuthenticator,Connect } from 'aws-amplify-react';
import { S3Image } from 'aws-amplify-react';
import { Divider, Form, Grid, Header, Icon, Input, List, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import gql from 'graphql-tag';
import Amplify, { API, graphqlOperation , Storage, Auth } from 'aws-amplify';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
Amplify.configure(aws_exports)




class profile extends React.Component {
    async queryuser(){
	await API.graphql(graphqlOperation(queries.listUserdata,{
      	limit:10, 
      	 filter:{ 
      	 	owner : { eq: this.state.userName}
      	}
      })).then(data => {
      	console.log(data);
			    this.setState({
			     orders: data.data.listUserdata.items
			   }) 
   }).catch(err => console.log(err));
    
   }
	render() {
            return (
                <div>
                    <Connect query={graphqlOperation(queries.listUserdata)}>
                        {({ data: { listUserdata }, loading, errors }) => {
                            // if (errors) return (<h3>errors</h3>);
                            if (loading || !listUserdata) return (<h3>Loading...</h3>);
                            return (<ListView todos={listUserdata.userName} /> );
                        }}
                    </Connect>
                </div>
            )  
    }
} 



export default profile;


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

import '../App.css';
Amplify.configure(aws_exports);
Amplify.configure(awsconfig);


class Sumerian extends React.Component {
  render() {
      constructor(){
        let comments = JSON.parse(localStorage.getItem('data'));
        this.state = {
        comments: comments
    };
    }


    return (
          <div>
          
          </div>
    );
  }
}

export default Sumerian; 