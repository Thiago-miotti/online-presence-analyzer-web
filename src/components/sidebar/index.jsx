import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./style.css";
import NubankLogo from "../../Assets/NuBankLogo.jpeg";
import gollogo from "../../Assets/gollogo.jpeg";
import ifoodlogo from "../../Assets/ifoodlogo.jpeg";
import magalulogo from "../../Assets/magalulogo.jpeg";
import uberlogo from "../../Assets/uberlogo.jpeg";
import vivologo from "../../Assets/vivologo.jpeg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="sidebar">
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key={"NuBank"}>
          <ListItemIcon>
            <img src={NubankLogo} />
          </ListItemIcon>
          <ListItemText primary="NuBank" />
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItem button key={"Gol"}>
          <ListItemIcon>
            <img src={gollogo} />
          </ListItemIcon>
          <ListItemText primary="Gol" />
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItem button key={"Ifood"}>
          <ListItemIcon>
            <img src={ifoodlogo} />
          </ListItemIcon>
          <ListItemText primary="ifood" />
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItem button key={"Magalu"}>
          <ListItemIcon>
            <img src={magalulogo} />
          </ListItemIcon>
          <ListItemText primary="Magalu" />
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItem button key={"Uber"}>
          <ListItemIcon>
            <img src={uberlogo} />
          </ListItemIcon>
          <ListItemText primary="Uber" />
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <List>
        <ListItem button key={"Vivo"}>
          <ListItemIcon>
            <img src={vivologo} />
          </ListItemIcon>
          <ListItemText primary="Vivo" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

export default Sidebar;
