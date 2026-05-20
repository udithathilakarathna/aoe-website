import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

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

const Navbar = () => {
  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #f2f2f2",
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
              alignItems: "center",
              justifyContent: "space-between",

              minHeight: {
                xs: "70px",
                md: "px",
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
                objectFit: "contain",
              }}
            />

            {/* CENTER TEXT */}
            <Box
              sx={{
                textAlign: "center",
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
                  fontFamily: "Georgia, serif",
                  color: "#1d2530",
                  lineHeight: 1.1,
                }}
              >
                Association Of Engineering
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    md: "16px",
                  },

                  color: "#666",
                  fontFamily: "Georgia, serif",
                  mt: 0.4,
                }}
              >
                Faculty of Engineering
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
                objectFit: "contain",
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
          backgroundColor: "#39d66d",
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
              justifyContent: "center",
              alignItems: "center",

              flexWrap: "wrap",

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
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#1b1b1b",
                  textTransform: "none",

                  fontSize: {
                    xs: "13px",
                    md: "14px",
                  },

                  fontWeight: "bold",

                  px: {
                    xs: 0.8,
                    md: 1.5,
                  },

                  py: 0.3,
                  minWidth: "auto",

                  "&:hover": {
                    backgroundColor:
                      "rgba(255,255,255,0.2)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;