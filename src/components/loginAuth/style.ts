import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: 650,
    width: "600px !important",
    background: "white",
    borderRadius: 12,
    padding: 12,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    marginTop: 12,
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    border: "1px solid #cfd9de",
  },

  containerSpacer: {
    maxWidth: 364,
    margin: "auto",
  },

  submit: {
    marginTop: 12,
    borderRadius: 100,
    background: "#0f1419",
    border: "none",
    minHeight: 36,
    color: "white",
    cursor: "pointer",

    "&:hover": {
      background: "#161d24",
    },
  },
  PasswordRestart: {
    marginTop: 12,
    borderRadius: 100,
    background: "#ffff",
    border: "1px solid #cfd9de",
    minHeight: 36,
    color: "#0f1419",
    cursor: "pointer",
    transition: "all 0.5s ease",
    "&:hover": {
      background: "#cfd9de",
    },
  },
});
export default useStyles;
