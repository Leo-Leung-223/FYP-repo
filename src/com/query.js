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


async function user_info() {
    const userinfo= await API.graphql(graphqlOperation(queries.listUserdata));
    console.log(user_info);
}

