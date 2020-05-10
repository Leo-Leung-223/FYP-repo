import { Cache } from 'aws-amplify';
import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Divider, Form, Grid, Header, Input, List, Segment } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import Select from 'react-select';
import { Connect, S3Image, withAuthenticator, SumerianScene } from 'aws-amplify-react';
import Amplify, { API, Auth, graphqlOperation, Storage, XR } from 'aws-amplify';
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

const username = localStorage.getItem("CognitoIdentityServiceProvider.2h4363or7u2322k4bvtr1q82m.LastAuthUser");

// var data=JSON.parse(username)


class Profile extends Component {
    state = {
        imageName: "",
        imageFile: "",
        response: ""
    };
    uploadImage = () => {
        Storage.put(username,
            this.upload.files[0],
            {
                level: 'protected',
                customPrefix: {
                    protected: 'protected/predictions/index-faces/',
                }
            }
        )
            .then(result => {
                this.upload = null;
                this.setState({ response: "Success uploading file!" });
            })
            .catch(err => {
                this.setState({ response: `Cannot uploading file: ${err}` });
            });
    };

    render() {
        
        const username = localStorage.getItem("CognitoIdentityServiceProvider.2h4363or7u2322k4bvtr1q82m.LastAuthUser");
        
        return (
            <div>
                
                <h2>Username:</h2>
                <h2>Upload Profile Picture:</h2>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    style={{ display: "none" }}
                    ref={ref => (this.upload = ref)}
                    onChange={e =>
                        this.setState({
                            imageFile: this.upload.files[0],
                            imageName: this.upload.files[0].name
                        })
                    }
                />
                <input value={this.state.imageName} placeholder="Select file" />
                <button
                    onClick={e => {
                        this.upload.value = null;
                        this.upload.click();
                    }}
                    loading={this.state.uploading}
                >
                    Browse
                </button>

                <button onClick={this.uploadImage}> Upload File </button>

                {!!this.state.response && <div>{this.state.response}</div>}
            </div>
        );
    }
}


export default Profile;