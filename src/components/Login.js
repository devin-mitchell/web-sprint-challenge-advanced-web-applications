import React, { useEffect, useState  } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ formValues, setFormValues ] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })

  const { push } = useHistory();

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const error = errorMessage;
  //replace with error state

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, formValues)
      .then(res => {
        console.log("POST RES", res.data.payload)
        localStorage.setItem('token', res.data.payload)
        setErrorMessage('')
        push('./bubble-page')
      })
      .catch(err => {
        console.log("POST ERR", err)
        setErrorMessage('Sorry, couldn\'t find you!  Try again.')
      })

  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor='username' />User className
          <input 
            name='username'
            value={formValues.username}
            onChange={handleChange}
            data-testid='username'
          />
          <label htmlFor='password' />Password
          <input 
            type="password"
            name='password'
            value={formValues.password}
            onChange={handleChange}
            data-testid='password'
          />
          <button>Login</button>
        </form>
      </div>

      {error && <p data-testid="errorMessage" className="error">{error}</p>}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.