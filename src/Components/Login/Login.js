import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  const history =useHistory()
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {firebase} =useContext(FirebaseContext)
const handleLogin=(e)=>{
e.preventDefault()
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    history.push('/home')
}).catch((error)=>{
  alert(error.message)
})
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}

            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to ='signup'> signup</Link>

      </div>
    </div>
  );
}

export default Login;
