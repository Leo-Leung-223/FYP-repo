import React,{ useState, Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import { Divider, Form, Grid, Header, Input, List, Segment } from 'semantic-ui-react';
// import {v4 as uuid} from 'uuid';
// import Select from 'react-select';
import { Connect, S3Image, withAuthenticator,SumerianScene } from 'aws-amplify-react';
// import Amplify, { API, Auth, graphqlOperation, Storage ,XR} from 'aws-amplify';
// import awsconfig from '../aws-exports';
// import aws_exports from '../aws-exports';
// import '../App.css';
// Amplify.configure(aws_exports);
// Amplify.configure(awsconfig);



// const ListAlbums = `query ListAlbums {
//     listAlbums(limit: 9999) {
//         items {
//             id
//             name
//         }
//     }
// }`;


function formatName(user) {
  return user.firstName+ ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

class temp extends Component {
  // ListAlbums.
  render() {
    return (
      <Router>
        <Grid padded>
          <Grid.Column>
           <div><p>temp</p></div>
           <p>Hello, {formatName(user)}</p>
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default withAuthenticator(temp, {includeGreetings: false});