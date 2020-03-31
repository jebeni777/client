import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Home from "./containers/Home";
import Setting from "./containers/Setting";
import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";
import Ailment from "./containers/Ailment";
import Chooser from "./containers/Chooser";
import Nutrients from "./containers/Nutrient";
import Ingredient from "./containers/Ingredient";
import Foods from "./containers/FoodsByCat";
import NutriChooser from "./containers/NutriChooser";
import FoodChooser from "./containers/FoodChooser";
import FoodsByCat from "./containers/FoodsByCat";
import User from "./containers/User";
// import Recipe from "./containers/Recipe";



const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
  render() {
    // console.log("Hello again")
    const { settings } = this.props;

    return (
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <DashboardRoute exact path="/" component={Home} />

              <DashboardRoute path="/chooser" exact component={Chooser} />
              <DashboardRoute path="/ailment/:id" exact component={Ailment} />

              <DashboardRoute path="/foods" exact component={Foods} />
              <DashboardRoute path="/foods/:id" exact component={Ingredient} />
              <DashboardRoute path="/foods/category/:id" exact component={FoodsByCat} />
              <DashboardRoute path="/foodChooser" exact component={FoodChooser} />

              <DashboardRoute path="/nutrients" exact component={NutriChooser} />
              <DashboardRoute path="/nutrients/:id" exact component={Nutrients} />
              {/* <DashboardRoute path="/recipe" exact component={Recipe} /> */}
              <DashboardRoute path="/setting" exact component={Setting} />
              <DashboardRoute path="/user" exact component={User} />
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
