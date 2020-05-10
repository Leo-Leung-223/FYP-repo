import React, { useState, Component } from 'react';
import Amplify, { API, Auth, graphqlOperation, Storage, XR } from 'aws-amplify';
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


const username = localStorage.getItem("CognitoIdentityServiceProvider.2h4363or7u2322k4bvtr1q82m.LastAuthUser")

class lex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Slot Name: <input type="text" name="sname" />
                    </div>
                    <div>
                        Slot Value: <input type="text" name="svalue" />
                    </div>
                    <div>
                        Indicator：<input type="text" name="askback" />
                    </div>
                    <div>
                        Intent Name: <input type="text" name="Iname" />
                    </div>
                    <div>
                        Trigger sentence: <input type="text" name="sent" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
export default lex;