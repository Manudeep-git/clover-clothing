/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import CustomButton from '../../components/custom-button/custombutton.component';
import FormInput from '../../components/form-input/forminput.component';
import './signin.styles.scss';
import firebase, { auth, signInWithGoogle, checkUserSignIn } from '../../firebase/firebase.utils.js';

const SignIn = () => {

    const [userCredentials,setUserCredentials] = useState({email:'',password:''});

    useEffect(() => {
        console.log("Call only if email and password is updated")
    },[userCredentials])
    

    const handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = userCredentials;

        try{
            const {user} = await auth.signInWithEmailAndPassword(email, password);

            alert("Signed In");
            setUserCredentials({email:'', password: ''});
        }
        catch(e){
            console.log(e);
        }
    }

    const handleChange = (e) => {
       const {name,value} = e.target;

       setUserCredentials({...userCredentials,[name]: value});
    }

    

    return (
        <div className='signin'>
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <div className="email">
                    <FormInput 
                        name="email" type="email"
                        value={userCredentials['email']} 
                        handleChange={handleChange}
                        label = "Email"  required/>
                </div>
                <div className="password">
                    <FormInput
                         name="password" 
                         type="password" 
                         value={userCredentials['password']} 
                         handleChange={handleChange}
                         label="Password" required/>
                </div>
                <div className='buttons'>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton type="button" handleClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;