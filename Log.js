import React, { useState } from 'react';
import { auth } from './Firebase';
import { Link } from 'react-router-dom';
const Log = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  

  return (
    <div className='login'>
      <center>
        <form autoComplete='off'>
          <h1>Login</h1>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={changeHandler}
          />
          <br />
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={changeHandler}
          />
          <br />
          <button type="submit"><Link to="/Dashboard">login</Link></button>
           <br />
          Don't have an account?<Link to="/User">Sign Up</Link>
        </form>
      </center>
    </div>
  );
};

export default Log;