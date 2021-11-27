import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const Login = () => {
  return (
    <Container>
      <Grid
        container
        style={{ heigh: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid style={{ width: 400, backgroundColor: "lightgray" }}>
          <Box p={5}>
            <Button variant={"outlined"}>Log In with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
