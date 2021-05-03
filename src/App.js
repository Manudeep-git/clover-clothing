import {useEffect, useState} from 'react';
import { Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignIn from './pages/signin/signin.component.jsx';
import { auth, createUserDocument } from './firebase/firebase.utils';
import SignUp from './pages/signup/signup.component';


function App() {
  const [user,setUser] = useState(null);
 
  // const unsubscribe= null;

  useEffect(
      () => {
    
        const unsubscribe = auth.onAuthStateChanged(async userAuthObj => {
            if(userAuthObj){
              const userRef = await createUserDocument(userAuthObj);

              userRef.onSnapshot(doc => {
                  setUser({
                    id: doc.id,
                    ...doc.data()
                  })
              })
              return;
            }

            //If user signsout userAuthObj is null and hence currentUser is set to null
            else{
              setUser(userAuthObj);
              return;
            }
        })

        // alert("Called inside useffect");
        
        console.log("Auth State Changed")

        return () => {
            unsubscribe();
        }
  },[user])

  return (
    <div>
        <Header currentUser={user}/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/> 
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/> 
        </Switch>
    </div>
  );
}

export default App;
