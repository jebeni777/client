import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// import stomach from "../../assets/stomach.svg";
// import bones from "../../assets/bones.svg";
// import joints from "../../assets/joints.svg";
// import heart from "../../assets/heart.svg";
// import lungs from "../../assets/lungs.svg";
import home from "../../assets/home.svg";
import food from "../../assets/food.svg";
import nutrient from "../../assets/nutrient.svg";
import ailment from "../../assets/ailment.svg";


const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    backgroundColor: "#B9BFE4",
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
  height: "1.7em",
  weight: "1.7em",
  backgroundColor: "#FFF"

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
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <img src={home} alt="home" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/chooser">
          <ListItem button>
            <ListItemIcon>
              <img src={ailment} alt="ailment" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Ailments" />
          </ListItem>
        </Link>
        <Link to="/nutrients">
          <ListItem button>
            <ListItemIcon>
              <img src={nutrient} alt="nutrient" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Nutrients" />
          </ListItem>
        </Link>
        <Link to="/foods">
          <ListItem button>
            <ListItemIcon>
              <img src={food} alt="foods" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Foods" />
          </ListItem>
        </Link>
        {/* <Link to="/digestive">
          <ListItem button>
            <ListItemIcon>
              <img src={stomach} alt="digestive" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Digestive" />
          </ListItem>
        </Link>
        <Link to="/respiratory">
          <ListItem button>
            <ListItemIcon>
              <img src={lungs} alt="respiratory" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Respiratory" />
          </ListItem>
        </Link>
        <Link to="/heart">
          <ListItem button>
            <ListItemIcon>
              <img src={heart} alt="heart" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Heart" />
          </ListItem>
        </Link>
        <Link to="/bones">
          <ListItem button>
            <ListItemIcon>
              <img src={bones} alt="bones" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Bones" />
          </ListItem>
        </Link>
        <Link to="/joints">
          <ListItem button>
            <ListItemIcon>
              <img src={joints} alt="joints" style={myStyle} />
            </ListItemIcon>
            <ListItemText primary="Joints" />
          </ListItem>
        </Link> */}

      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
