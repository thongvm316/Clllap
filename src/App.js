import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
       <Switch>
          <Route exact path='/' component={Login} />
       </Switch>
     </Router>
    </>
  );
}

export default App;
