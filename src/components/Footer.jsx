import React from "react";
import { Box, Typography, IconButton } from "@mui/material";

import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

// logos
import aoeLogo from "../assets/aoe_logo.png";
import nsbmLogo from "../assets/nsbm_logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#06164A",
        overflow: "hidden",
        mt: 4,
      }}
    >
      {/* MAIN FOOTER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minHeight: {
            xs: 140,
            md: 180,
          },
        }}
      >
        {/* LEFT WHITE SECTION */}
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#fff",
            width: {
              xs: "38%",
              md: "28%",
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            px: {
              xs: 1.5,
              md: 3,
            },

            py: 2,

            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              right: {
                xs: -25,
                md: -50,
              },

              width: {
                xs: 50,
                md: 100,
              },

              height: "100%",
              backgroundColor: "#fff",
              transform: "skewX(-20deg)",
            },
          }}
        >
          {/* logos */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 0.5,
                md: 1.5,
              },
              mb: {
                xs: 1,
                md: 2,
              },
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={aoeLogo}
              alt="aoe"
              sx={{
                height: {
                  xs: 38,
                  md: 60,
                },
              }}
            />

            <Box
              component="img"
              src={nsbmLogo}
              alt="nsbm"
              sx={{
                height: {
                  xs: 18,
                  md: 35,
                },
              }}
            />
          </Box>

          {/* title */}
          <Typography
            sx={{
              fontWeight: 700,
              color: "#222",
              lineHeight: 1.15,

              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "20px",
              },

              mb: 1,
              zIndex: 2,
            }}
          >
            Association of Engineering
          </Typography>

          {/* description */}
          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.7,
              zIndex: 2,

              fontSize: {
                xs: "8px",
                md: "12px",
              },

              maxWidth: {
                xs: "130px",
                md: "240px",
              },
            }}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </Typography>
        </Box>

        {/* RIGHT BLUE SECTION */}
        <Box
          sx={{
            width: {
              xs: "70%",
              md: "68%",
            },

            backgroundColor: "#06164A",

            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",

            px: {
              xs: 1,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",

              // move everything right
              justifyContent: "flex-end",

              width: "100%",

              ml: "auto",

              gap: {
                xs: 4,
                md: 10,
              },
            }}
          >
            {/* Explore */}
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1.2,

                  fontSize: {
                    xs: "8px",
                    md: "13px",
                  },
                }}
              >
                EXPLORE
              </Typography>

              {["About Us", "News", "Industry"].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#d7d7d7",
                    mb: 0.8,
                    cursor: "pointer",

                    fontSize: {
                      xs: "7px",
                      md: "12px",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* Other Directories */}
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1.2,

                  fontSize: {
                    xs: "8px",
                    md: "13px",
                  },
                }}
              >
                OTHER DIRECTORIES
              </Typography>

              {[
                "Virtual Faculty Tour",
                "Research & Publications",
                "Projects",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#d7d7d7",
                    mb: 0.8,
                    cursor: "pointer",

                    fontSize: {
                      xs: "7px",
                      md: "12px",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* Social */}
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1.2,

                  fontSize: {
                    xs: "8px",
                    md: "13px",
                  },
                }}
              >
                KEEP IN TOUCH
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: {
                    xs: 0.5,
                    md: 1.5,
                  },
                }}
              >
                {[Instagram, Facebook, LinkedIn].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",

                      width: {
                        xs: 24,
                        md: 42,
                      },

                      height: {
                        xs: 24,
                        md: 42,
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: {
                          xs: 14,
                          md: 20,
                        },
                      }}
                    />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
