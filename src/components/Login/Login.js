import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {user, signInWithGoogle, handleSignOut} = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <div>
                <button onClick={signInWithGoogle}>Google Sign In</button>
                <button>Github Sign In</button>
            </div> <br/> 
            <form >
                <input type="email" placeholder='Your Email' /> <br/>
                <input type="password" placeholder='Password'/> <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;