import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";

import {
  ChevronLeft,
  ChevronRight,
  Close,
} from "@mui/icons-material";

// Images
import project1 from "../assets/project_1.jpg";
import project2 from "../assets/project_2.jpeg";
import project3 from "../assets/project_2.jpeg";
const projects = [
  {
    title: "NSBM Green Cart",
    image: project1,
    shortDescription:
      "NSBM Green University's first eco-solar powered electric cart.",
    fullDescription:
      "NSBM Green University's Faculty of Engineering proudly introduced the NSBM Green Cart — the university's first eco-solar powered electric cart. This innovative solution promotes sustainability and smart transportation while encouraging students to engage in real-world engineering innovation.",
  },
  {
    title: "Underwater System",
    image: project2,
    shortDescription:
      "An intelligent underwater exploration system.",
    fullDescription:
      "This underwater system is designed for deep-sea research and exploration, equipped with advanced sensors and communication capabilities.",
  },
  {
    title: "E Bike",
    image: project3,
    shortDescription:
      "Advanced electric bike with smart features.",
    fullDescription:
      "This innovative electric bike incorporates cutting-edge technology to provide a sustainable and efficient transportation solution.",
  },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [openDialog, setOpenDialog] =
    useState(false);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === projects.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? projects.length - 1
        : prev - 1
    );
  };

  return (
    <Box
      sx={{
        py: 8,
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
          Projects
        </Typography>

        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 500,
            color: "#222",
            mb: 1,
          }}
        >
          Student Projects
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: "13px",
            mb: 4,
          }}
        >
          Explore innovative student engineering
          projects developed through practical
          knowledge and technical expertise.
        </Typography>

        {/* Project Card */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid #ececec",
            position: "relative",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={projects[current].image}
            alt="project"
            sx={{
              width: "100%",
              height: 420,
              objectFit: "cover",
            }}
          />

          {/* Content */}
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#222",
              }}
            >
              {projects[current].title}
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#666",
                mt: 1,
                mb: 2,
                lineHeight: 1.8,
              }}
            >
              {
                projects[current]
                  .shortDescription
              }
            </Typography>

            <Button
              variant="outlined"
              onClick={() =>
                setOpenDialog(true)
              }
              sx={{
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              View More
            </Button>
          </Box>

          {/* Left Arrow */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              top: "50%",
              left: 20,
              transform:
                "translateY(-50%)",
              backgroundColor: "#fff",
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              top: "50%",
              right: 20,
              transform:
                "translateY(-50%)",
              backgroundColor: "#fff",
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 3,
          }}
        >
          {projects.map((_, index) => (
            <Box
              key={index}
              onClick={() =>
                setCurrent(index)
              }
              sx={{
                width:
                  current === index
                    ? 24
                    : 10,
                height: 10,
                borderRadius: "20px",
                backgroundColor:
                  current === index
                    ? "#2f7d32"
                    : "#ccc",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          ))}
        </Box>

        {/* Dialog */}
        <Dialog
          open={openDialog}
          onClose={() =>
            setOpenDialog(false)
          }
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {projects[current].title}

            <IconButton
              onClick={() =>
                setOpenDialog(false)
              }
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Box
              component="img"
              src={projects[current].image}
              sx={{
                width: "100%",
                borderRadius: "8px",
                mb: 3,
              }}
            />

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.9,
              }}
            >
              {
                projects[current]
                  .fullDescription
              }
            </Typography>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProjectsSection;