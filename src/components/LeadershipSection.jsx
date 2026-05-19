import React from "react";
import { Box, Typography, Container, Card } from "@mui/material";

// Images
import deanImage from "../assets/dean.jpg";
import hod1 from "../assets/isuru.webp";
import hod2 from "../assets/prabath.webp";

const LeadershipSection = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#f5f6fa",
      }}
    >
      <Container maxWidth="lg">
        {/* ============================= */}
        {/* Dean's Message */}
        {/* ============================= */}

        <Typography
          sx={{
            color: "#4b79c9",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Leadership
        </Typography>

        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 500,
            color: "#222",
            mb: 3,
          }}
        >
          Dean’s Message
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            mb: 8,
          }}
        >
          {/* Dean Image */}
          <Box
            component="img"
            src={deanImage}
            alt="Dean"
            sx={{
              width: 180,
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />

          {/* Dean Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#222",
              }}
            >
              Dr. Chandana Perera
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                color: "#4b79c9",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Dean — Faculty of Engineering
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                color: "#5f5f5f",
                lineHeight: 1.9,
                textAlign: "justify",
              }}
            >
              As the need for flexible, multidisciplinary,
              global education increased, NSBM Professional
              Education expanded its portfolio of programmes
              and reached out to meet the demand through the
              Faculty of Engineering. The Faculty of Engineering
              is able to support partnerships that result in
              excellent academic programs, cutting-edge
              research, and meaningful ties to the industry.
              Together, we built a faculty that fosters
              interdisciplinary collaborations to address
              complex engineering challenges.
            </Typography>
          </Box>
        </Box>

        {/* ============================= */}
        {/* Heads of Department */}
        {/* ============================= */}

        <Typography
          sx={{
            color: "#2f7d32",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Department Leadership
        </Typography>

        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#222",
            mb: 4,
          }}
        >
          Heads of Department
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Card 1 */}
          <Card
            sx={{
              width: 500,
              minHeight: 520,
              p: 4,
              borderRadius: "10px",
              border: "1px solid #ececec",
              boxShadow: "none",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            {/* Image Area */}
            <Box
              sx={{
                height: 260,
                backgroundColor: "#f3f5f9",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={hod1}
                alt="hod"
                sx={{
                  maxHeight: 180,
                  objectFit: "contain",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#222",
                mb: 1,
              }}
            >
              Dr. Isuru Lakamal
            </Typography>

            <Typography
              sx={{
                color: "#4b79c9",
                fontSize: "12px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              HoD — Mechatronics and Industrial Engineering
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Typography>
          </Card>

          {/* Card 2 */}
          <Card
            sx={{
              width: 500,
              minHeight: 520,
              p: 4,
              borderRadius: "10px",
              border: "1px solid #ececec",
              boxShadow: "none",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            {/* Image Area */}
            <Box
              sx={{
                height: 260,
                backgroundColor: "#f3f5f9",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={hod2}
                alt="hod"
                sx={{
                  maxHeight: 180,
                  objectFit: "contain",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#222",
                mb: 1,
              }}
            >
              Eng (Mr) Prabath Buddhika
            </Typography>

            <Typography
              sx={{
                color: "#4b79c9",
                fontSize: "12px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              HoD — Electrical, Electronic & Systems Engineering
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadershipSection;