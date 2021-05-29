import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import '../../App.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      city: "",
      state: "",
      contact: ""
    }
  }
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      this.setState({
        email: response.profileObj.email,
        name: response.profileObj.givenName + " " + response.profileObj.familyName

      })
    };

    return (
      <div>
        <GoogleLogin
          className="google-btn"
          clientId="876716683941-bhnmk3o2g18vkh00t8iop0g08b3f9hnp.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          onSuccess={responseGoogle}
          onFailure={() => { }}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
export default SignUp;