import React, { useReducer, useEffect /* useContext */ } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
//import jwtDecode from "jwt-decode";



// Components
import AuthRoute from "./util/AuthRoute";

// Pages
import Landing from './pages/Landing'
import login from "./pages/login";
import signup from "./pages/signup";


// Contexts
import { Provider , /* userContext */} from './contexts/userContext';

// Reducers
import { userReducer, initialState as userInitState } from './reducers/userReducer';
import { uiReducer, initialState as uiInitState } from './reducers/uiReducer';

//import {SET_AUTHENTICATED} from "./types";

// Actions
//import {logoutUser} from "./actions/userAction";

//import Axios from "axios";

import combineReducers from 'react-combine-reducers';

const theme = createMuiTheme(themeFile);

// const token = localStorage.FBIdToken;

// if (token) {
  
//   const [ dispatch ] = useContext(userContext);

//   // DecodedToken stores when the token will expire along with details about the user and the token
//   const decodedToken = jwtDecode(token);

//   if (decodedToken.exp * 1000 < Date.now()) {
//     window.location.href = "/login";
//     logoutUser();
//   } else {
//     dispatch({ type: SET_AUTHENTICATED });
//     Axios.defaults.headers.common["Authorization"] = token;
    
//   }
// }

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
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
