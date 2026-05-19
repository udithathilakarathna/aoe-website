import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// Images
import img1 from "../assets/course_1.jpg";
import img2 from "../assets/course_2.jpg";
import img3 from "../assets/course_2.jpg";

// ----------------------
// Department 1
// ----------------------
const mechatronicPrograms = [
  {
    title:
      "BSc (Engineering) (Hons) in Mechatronic Engineering – (Offered by NSBM Green University)",
    image: img1,
    link: "https://www.nsbm.ac.lk/course/bsc-engineering-honours-in-mechatronic-engineering/",
  },
  {
    title:
      "BEng (Hons) Civil and Structural Engineering – (Offered by Plymouth University – United Kingdom)",
    image: img2,
    link: "#",
  },
  {
    title:
      "BEng (Hons) Mechanical and Mechatronics Engineering – (Offered by Plymouth University – United Kingdom)",
    image: img3,
    link: "#",
  },
  {
    title:
      "BEng (Hons) Robotics and Automation Engineering (Offered by Plymouth University – United Kingdom)",
    link: "#",
  },
  {
    title: "BEng (Hons) Automotive Engineering (Plymouth – United Kingdom)",
    link: "#",
  },
  {
    title:
      "BEng (Hons) Naval Architecture and Marine Engineering (Plymouth – United Kingdom)",
    link: "#",
  },
];

// ----------------------
// Department 2
// ----------------------
const electricalPrograms = [
  {
    title:
      "BSc (Engineering) (Hons) Electrical and Electronic Engineering – (Offered by NSBM Green University)",
    link: "#",
  },
  {
    title:
      "BSc Engineering (Hons) Computer Systems Engineering – (Offered by NSBM Green University)",
    link: "#",
  },
  {
    title:
      "BEng (Hons) Electrical, Electronics, and Communication Engineering (Plymouth – United Kingdom)",
    link: "#",
  },
  {
    title:
      "BEng (Hons) Electronic and Computer Engineering (Plymouth – United Kingdom)",
    link: "#",
  },
];

// ----------------------
// Reusable Program Card
// ----------------------
const ProgramCard = ({ title, image, link }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 250,
        borderRadius: "8px",
        border: "1px solid #e6e6e6",
        boxShadow: "none",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          height: 165,
          backgroundColor: "#ececec",
        }}
      >
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt="program"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 1.5 }}>
        <Typography
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "12px",
            textAlign: "center",
            lineHeight: 1.4,
            textDecoration: "none",
            color: "#222",
            display: "block",
            cursor: "pointer",

            "&:hover": {
              color: "#2e7d32",
              textDecoration: "underline",
            },
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

// ----------------------
// Main Component
// ----------------------
const DegreePrograms = () => {
  return (
    <Box
      sx={{
        py: 7,
        backgroundColor: "#f5f6fa",
      }}
    >
      <Container maxWidth="lg">
        {/* Small Label */}
        <Typography
          sx={{
            color: "#5d8bd4",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: 1,
            textTransform: "uppercase",
            mb: 0.8,
          }}
        >
          Academic Pathways
        </Typography>

        {/* Main Title */}
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#222",
            mb: 1,
          }}
        >
          Degree Programmes
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#6d6d6d",
            fontSize: "12px",
            mb: 4,
          }}
        >
          Three specialized honours programmes designed to build deep technical
          expertise and adaptability for a changing world.
        </Typography>

        {/* Department 1 */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#6a4d7a",
            mb: 2.5,
          }}
        >
          Department of Mechatronic and Industrial Engineering
        </Typography>

        <Grid container spacing={2.5}>
          {mechatronicPrograms.map((program, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <ProgramCard {...program} />
            </Grid>
          ))}
        </Grid>

        {/* Department 2 */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#6a4d7a",
            mt: 5,
            mb: 2.5,
          }}
        >
          Department of Electrical, Electronic & Systems Engineering
        </Typography>

        <Grid container spacing={2.5}>
          {electricalPrograms.map((program, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <ProgramCard {...program} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DegreePrograms;
