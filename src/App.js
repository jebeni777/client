
import React, { useEffect } from "react";
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
import Foods from "./containers/FoodsByGroup";
import NutriChooser from "./containers/NutriChooser";
import FoodChooser from "./containers/FoodChooser";
import FoodsByGroup from "./containers/FoodsByGroup";
import User from "./containers/User";
import { loadAilments } from "./store/actions/ailmentActions";
import { loadIngredients } from "./store/actions/ingredientActions";
import { loadFoodChooser } from "./store/actions/foodChooserActions";
import { loadNutrients } from "./store/actions/nutrientActions";
import client from "./client";

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

function App({
  ailments,
  chooser,
  ingredients,
  foods,
  foodsByGroup,
  nutrients,
  nutriChooser,
  loadAilments,
  loadNutrients,
  loadIngredients,
  loadFoodChooser,
  history,
  ...props
}) {
  useEffect(() => {
    onLoad()
  }, [])
  async function onLoad() {
    try {
      const ailments = await client.fetch(`
        *[_type == 'ailments']{
          title, slug, image, imageAltText, body, nutrients, foods}`)
      loadAilments(ailments)
      const nutrients = await client.fetch(`
            *[_type == 'nutrient']{
                title, slug, mainImage, imageAltText, ingredients, body}`)
      loadNutrients(nutrients)
      const foodGroups = await client.fetch(`
            *[_type == 'categories-foods']{
                title, slug, image, imageAltText}`)
      loadFoodChooser(foodGroups)
      const ingredients = await client.fetch(`
                *[_type == 'ingredient']{
                    title, slug, mainImage, imageAltText, category, body, nutrients, uses}`)
      loadIngredients(ingredients)
    } catch (e) {
      if (e !== "No current user") {
        alert(e)
      }
    }
    // setIsLoading(false);
  };

  const { settings } = props;

  return (

    // <Route path={`nutrients/:nutrientName`} render={({ match }) => { const { nutrientName } = match.params    return <Nutrient nutrientName={nutrientName} />          }}       />

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
            <DashboardRoute path="/foods/category/:id" exact component={FoodsByGroup} />
            <DashboardRoute path="/foodChooser" exact component={FoodChooser} />

            <DashboardRoute path="/nutrients" exact component={NutriChooser} />
            <DashboardRoute path="/nutrients/:nutrient" exact component={Nutrients} />
            <DashboardRoute path="/setting" exact component={Setting} />
            <DashboardRoute path="/user" exact component={User} />
            <EmptyRoute component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = dispatch => {
  return (
    {
      loadAilments: (ailments) => dispatch(loadAilments(ailments)),
      loadIngredients: (ingredients) => dispatch(loadIngredients(ingredients)),
      loadFoodChooser: (foodGroups) => dispatch(loadFoodChooser(foodGroups)),
      loadNutrients: (nutrients) => dispatch(loadNutrients(nutrients))

    }
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
