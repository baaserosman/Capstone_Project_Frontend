import { Grid, TextField, Button } from "@mui/material";
import { Form } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../utils/data";
import { AuthContext } from "../../context/AuthContext";

const SignUpForm = (props) => {
  const { values, handleChange, handleBlur, errors, touched } = props;
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser ? navigate("/") : navigate("/register");
    console.log(currentUser);
  }, [currentUser]);

  const handleRegister = () => {
    createUser(values.username, values.password);
    // navigate("/");
    console.log(values.username, values.password);
  };

  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            type="email"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            id="password2"
            label="Confirm Password"
            name="password2"
            variant="outlined"
            type="password"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password2 && errors.password2}
            error={touched.password2 && Boolean(errors.password2)}
            fullWidth
          />
        </Grid> */}

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleRegister}
            fullWidth
            sx={{ bgcolor: "#056582", fontWeight: "bold", boxShadow: "" }}
          >
            REGISTER
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUpForm;
