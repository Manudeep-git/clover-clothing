import {useEffect, useState} from 'react';
import { Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignIn from './pages/signin/signin.component.jsx';
import { auth } from './firebase/firebase.utils';


function App() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    window.addEventListener('mousemove', () => {});
  
    // returned function will be called on component unmount 
    return () => {
      window.removeEventListener('mousemove', () => {})
    }
  }, [])

  // const unsubscribe= null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })
    
    console.log("This is called")
    console.log(user);

    return () => {
        unsubscribe();
        console.log("This is called unsub")
    }
  },[user])

  return (
    <div>
        <Header currentUser={user}/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/> 
          <Route path='/signin' component={SignIn}/> 
        </Switch>
    </div>
  );
}

export default App;
