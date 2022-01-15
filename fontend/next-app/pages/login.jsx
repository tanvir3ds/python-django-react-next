import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Button, Card, Input, TextField } from '@mui/material';
import axios from 'axios';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginbutton = async () => {
    await axios({
      method: 'post',
      url: `http://127.0.0.1:8000/api/login/`,
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem('token', response.data['token']);
        window.location.href = '/';
      })
      .catch((eee) => {
        alert('Username OR Password is invalid Try again !!');
        // console.log(eee);
      });
  };

  return (
    <div>
      <Layout>
        <div className="login-page">
          <h2>Login page</h2>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            className="login-text"
            id="outlined-basic"
            label="username"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            className="login-text"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Button variant="outlined" onClick={loginbutton}>
            Login
          </Button>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
