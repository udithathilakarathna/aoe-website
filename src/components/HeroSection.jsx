import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

import hero1 from "../assets/foe.jpg";
import hero2 from "../assets/hero_image_1.jpg";
import hero3 from "../assets/hero_image_2.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "420px",
          md: "550px",
        },
        overflow: "hidden",
      }}
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1.5s ease-in-out",
            opacity: currentImage === index ? 1 : 0,
            transform: currentImage === index ? "scale(1)" : "scale(1.05)",
          }}
        />
      ))}

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.60), rgba(0,0,0,0.15))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "650px",
            ml: { xs: 1, md: 4 },
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 800,
              lineHeight: 1.1,
              fontSize: {
                xs: "42px",
                md: "65px",
              },
              mb: 2,
            }}
          >
            WELCOME TO <br />
            FACULTY OF <br />
            ENGINEERING
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#f3f3f3",
              fontSize: {
                xs: "15px",
                md: "18px",
              },
              lineHeight: 1.8,
              mb: 4,
              maxWidth: "550px",
            }}
          >
            The Engineering Students’ Association represents the students of the
            Faculty of Engineering at NSBM Green University, fostering academic,
            technical, and social excellence while promoting leadership,
            teamwork, and innovation.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#111",
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: "8px",

                "&:hover": {
                  backgroundColor: "#ececec",
                },
              }}
            >
              Explore Programs
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: "8px",

                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Slider Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: currentImage === index ? 26 : 10,
              height: 10,
              borderRadius: "20px",
              backgroundColor: currentImage === index ? "#38D66B" : "#fff",
              transition: "0.4s",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
