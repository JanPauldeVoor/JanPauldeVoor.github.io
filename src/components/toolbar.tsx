import * as React from 'react';
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box'
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
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              display: { xs: 'none', md: 'flex' },
              fontFamily: "monospace",
              fontWeight: 1000,
              letterSpacing: ".05rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Jan de Voor
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='navigation menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom', horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={page === "Home" ? "/" : "/" + page}

                >
                  <Typography
                    sx={{
                      textAlign: 'center'
                    }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: "monospace",
              fontWeight: 1000,
              letterSpacing: ".05rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1
            }}
          >
            Jan de Voor
          </Typography>
          <StyledPages>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={page === "Home" ? "/" : "/" + page}
                  sx={{
                    my: 2,
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
            </Box>
          </StyledPages>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
