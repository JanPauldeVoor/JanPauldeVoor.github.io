import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const pages = ["Home", "Projects", "Research", "Publications", "Contact"];

// Center the pages relative to the width of the device
// Not sure if this is the best way, but it is a working way
const StyledPages = styled("div")(({ theme }) => ({
  position: "absolute",
  marginRight: "50%",
  marginLeft: "50%",
  width: "100%",
  display: "flex",
  transform: "translate(-50%, 0%)",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

export default function NavToolbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 1000,
              letterSpacing: ".05rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Jan de Voor
          </Typography>
          <StyledPages>
            {pages.map((page) => (
              <Button
                key={page}
                href={page === "Home" ? "/" : "/" + page}
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "h4.fontSize",
                  textDecoration: "underline",
                }}
              >
                {page}
              </Button>
            ))}
          </StyledPages>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
