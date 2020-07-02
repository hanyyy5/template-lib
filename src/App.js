import React, { Suspense } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import WrapIndex from './pages/wrap';
import EditPage from './pages/edit';


import './App.css';

function App() {
  return (
    // <React.Fragment>
    //   <WrapIndex />
    // </React.Fragment>
    <React.Fragment>
        <Router>
          <Suspense>
            <Switch>
              <Route path="/edit" component={EditPage} />
              <Route path="/" component={WrapIndex} />
            </Switch>
          </Suspense>
        </Router>
    </React.Fragment>
  );
}

export default App;
