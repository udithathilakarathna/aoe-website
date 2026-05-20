import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* WHITE SECTION */}
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#fff",

            width: {
              xs: "100%",
              md: "36%", // increased for title space
            },

            minHeight: {
              xs: 120, // smaller mobile footer
              md: 220,
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            px: {
              xs: 2,
              md: 4,
            },

            py: {
              xs: 1.5,
              md: 3,
            },

            zIndex: 2,

            "&::after": {
              content: '""',
              position: "absolute",

              // MOBILE
              bottom: -20,
              left: 0,

              width: "100%",
              height: {
                xs: 20,
                md: "100%",
              },

              backgroundColor: "#fff",

              clipPath: {
                xs: "polygon(0 0, 100% 0, 100% 100%)",
                md: "none",
              },

              // DESKTOP
              top: {
                md: 0,
              },

              bottom: {
                md: "auto",
              },

              left: {
                md: "auto",
              },

              right: {
                md: -40,
              },

              width: {
                md: 80,
              },

              transform: {
                md: "skewX(-20deg)",
              },

              zIndex: 1,
            },
          }}
        >
          {/* LOGOS */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: {
                xs: 1,
                md: 2,
              },
            }}
          >
            <Box
              component="img"
              src={aoeLogo}
              alt="AOE Logo"
              sx={{
                height: {
                  xs: 28,
                  md: 60,
                },
                width: "auto",
              }}
            />

            <Box
              component="img"
              src={nsbmLogo}
              alt="NSBM Logo"
              sx={{
                height: {
                  xs: 12,
                  md: 35,
                },
                width: "auto",
              }}
            />
          </Box>

          {/* TITLE */}
          <Typography
            sx={{
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.2,
              mb: 1,

              fontSize: {
                xs: "14px",
                md: "24px",
              },

              wordBreak: "break-word",
            }}
          >
            Association of Engineering
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              color: "#666",
              lineHeight: 1.6,

              fontSize: {
                xs: "10px",
                md: "13px",
              },

              maxWidth: {
                xs: "100%",
                md: "260px",
              },
            }}
          >
            Our vision is to provide convenience and
            help increase your sales business.
          </Typography>
        </Box>

        {/* BLUE SECTION */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "64%",
            },

            backgroundColor: "#06164A",

            px: {
              xs: 2,
              md: 6,
            },

            py: {
              xs: 2,
              md: 0,
            },

            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",

              display: "flex",

              flexDirection: {
                xs: "row",
                md: "row",
              },

              justifyContent: "space-between",

              alignItems: "flex-start",

              gap: {
                xs: 2,
                md: 8,
              },

              pl: {
                xs: 0,
                md: 10,
              },
            }}
          >
            {/* EXPLORE */}
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1,

                  fontSize: {
                    xs: "9px",
                    md: "14px",
                  },
                }}
              >
                EXPLORE
              </Typography>

              {["About Us", "News", "Industry"].map(
                (item) => (
                  <Typography
                    key={item}
                    sx={{
                      color: "#d7d7d7",
                      mb: 0.5,

                      fontSize: {
                        xs: "8px",
                        md: "13px",
                      },

                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>

            {/* DIRECTORIES */}
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1,

                  fontSize: {
                    xs: "9px",
                    md: "14px",
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
                    mb: 0.5,

                    fontSize: {
                      xs: "8px",
                      md: "13px",
                    },

                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* SOCIAL */}
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1,

                  fontSize: {
                    xs: "9px",
                    md: "14px",
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
                {[Instagram, Facebook, LinkedIn].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        color: "#fff",
                        border:
                          "1px solid rgba(255,255,255,0.2)",

                        width: {
                          xs: 28,
                          md: 44,
                        },

                        height: {
                          xs: 28,
                          md: 44,
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
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;