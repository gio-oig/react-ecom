import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    // this propertyes are inputs name and value changed on every key change
    const { value, name } = event.target;
    console.log(value, name);
    // [] - is used to let input name variable(name="email or password") change state name property dinamicaly
    // without brackets, name in setstate object is defined as already existing state name
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="emial"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            // required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            // required
          />
          <div className="button">
            <CustomButton type="submit">submit</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
