import './App.css';
// import Sidebar from './sidebar/Sidebar';
import Login from './pages/Login';
// import MessageSender from './components/messageSender/MessageSender';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Home from './Home/Home';
import SignUp from './pages/SignUp';

function App() {
  const user = true;
  // const userId = useParams();
  return (
    <Router>
      <div className="app">
        <Switch>
          {
            !user ?
              <Route exact component={() => <Login />} />
              :
              <Route exact path='/' component={() => <Home />} />
          }
          <Route exact path='/signUp' component={() => <SignUp />} />
          <Route exact path='/:userId' component={Home} />



          {/* {
            !user ?
              <Route>
                <Login />
              </Route>
              :
              <>
                <Route>
                  <Sidebar />
                  <MessageSender />
                </Route>
              </>
          } */}
        </Switch>

      </div>
    </Router>

  );
}

export default App;