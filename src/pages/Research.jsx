import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const committeeMembers = [
  {
    role: "Chair",
    image:
      "data:image/jpeg;base64,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",
  },

  {
    role: "Co-chair",
    image:
      "data:image/jpeg;base64,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",
  },

  {
    role: "Chief Editor",
    image:
      "data:image/jpeg;base64,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",
  },

  {
    role: "Secretary",
    image:
      "data:image/jpeg;base64,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",
  },
];

const Research = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          py: 5,
          backgroundColor: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: {
                xs: "32px",
                md: "56px",
              },

              fontWeight: 800,
              color: "#1d2530",
              mb: 1,
            }}
          >
            RESEARCH & PUBLICATIONS
          </Typography>

          <Typography
            sx={{
              color: "#666",
              mb: 4,
              fontSize: "18px",
            }}
          >
            TIDAC Research Conference
          </Typography>

          <Box
            component="img"
            src="https://www.nsbm.ac.lk/wp-content/uploads/2025/11/NSBM-Hosts-TIDAC-Research-Conference3.jpg"
            alt="Research"
            sx={{
              width: "100%",
              borderRadius: "18px",

              height: {
                xs: 250,
                md: 500,
              },

              objectFit: "cover",
            }}
          />
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Box
        sx={{
          py: 7,
          backgroundColor: "#f7f7f7",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "44px",
              },

              fontWeight: 700,
              color: "#1976d2",
              mb: 3,
            }}
          >
            About TIDAC
          </Typography>

          <Typography
            sx={{
              color: "#666",
              lineHeight: 2,
              fontSize: "17px",
              textAlign: "justify",
            }}
          >
            Welcome to the TIDAC Research Conference, where pioneering minds converge to explore the latest breakthroughs and advancements across diverse disciplines in engineering and architecture/interior design fields. This conference serves as a platform for researchers, academicians, industry professionals, and students to exchange ideas, showcase their work, and foster collaborations that push the boundaries of knowledge and innovation.
          </Typography>
        </Container>
      </Box>

      {/* COMMITTEE SECTION */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "44px",
              },

              fontWeight: 700,
              mb: 5,
              color: "#1d2530",
            }}
          >
            Committee
          </Typography>

          <Grid
            container
            spacing={9.4}
            justifyContent="space-between"
          >
            {committeeMembers.map(
              (member, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                >
                  <Card
                    sx={{
                      borderRadius: "14px",
                      overflow: "hidden",

                      boxShadow:
                        "0px 4px 15px rgba(0,0,0,0.08)",

                      transition: "0.3s",

                      backgroundColor: "#fff",

                      "&:hover": {
                        transform:
                          "translateY(-8px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.role}
                      sx={{
                        width: "100%",
                        height: 230,
                        objectFit: "cover",
                      }}
                    />

                    <CardContent
                      sx={{
                        textAlign: "center",
                        py: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#1976d2",
                          mt: 0.5,
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        {member.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>

      {/* PAST CONFERENCE */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#f7f7f7",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#6c7ae0",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Past Conferences
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "28px",
                md: "42px",
              },

              fontWeight: 700,
              color: "#1d2530",
              mb: 4,
            }}
          >
            TIDAC Research Conference 2025
          </Typography>

          <Box
            component="img"
            src="https://www.nsbm.ac.lk/wp-content/uploads/2025/11/NSBM-Hosts-TIDAC-Research-Conference17-1200x599.jpg"
            alt="Conference"
            sx={{
              width: "100%",
              borderRadius: "18px",
              mb: 4,
            }}
          />

          <Typography
  sx={{
    color: "#666",
    lineHeight: 2,
    fontSize: "16px",
    textAlign: "justify",
  }}
>
  In a celebration of innovation and intellect,
  the Faculty of Engineering at NSBM Green
  University hosted the TIDAC Research
  Conference 2025, a premier forum on
  "Technology Innovations & Digitalization
  Accompanying Creativity." Held on 13th
  November 2025, the conference focused on
  "Bridging the Gap: Engineering, Design &
  Society," highlighting the integration of
  technology, creativity, and societal impact.
</Typography>

<Typography
  sx={{
    color: "#666",
    lineHeight: 2,
    fontSize: "16px",
    textAlign: "justify",
    mt: 3,
  }}
>
  The conference commenced with a prestigious
  inauguration ceremony at the NSBM
  Auditorium, setting an inspiring tone for
  the day's proceedings. The Keynote Address
  was delivered by Dr. Har Amrit Singh
  Sandhu, President of the ASCE India Section
  and Assistant Professor in the Department
  of Civil Engineering at Punjab Engineering
  College, India. Adding further depth to the
  event, the Guest Speech was delivered by
  Archt. Prof. Harsha Munasinghe from the
  School of Architectural Studies, George
  Brown College, Toronto, Canada.
</Typography>

<Typography
  sx={{
    color: "#666",
    lineHeight: 2,
    fontSize: "16px",
    textAlign: "justify",
    mt: 3,
  }}
>
  The event was graced by the esteemed
  presence of Prof. E. A. Weerasinghe,
  Vice Chancellor of NSBM Green University;
  Prof. Chaminda Rathnayake, Deputy Vice
  Chancellor; Prof. Baratha Dodankotuwa,
  Head of Academic Development and Quality
  Assurance; and Dr. Chandana Perera,
  Dean of the Faculty of Engineering,
  along with other distinguished members
  of the NSBM academic community.
</Typography>

<Typography
  sx={{
    color: "#666",
    lineHeight: 2,
    fontSize: "16px",
    textAlign: "justify",
    mt: 3,
  }}
>
  TIDAC Research Conference 2025 featured
  technical sessions across five key tracks:
  Emerging Technologies in Artificial
  Intelligence, Data Science, and the
  Internet of Things; Energy, Electrical,
  and Power Engineering; Mechatronics and
  Control Engineering; Civil Engineering &
  Architecture; and a dedicated Poster
  Session.
</Typography>

<Typography
  sx={{
    color: "#666",
    lineHeight: 2,
    fontSize: "16px",
    textAlign: "justify",
    mt: 3,
  }}
>
  The successful organization of the TIDAC
  Research Conference 2025 was achieved
  through the guidance and coordination of
  Conference Chair, Dr. Malsha Mendis;
  Co-Chair, Eng. (Mr.) Iman Ashly;
  Conference Secretary, Eng. (Ms.) Nipuni
  Fernando; Chief Editor, Dr. Udara
  Arachchige; and the dedicated organizing
  team of the Faculty of Engineering.
</Typography>
        </Container>
      </Box>

      {/* LATEST NEWS SECTION */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#1976d2",
              fontSize: "14px",
              fontWeight: 600,
              mb: 1,
              letterSpacing: 1,
            }}
          >
            Announcements
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "32px",
                md: "48px",
              },

              fontWeight: 700,
              color: "#1d2530",
              mb: 1,
            }}
          >
            Latest News
          </Typography>

          <Typography
            sx={{
              color: "#777",
              mb: 5,
              fontSize: "15px",
            }}
          >
            Events, achievements and
            announcements from NSBM Engineering
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* CARD 01 */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  backgroundColor: "#fff",

                  boxShadow:
                    "0px 4px 15px rgba(0,0,0,0.08)",

                  transition: "0.3s",

                  display: "flex",
                  flexDirection: "column",
                  height: "100%",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://tidac.nsbm.ac.lk/wp-content/uploads/2025/06/TIDAC-_FOE_SELECTED-2025-01-1.jpg"
                  alt="news"
                  sx={{
                    width: "100%",
                    height: 420,
                    objectFit: "contain",
                    backgroundColor: "#fff",
                    p: 1,
                  }}
                />

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#1d2530",
                      mb: 2,
                    }}
                  >
                    Important Dates
                  </Typography>

                  <Typography
                    sx={{
                      color: "#666",
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    Order yours now and proudly
                    represent the Faculty of
                    Engineering.
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#39d66d",
                      color: "#1d2530",
                      borderRadius: "10px",
                      px: 3,

                      "&:hover": {
                        backgroundColor:
                          "#39d66d",
                        borderColor:
                          "#39d66d",
                      },
                    }}
                  >
                    View More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* CARD 02 */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  backgroundColor: "#fff",

                  boxShadow:
                    "0px 4px 15px rgba(0,0,0,0.08)",

                  transition: "0.3s",

                  display: "flex",
                  flexDirection: "column",
                  height: "100%",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://i1.rgstatic.net/publication/401580370_Nanoencapsulation_Strategies_to_Overcome_Antibiotic_Resistance_in_Multidrug-Resistant_Bacterial_Infections_A_Comprehensive_Review/links/69a969d99dbbcf74a3528ec5/largepreview.png"
                  alt="news"
                  sx={{
                    width: "100%",
                    height: 420,
                    objectFit: "contain",
                    backgroundColor: "#fff",
                    p: 1,
                  }}
                />

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#1d2530",
                      mb: 2,
                    }}
                  >
                    Engineering Premier League
                    2026
                  </Typography>

                  <Typography
                    sx={{
                      color: "#666",
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    Get ready for an electrifying
                    day of cricket and fierce
                    competition.
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#39d66d",
                      color: "#1d2530",
                      borderRadius: "10px",
                      px: 3,

                      "&:hover": {
                        backgroundColor:
                          "#39d66d",
                        borderColor:
                          "#39d66d",
                      },
                    }}
                  >
                    View More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CONTACT SECTION */}
      <Box
        sx={{
          py: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: {
                xs: "26px",
                md: "34px",
              },

              fontWeight: 700,
              color: "#1d2530",

              mb: 7,

              fontFamily: "Georgia, serif",
            }}
          >
            Contact For More Information
          </Typography>

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              gap: {
                xs: 5,
                md: 18,
              },
            }}
          >
            {/* LEFT LOGO */}
            <Grid
              item
              xs={12}
              md={7.5}
            >
              <Box
                component="img"
                src="https://tidac.nsbm.ac.lk/wp-content/uploads/2024/03/cropped-TIDAC-PNG-1.png"
                alt="TIDAC"
                sx={{
                  width: "100%",
                  maxWidth: 320,
                  objectFit: "contain",
                }}
              />
            </Grid>

            {/* DETAILS */}
            <Grid
              item
              xs={12}
              md={4.5}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "26px",
                    md: "28px",
                  },

                  fontWeight: 600,
                  color: "#1d2530",

                  mb: 0.7,

                  fontFamily:
                    "Georgia, serif",
                }}
              >
                Eng. Nipuni Fernando
              </Typography>

              <Typography
                sx={{
                  color: "#1976d2",
                  fontSize: "15px",

                  letterSpacing: 1,

                  mb: 2,
                }}
              >
                Conference Secretary
              </Typography>

              <Box
                sx={{
                  width: 55,
                  height: 4,
                  backgroundColor: "#39d66d",

                  borderRadius: "20px",

                  mb: 4,
                }}
              />

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "17px",
                  mb: 2,
                }}
              >
                Mobile : 070 444 5351
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "17px",
                  mb: 2,
                }}
              >
                Email : tidac@nsbm.ac.lk
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "17px",
                  lineHeight: 1.8,
                }}
              >
                Location : NSBM Green
                University, Homagama, Sri Lanka
              </Typography>
            </Grid>

            {/* BUTTON */}
            <Grid
              item
              xs={12}
              md={2.5}
              sx={{
                display: "flex",

                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },

                alignItems: "flex-start",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#f28c34",
                  color: "#fff",

                  px: 4,
                  py: 1.8,

                  borderRadius: "12px",

                  fontSize: "12px",

                  textTransform: "none",

                  fontWeight: 600,

                  boxShadow:
                    "0px 6px 18px rgba(242,140,52,0.35)",

                  "&:hover": {
                    backgroundColor:
                      "#e2781f",
                  },
                }}
              >
                🌐 Explore More!
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Research;