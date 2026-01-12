import * as React from "react";
import { styled } from "@mui/material/styles";
import logo from "../logo.svg";
import powersynth from "../static/powersynth.png"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../theme/AppTheme";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import NavToolbar from "./toolbar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import GitHub from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from "@mui/material/Icon";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import School from "@mui/icons-material/School";
import ListItemText from "@mui/material/ListItemText";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import dash from "../static/fsae-dash.png"
import zat from "../static/zat.png"
import avatarImg from "../static/me.png"
import Grid from "@mui/material/Grid"


const AboutMeContainer = styled(Stack)(({ theme }) => ({
  // height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  // minHeight: "100%",
  position: 'relative',
  minHeight: '100vn',
  width: '100%',
  padding: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2),
  },
  "&::before": {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    // display: 'flex',
    // height: '100%',
    zIndex: -1,
    // flexGrow: 1,
    // inset: 0,
    // minHeight: '100vh',
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    // <Box height={'100%'} width="100%">
    <AboutMeContainer >
      <Container maxWidth="lg" >
        <Card variant="outlined" sx={{ display: 'flex' }}>
          <Grid container >
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", minWidth: "25%", justifyContent: 'center' }}
              >
                <CardContent sx={{ display: "block" }}>
                  <Avatar
                    alt="Jan de Voor"
                    src={avatarImg}
                    sx={{
                      width: 150,
                      height: 150,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <Typography component="div" variant="h4" align="center">
                    Jan Paul de Voor
                  </Typography>
                  <Typography variant="subtitle1" component="div" align="center">
                    Graduate Research Assistant
                  </Typography>
                  <Typography variant="subtitle1" component="div" align="center">
                    Clemson University
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                      mt: 1,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Tooltip title="Google Scholar">
                      <IconButton
                        aria-label="google-scholar"
                        href="https://scholar.google.com/citations?hl=en&user=O0eGg0wAAAAJ"
                      >
                        <Icon className="fa-brands fa-google-scholar" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="GitHub">
                      <IconButton
                        aria-label="github"
                        href="https://github.com/JanPauldeVoor"
                      >
                        <GitHub />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Linked-In">
                      <IconButton
                        aria-label="linkedin"
                        href="https://www.linkedin.com/in/jan-de-voor"
                      >
                        <LinkedIn />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Box sx={{ alignItems: "center", mt: 1, ml: 1, pl: 1, pb: 2 }}>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 1 }}>
                    About Me
                  </Typography>
                  <Typography variant="h6" fontWeight={"normal"}>
                    Hello! I am a PhD student at Clemson University studying
                    Computer Science, and I am working under Dr. Mert Pesé in the
                    TigerSec lab. My research focus is Automotive embedded systems
                    security, focusing on Software Defined Vehicles and Zonal
                    Architecture. I’ve gained experience in embedded systems
                    software and hardware design through both academic and personal
                    projects. I have a passion for designing and 3D printing custom
                    components for more efficient and attractive solutions in my
                    work.
                  </Typography>
                  <Grid container>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box sx={{ alignItems: "center" }}>
                        <Typography
                          variant="h4"
                          sx={{ textDecoration: "underline", mb: 0 }}
                        >
                          Interests
                        </Typography>
                        <List sx={{ listStyleType: "disc", mt: 0, pl: 2 }}>
                          <ListItem
                            sx={{ display: "list-item", pb: 0 }}
                          >
                            <ListItemText>
                              Automotive Embedded Systems Security
                            </ListItemText>
                          </ListItem>
                          <ListItem
                            sx={{ display: "list-item", pb: 0 }}
                          >
                            <ListItemText>
                              Secure Embedded Systems
                            </ListItemText>
                          </ListItem>
                          <ListItem
                            sx={{ display: "list-item" }}
                          >
                            <ListItemText>
                              Secure Safety-Critcal Networking
                            </ListItemText>
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box sx={{ display: "block" }}>
                        <Typography
                          variant="h4"
                          sx={{ textDecoration: "underline", mb: 0 }}
                        >
                          Education
                        </Typography>
                        <List sx={{ width: "100%", display: 'block', pl: 0, ml: 0 }}>
                          <ListItem sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: '2.5rem' }}  >
                              <School />
                            </ListItemIcon>
                            <ListItemText primary={"PhD in Computer Science"} secondary="Clemson University, Expected December 2027" />
                          </ListItem>
                          <ListItem sx={{ pl: 0 }}>
                            <ListItemAvatar sx={{ minWidth: '2.5rem' }}>
                              <School />
                            </ListItemAvatar>
                            <ListItemText primary="B.S. Computer Science, Minor in Electrical Engineering" secondary="Clemson University, 2023" />
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card variant="outlined" sx={{ display: "flex", mt: 1 }}>
          <Stack display={'flex'} spacing={2} textAlign={'center'} justifyContent={'center'} width='100%'>
            <Box>
              <Typography variant='h3' fontWeight={'bold'}>
                Featured Projects
              </Typography>
            </Box>
            <Grid container spacing={2} >
              <Grid size={{ xs: 12, md: 4.8 }}>
                <Card >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image={dash}
                      alt='dash image'
                      sx={{ mb: 1 }}
                    />
                    <Typography gutterBottom variant='h5' component='div'>
                      Formula SAE Dash
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                      Real-time system monitoring for the Clemson Formula SAE team.
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }} >
                <Card >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image={powersynth}
                      alt='powersynth image'
                      sx={{ mb: 1 }}
                    />
                    <Typography gutterBottom variant='h5' component='div'>
                      Power-Synth
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                      Part Synthesizer and Part Nintendo Powerglove featuring a custom designed PCB.
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 4.1 }}>
                <Card >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image={zat}
                      alt='zat image'
                      sx={{ mb: 1 }}
                    />
                    <Typography gutterBottom variant='h5' component='div'>
                      Zonal Architecture Testbed
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                      Open-source hardware-agnostic testbed for Software Defined Vehicles.
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Card>
      </Container >
    </AboutMeContainer >
  );
}
