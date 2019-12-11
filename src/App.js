import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const config = {
  apiKey: 'AIzaSyD118xTsi9yBBetVPLzhhCLV8e-GGgkyQc',
  authDomain: 'appi-a8ecf.firebaseapp.com',
};
firebase.initializeApp(config);

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/signedIn',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <ul>
            <li><h2>Conectado como : {firebase.auth().currentUser.displayName}</h2></li>
            <li><img className="avatar" alt="profile pic" src={firebase.auth().currentUser.photoURL}/></li>
            <li><a href="https://api-open.herokuapp.com/" className="link">visitar otro experimento</a></li>
            <li><button onClick={() => firebase.auth().signOut()} className="danger">cerrar sesion</button></li>
          </ul>
          ) : (
          <div>
            <h2>Conectate, vamos!</h2>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
          )}
      </div>
    )
  }
}

export default App






