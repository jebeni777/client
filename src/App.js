
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { connect } from "react-redux";
import Home from "./containers/Home";
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
import NewsIngredient from "./containers/News/NewsIngredient";
import Recipe from "./containers/Recipe";
import User from "./containers/User";
import { loadAilments } from "./store/actions/ailmentActions";
import { loadIngredients } from "./store/actions/ingredientActions";
import { loadFoodChooser } from "./store/actions/foodChooserActions";
import { loadNutrients } from "./store/actions/nutrientActions";
import client from "./client";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

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
  newsIngredient,
  nutrients,
  nutriChooser,
  recipe,
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
      const ailments = client.fetch(`
        *[_type == 'ailments']{
          title, slug, image, imageAltText, body, nutrients, foods}`)
      const nutrients = client.fetch(`
            *[_type == 'nutrient']{
                title, slug, mainImage, imageAltText, ingredients, body}`)
      
      const foodGroups = client.fetch(`
            *[_type == 'categories-foods']{
                title, slug, image, imageAltText}`)
      
      const ingredients = client.fetch(`
                *[_type == 'ingredient']{
                    title, slug, mainImage, imageAltText, category->, body, nutrients, uses}`)
      loadFoodChooser(await foodGroups)
      loadNutrients(await nutrients)
      loadAilments(await ailments)
      loadIngredients(await ingredients)
    } catch (e) {
      if (e !== "No current user") {
        alert(e)
      }
    }
    // setIsLoading(false);
  };

  return (

    <MuiThemeProvider theme={theme}>
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

            <DashboardRoute path="/newsIngredient" exact component={NewsIngredient} />
            <DashboardRoute path="/recipe" exact component={Recipe} />
            <DashboardRoute path="/user" exact component={User} />
            <EmptyRoute component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return (
    {
      loadAilments: (ailments) => dispatch(loadAilments(ailments)),
      loadIngredients: (ingredients) => dispatch(loadIngredients(ingredients)),
      loadFoodChooser: (foodGroups) => dispatch(loadFoodChooser(foodGroups)),
      loadNutrients: (nutrients) => dispatch(loadNutrients(nutrients))

    }
  );
}

export default connect(null,
  mapDispatchToProps
)(App);
