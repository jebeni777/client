import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from '@material-ui/core/SvgIcon';
import teal from '@material-ui/core/colors/teal'
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  toolbarRoot: {
    paddingRight: 24
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  title: {
    flexGrow: 1,
    marginLeft: 55
  }
});

const imgStyle = {
  height: "1.5em",
  weight: "1.5em",
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
        {/* <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton> */}
        
        <Typography
          variant="body1"
          component="h1"
          color="inherit"
          noWrap
          className={classes.title}
        >
          <Link to="/"
            style={{ textDecoration: "none", color: teal[50]}}
          >
          Comfort Foods
          </Link>
        </Typography>

        <Link to="/">
          <IconButton aria-label="Home">
            <HomeIcon style={{ color: teal[50] }} />
          </IconButton>
        </Link>
        {/* <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <Link to="/user">
          <IconButton aria-label="User Form Report">
            <PersonIcon style={{ color: teal[50] }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
