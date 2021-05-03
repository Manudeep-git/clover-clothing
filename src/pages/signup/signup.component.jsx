import {useState} from 'react';
import CustomButton from '../../components/custom-button/custombutton.component';
import FormInput from '../../components/form-input/forminput.component';
import { auth, createUserDocument } from '../../firebase/firebase.utils.js';
import './signup.styles.scss';

const SignUp = () => {

    const [userCredentials,setUserCredentials] = useState({displayName:'', email:'', password:'', confirmPassword: ''});

    const handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = userCredentials;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try {
            
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserDocument(user,{displayName});

            setUserCredentials({displayName:'', email:'', password:'', confirmPassword: ''});

        }
        catch(e){
            console.log(e);
        }
    }

    const handleChange = e => {
        const {name, value} = e.target;

        setUserCredentials({...userCredentials,[name]: value});
    }

    return (
        <div className='signUp'>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
            <div className="displayName">
                <FormInput 
                    name="displayName" type="text"
                    value={userCredentials['displayName']} 
                    handleChange={handleChange}
                    label = "Display Name"  required/>
                </div>
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
                <div className="confirm_password">
                <FormInput
                     name="confirmPassword" 
                     type="password" 
                     value={userCredentials['confirmPassword']} 
                     handleChange={handleChange}
                     label="Confirm Password" required/>
                </div>
                <div className='buttons'>
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp;