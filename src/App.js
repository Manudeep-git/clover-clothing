import { Route,Switch,Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      {/*<Link to = '/hats'>Back to Hats</Link>*/}
      <button onClick = {e => {props.history.push('/hats')}}>Back to Hats</button>
      <h1>{props.match.params.hatid}</h1>
    </div>
  )
}

const Hats = (props) => {
  console.log(props)
    return (
      <div>
        <Link to={`${props.match.url}/17`}>To 17</Link>
        <h1>Hats</h1>
      </div>
    )
}

function App() {
  return (
    <div>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/hats/:hatid' component={HatsPage}/> 
          <Route  path='/hats' component={Hats}/> 
        </Switch>
    </div>
  );
}

export default App;
