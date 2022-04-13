import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <div>
                <button>Google Sign Up</button>
                <button>Github Sign Up</button>
            </div> <br/> 
            <form >
                <input type="text" placeholder='Your Name' /><br/>
                <input type="email" placeholder='Your Email' /> <br/>
                <input type="password" placeholder='Password'/> <br/>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;