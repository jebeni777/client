import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import 'typeface-roboto';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class MainLayout extends Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Header
            handleToggleDrawer={this.handleToggleDrawer}
          />
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: this.state.open
            })}
          >
            {children}
          </main>
        </div>
        <Sidebar open={this.state.open} drawerWidth={drawerWidth} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainLayout);
