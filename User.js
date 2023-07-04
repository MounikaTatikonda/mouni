import React, { useState } from 'react';
import { auth } from './Firebase';
import { Link } from 'react-router-dom';
const User = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  

  return (
    <div className='user'>
      <center>
        <form autoComplete='off'>
          <h1>Sin Up</h1>
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
          <button onClick={signUp}>Sign Up</button> &nbsp;&nbsp;
          <br />
         Do you have an account?<Link to="/Log">login</Link>
        </form>
      </center>
    </div>
  );
};

export default User;

