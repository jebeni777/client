import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import JointsIcon from '@material-ui/icons/DirectionsWalk';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import stomach from "../../assets/stomach.svg";


const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    top: theme.spacing.unit * 8,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 8,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});

const myStyle = {
  height: "1.5em",
  weight: "1.5em"
}

const Sidebar = props => {
  const { open, classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        )
      }}
      open={open}
    >
      <List>
        <Link to="/joints">
          <ListItem button>
            <ListItemIcon>
              <JointsIcon />
            </ListItemIcon>
            <ListItemText primary="Joints" />
          </ListItem>
        </Link>
        <Link to="/heart">
          <ListItem button>
            <ListItemIcon>
              <HeartIcon />
            </ListItemIcon>
            <ListItemText primary="Heart" />
          </ListItem>
        </Link>
        <Link to="/memory">
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-brain"></i>
            </ListItemIcon>
            <ListItemText primary="Memory" />
          </ListItem>
        </Link>
        <Link to="/bones">
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-bone"></i>
            </ListItemIcon>
            <ListItemText primary="Bones" />
          </ListItem>
        </Link>
        <Link to="/nutrients">
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-drumstick-bite"></i>
            </ListItemIcon>
            <ListItemText primary="Nutrients" />
          </ListItem>
        </Link>
        <Link to="/foods">
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-carrot"></i>
            </ListItemIcon>
            <ListItemText primary="Foods" />
          </ListItem>
        </Link>
        <Link to="/digestive">
          <ListItem button>
            <ListItemIcon>
              <img src={stomach} style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Digestive" />
          </ListItem>
        </Link>
        <Link to="/Respiratory">
          <ListItem button>
            <ListItemIcon>
              <i class="fas fa-user-injured"></i>
            </ListItemIcon>
            <ListItemText primary="Respiratory" />
          </ListItem>
        </Link>

      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
