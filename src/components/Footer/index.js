import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FaceBookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Facebook"
        href="https://www.facebook.com/robert.r.ray.98"
        target="_blank"
        icon={<FaceBookIcon />}
      />
      <BottomNavigationAction
        label="GitHub"
        href="https://github.com/rgr5035"
        target="_blank"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        href="https://www.linkedin.com/in/robertgordonray/"
        target="_blank"
        icon={<LinkedInIcon />}
      />
    </BottomNavigation>
  );
}
