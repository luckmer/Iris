import React from "react";
import { Grid, Typography } from "@mui/material";
import useStyles from "./style";

interface Iprops {
  onSubmit: () => void;
}

const LoginAuth: React.FC<Iprops> = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid container direction="column" className={classes.container}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          className={classes.containerSpacer}
        >
          <Grid item>
            <Typography component="p" style={{ paddingBottom: 20 }}>
              Register!
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container direction="column">
              <form className={classes.form} onSubmit={onSubmit}>
                <input className={classes.input} placeholder="name" />
                <input className={classes.input} placeholder="userName" />
                <input className={classes.input} placeholder="password" />
                <input
                  className={classes.input}
                  placeholder="confirm Password"
                />
                <input className={classes.input} placeholder="email" />
                <button className={classes.submit}>Register</button>
              </form>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container style={{ paddingTop: 36 }} direction="column">
              <Typography component="p"> already have an account ?</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginAuth;
