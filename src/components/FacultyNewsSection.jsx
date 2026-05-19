import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Button,
  IconButton,
} from "@mui/material";

import {
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

// Images
import news1 from "../assets/epl_2.jpg";
import news2 from "../assets/t_Shirt.jpeg";
import news3 from "../assets/epl_2.jpg";
import news4 from "../assets/epl_2.jpg";
import news5 from "../assets/epl_2.jpg";

const newsData = [
  {
    title:
      "Introducing the Official Engineering Faculty T-Shirt",
    image: news1,
    description:
      "Order your proudly represented Faculty of Engineering t-shirt.",
  },
  {
    title:
      "Engineering Premiere League 2026",
    image: news2,
    description:
      "Get ready for an electrifying cricket festival and engineering spirit.",
  },
  {
    title:
      "Join us at EPL 2026",
    image: news3,
    description:
      "Register now and participate in engineering sports events.",
  },
  {
    title:
      "Engineering Innovation Expo",
    image: news4,
    description:
      "Explore student innovation and research projects.",
  },
  {
    title:
      "Faculty Annual Awards Ceremony",
    image: news5,
    description:
      "Celebrating academic and extracurricular excellence.",
  },
];

const FacultyNewsSection = () => {
  const [startIndex, setStartIndex] =
    useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (
      startIndex <
      newsData.length - visibleCards
    ) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleNews = newsData.slice(
    startIndex,
    startIndex + visibleCards
  );

  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "#f5f6fa",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          sx={{
            color: "#4b79c9",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Faculty News
        </Typography>

        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 500,
            color: "#222",
            mb: 1,
          }}
        >
          Latest from the Faculty
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: "13px",
            mb: 4,
          }}
        >
          Events, achievements and
          announcements from NSBM
          Engineering.
        </Typography>

        {/* News Cards */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {visibleNews.map((news, index) => (
            <Card
              key={index}
              sx={{
                width: 320,
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #ececec",
                boxShadow: "none",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={news.image}
                alt="news"
                sx={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#222",
                    mb: 1,
                  }}
                >
                  {news.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "13px",
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  {news.description}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                  }}
                >
                  View More
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            gap: 2,
          }}
        >
          <IconButton
            onClick={prevSlide}
            disabled={startIndex === 0}
          >
            <ChevronLeft />
          </IconButton>

          {/* Dots */}
          {Array.from({
            length:
              newsData.length -
              visibleCards +
              1,
          }).map((_, index) => (
            <Box
              key={index}
              onClick={() =>
                setStartIndex(index)
              }
              sx={{
                width:
                  startIndex === index
                    ? 22
                    : 10,
                height: 10,
                borderRadius: "20px",
                backgroundColor:
                  startIndex === index
                    ? "#2f7d32"
                    : "#ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          ))}

          <IconButton
            onClick={nextSlide}
            disabled={
              startIndex >=
              newsData.length -
                visibleCards
            }
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default FacultyNewsSection;