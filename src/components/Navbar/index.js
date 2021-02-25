import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <Link
              variant="h5"
              href="/about"
              color="inherit"
              className={(window.location.pathname === "/about", classes.title)}
            >
              Robby Ray
            </Link>

            <Link
              variant="h6"
              href="/portfolio"
              color="inherit"
              className={
                (window.location.pathname === "/portfolio", classes.title)
              }
            >
              Portfolio
            </Link>

            <Link
              variant="h6"
              href="/contact"
              color="inherit"
              className={
                (window.location.pathname === "/contact", classes.title)
              }
            >
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
