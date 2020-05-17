import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import Landing from './pages/Landing'


// Components
import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";


// Contexts
import { Provider } from './contexts/userContext';

// Reducers
import { userReducer, initialState as userInitState } from './reducers/userReducer';
import { uiReducer, initialState as uiInitState } from './reducers/uiReducer';

import combineReducers from 'react-combine-reducers';

const theme = createMuiTheme(themeFile);

// TO-DO REFACTOR TO WORK WITH CONTEXT API
function App() {
  const [rootReducerCombined, initialStateCombined] = combineReducers({ user: [userReducer, userInitState], ui: [uiReducer, uiInitState] });
  const useCombinedState = useReducer(rootReducerCombined, initialStateCombined);

  return (
    <Provider value={useCombinedState}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="container">
           
            <Switch>
              <Route exact path="/" component={Landing} />
              <AuthRoute exact path="/login" component={login} />
              <AuthRoute exact path="/signup" component={signup} />
              <AuthRoute exact path="/profile" component={home} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
