import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import LoadingScreen from "./screens/LoadingScreen";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import store from "./store/Store";
import { createTheme } from "./theme/Theme";

class App extends Component {
  state = {
    loading: false,
    uilabels: {}
  };

  componentDidMount = () => {};

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        {!loading && (
          <Provider store={store}>
            <MuiThemeProvider theme={createTheme()}>
              <Routes />
            </MuiThemeProvider>
          </Provider>
        )}
        {loading && <LoadingScreen />}
      </div>
    );
  }
}

export default App;
