import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  Popper,
  Paper,
  ClickAwayListener,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import leftLogo from "../assets/nsbm_logo.png";
import rightLogo from "../assets/aoe_logo.png";

const navItems = [
  "Home",
  "Projects",
  "Clubs",
  "Research & Publications",
  "Industry",
  "About Us",
];

const clubItems = [
  "Association of Engineering Linguists",
  "IET On-Campus NSBM",
  "Civil Engineering Society",
  "Renewable Energy Society",
  "Robotics and Automation Society",
  "Frequency Music Band",
];

/* NAVBAR ROUTES */
const routes = {
  Home: "/",
  Projects: "/projects",
  "Research & Publications":
    "/research",
  Industry: "/industry",
  "About Us": "/about",
};

/* CLUB ROUTES */
const clubRoutes = {
  "Renewable Energy Society":
    "/re_club",

  "Robotics and Automation Society":
    "/robotics_club",
};

const Navbar = () => {
  const navigate =
    useNavigate();

  const [anchorEl, setAnchorEl] =
    useState(null);

  const [open, setOpen] =
    useState(false);

  const handleClubsOpen = (
    event
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderBottom:
            "1px solid #f2f2f2",

          py: {
            xs: 1,
            md: 2,
          },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems:
                "center",

              justifyContent:
                "space-between",

              minHeight: {
                xs: "70px",
                md: "90px",
              },
            }}
          >
            {/* LEFT LOGO */}
            <Box
              component="img"
              src={leftLogo}
              alt="logo"
              sx={{
                height: {
                  xs: 45,
                  md: 62,
                },

                width: "auto",
                objectFit:
                  "contain",
              }}
            />

            {/* CENTER TEXT */}
            <Box
              sx={{
                textAlign:
                  "center",

                flex: 1,
                px: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "22px",
                    md: "29px",
                  },

                  fontWeight: 800,

                  fontFamily:
                    "Georgia, serif",

                  color:
                    "#1d2530",

                  lineHeight: 1.1,
                }}
              >
                Association Of
                Engineering
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    md: "16px",
                  },

                  color: "#666",

                  fontFamily:
                    "Georgia, serif",

                  mt: 0.4,
                }}
              >
                Faculty of
                Engineering
              </Typography>
            </Box>

            {/* RIGHT LOGO */}
            <Box
              component="img"
              src={rightLogo}
              alt="logo"
              sx={{
                height: {
                  xs: 45,
                  md: 62,
                },

                width: "auto",
                objectFit:
                  "contain",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* GREEN NAVBAR */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor:
            "#39d66d",

          py: {
            xs: 0.5,
            md: 0,
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              flexWrap:
                "wrap",

              gap: {
                xs: 0.5,
                md: 1,
              },

              minHeight: {
                xs: "auto",
                md: "38px",
              },

              px: 0,
            }}
          >
            {navItems.map(
              (item) => (
                <Button
                  key={item}
                  onMouseEnter={
                    item ===
                    "Clubs"
                      ? handleClubsOpen
                      : undefined
                  }
                  onClick={() => {
                    if (
                      item !==
                        "Clubs" &&
                      routes[item]
                    ) {
                      navigate(
                        routes[
                          item
                        ]
                      );
                    }
                  }}
                  sx={{
                    color:
                      "#1b1b1b",

                    textTransform:
                      "none",

                    fontSize: {
                      xs: "13px",
                      md: "14px",
                    },

                    fontWeight:
                      "bold",

                    px: {
                      xs: 0.8,
                      md: 1.5,
                    },

                    py: 0.3,

                    minWidth:
                      "auto",

                    "&:hover":
                      {
                        backgroundColor:
                          "rgba(255,255,255,0.2)",
                      },
                  }}
                >
                  {item}
                </Button>
              )
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* CLUBS DROPDOWN */}
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
        sx={{
          zIndex: 9999,
        }}
      >
        <ClickAwayListener
          onClickAway={
            handleClose
          }
        >
          <Paper
            onMouseLeave={
              handleClose
            }
            sx={{
              mt: 1,

              width: {
                xs: "88vw",
                sm: 320,
                md: 380,
              },

              maxWidth:
                "380px",

              backgroundColor:
                "#07b857",

              borderRadius: {
                xs: "20px",
                md: "24px",
              },

              p: {
                xs: 2,
                md: 2.5,
              },

              boxShadow:
                "0px 10px 25px rgba(0,0,0,0.18)",
            }}
          >
            <Box
              sx={{
                borderLeft:
                  "2px solid rgba(255,255,255,0.5)",

                pl: 1.8,
              }}
            >
              {clubItems.map(
                (
                  club,
                  index
                ) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 1.2,
                    }}
                  >
                    <Typography
                      onClick={() => {
                        if (
                          clubRoutes[
                            club
                          ]
                        ) {
                          navigate(
                            clubRoutes[
                              club
                            ]
                          );

                          handleClose();
                        }
                      }}
                      sx={{
                        fontSize:
                          {
                            xs: "11px",
                            md: "15px",
                          },

                        fontWeight: 500,

                        color:
                          "#000",

                        cursor:
                          "pointer",

                        transition:
                          "0.2s",

                        "&:hover":
                          {
                            color:
                              "#fff",
                          },
                      }}
                    >
                      {club}
                    </Typography>

                    {index !==
                      clubItems.length -
                        1 && (
                      <Box
                        sx={{
                          width:
                            {
                              xs: "80px",
                              md: "120px",
                            },

                          borderBottom:
                            "2px solid rgba(255,255,255,0.4)",

                          mt: 0.6,
                        }}
                      />
                    )}
                  </Box>
                )
              )}
            </Box>

            {/* CANCEL BUTTON */}
            <Button
              onClick={
                handleClose
              }
              sx={{
                mt: {
                  xs: 0.5,
                  md: 1,
                },

                backgroundColor:
                  "#d7e7db",

                color:
                  "#000",

                borderRadius:
                  "14px",

                textTransform:
                  "none",

                px: 2,

                fontSize: {
                  xs: "11px",
                  md: "14px",
                },

                "&:hover":
                  {
                    backgroundColor:
                      "#cfe1d2",
                  },
              }}
            >
              ✕ Cancel
            </Button>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default Navbar;