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
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #f2f2f2",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "90px",
            }}
          >
            {/* Left Logo */}
            <Box
              component="img"
              src={leftLogo}
              alt="logo"
              sx={{
                height: 62,
                width: "auto",
                objectFit: "contain",
              }}
            />

            {/* Center Text */}
            <Box
              sx={{
                textAlign: "center",
                mt: 0.3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "29px",
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
                  fontSize: "16px",
                  color: "#666",
                  fontFamily: "Georgia, serif",
                  mt: 0.4,
                }}
              >
                Faculty of Engineering
              </Typography>
            </Box>

            {/* Right Logo */}
            <Box
              component="img"
              src={rightLogo}
              alt="logo"
              sx={{
                height: 62,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Green Navbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#39d66d",
          height: "38px",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: "38px !important",
              justifyContent: "flex-end",
              px: 0,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#1b1b1b",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  px: 1.5,
                  minWidth: "auto",

                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
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