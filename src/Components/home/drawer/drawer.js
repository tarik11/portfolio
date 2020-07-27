import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./drawer.css";
import drawerImage from "../../../assets/Drawer.svg";
import profileImage from "../../../assets/profile.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const history = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemIcon>
          <img src={profileImage} className="profile_image__drawer"></img>
        </ListItemIcon>
        <ListItemText />
      </List>
      <Divider />
      <List>
        <ListItem button onClick={props.buttonClick1}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
        <ListItem button onClick={props.buttonClick2}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            history.push("/projects");
            window.scrollTo(0, 0);
          }}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="drawer-button">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={drawerImage} className="image-button__drawer"></img>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
