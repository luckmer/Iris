import React from "react";
import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";

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
              create new password
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container direction="column">
              <form className={classes.form} onSubmit={onSubmit}>
                <input className={classes.input} placeholder="new password" />
                <input
                  className={classes.input}
                  placeholder="confirm password"
                />
                <button className={classes.submit}>Login</button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginAuth;
