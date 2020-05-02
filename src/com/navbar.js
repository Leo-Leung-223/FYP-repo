import React from 'react';
import "../App.css";
import  "./home";
import  "./booth";
import  "./workshop";
import  "./upload";
import  "./qrcode";
import  "./temp";
import  "./profile";
import { Auth } from 'aws-amplify';


function Navbar() {
        // Logout and redirect to root.
        const SignOut = () =>{
                Auth.signOut()
                .then(data => console.log(data))
                .catch(err => console.log(err));
                window.location.href = '/';
        }
        const username =localStorage.getItem("CognitoIdentityServiceProvider.2h4363or7u2322k4bvtr1q82m.LastAuthUser") // Maybe get username here.
        return (
           <ul>
               <li><a href="/">Home</a></li>
               <li><a href="workshop">Workshop</a></li>
               <li><a href="booth">Booth</a></li>
               <li><a href="upload">Photosharing</a></li>
               <li><a href="temp">Temp</a></li>
               <li><a href="#" onClick={SignOut} class="profile">Sign Out</a></li>
               <li><a href="profile" class="profile">User: {username}</a></li>
               <li><a href="profile">profile</a></li>
          </ul>
        );
}

export default Navbar;