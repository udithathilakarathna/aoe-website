import React from "react";
import "../club.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Clublogo from "../assets/RoboticClubLogo.png";
import RoboticsClubCommitee from "../assets/RoboticClub_com.jpg";
import ArduinoWorkshop from "../assets/ArduinoWorkshop.jpg";
import TracerX from "../assets/TracerX.jpg";
import OpenHangar from "../assets/OpenHangar.jpg";
import MICphoto from "../assets/isuru.webp";
import RoboticClub_President from "../assets/RoboticClub_President.jpg";


import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const Robotics_Club = () => {

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/roboticssocietynsbm/', '_blank');
  };



  return (<>
  
  <Navbar/>
  
   {/* logo , club name and club welcome */}
        <Box
          sx={{
            py: 10,
            px: 3,
            background: "linear-gradient(135deg, #bcd8ea, #93a2cf)",
            textAlign: "center",
          }}
        >
  
          {/* Logo Center */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <img
            width="250" 
            height="250"
              src={Clublogo}
              alt="Robotics and Automation Society"
              className="w-10 h-10 object-contain"
            />
          </Box>
  
          {/* Club Name Center */}
          <Typography
            sx={{
              fontSize: {
                xs: "32px",
                md: "56px",
              },
              fontWeight: 800,
              color: "#1d2530",
              textAlign: "center",
              mb: 3,
            }}
          >
            ROBOTICS & AUTOMATION <br />
            SOCIETY OF NSBM
          </Typography>
  
          {/* Description */}
          <Typography
            sx={{
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: {
                xs: "16px",
                md: "22px",
              },
              color: "#374151",
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            Welcome to the Robotics and Automation Club! We are a community of young innovators passionate about building the future.  Through exciting projects, our members learn mechanical design, programming, and artificial intelligence. Join us to explore smart technology, build working robots, and develop the skills needed to shape our world today. 🌍 🤖
            </Typography>
  
          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
  
           {/* Buttons */}
          <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 3,
      flexWrap: "wrap",
    }}
  >
    {/* WhatsApp */}
    <button
      onClick={handleWhatsAppClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 32px",
        border: "none",
        borderRadius: "14px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        color: "white",
        background: "linear-gradient(135deg, #082f91, #2c3ad4)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <FaWhatsapp className="text-2xl" />
      Join Us!
    </button>
  
    {/* Instagram */}
    <button
      onClick={handleInstagramClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 32px",
        border: "2px solid #1d3be9",
        borderRadius: "14px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        background: "white",
        color: "#1c1c1c",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      Stay Connected
      <FaInstagram className="text-2xl" />
    </button>
  </Box>
   </Box>
   </Box>


 {/* committee photo*/}

<Box  sx={{
          py: 10,
          px: 3,
          background: "linear-gradient(135deg, #ffffff, #e2ebf0)",
          textAlign: "center",
        }}
        
        >
 

<h1></h1>
        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mb: 3,
  }}
>
  <Box
    component="img"
    src={RoboticsClubCommitee}
    alt="Robotics and Automation Society Committee 2025/26"
    sx={{
      width: "75%",
      borderRadius: "18px",
      height: {
        xs: 350,
        md: 600,
      },
      objectFit: "cover",
    }}
  />
</Box>
    
   <Box
  sx={{
    width: { xs: "95%", md: "75%" }, 
    margin: "0 auto",
    borderRadius: "18px",
    backgroundColor: "#f9fafb", 
    overflow: "hidden", 
  }}
>
  <div className="flex flex-col items-center justify-center px-8 py-10 md:px-12 text-center">
    <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">
      The Robotics and Automation Society Committee 2025/26
    </h2>
    <p className="text-[#525252] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
      Meet the minds engineering our mission! The 2025/26 Robotics and Automation Club Committee is a dedicated team of creators championing technological innovation. Together, we build intelligent systems, organize impactful tech events, and inspire our community to embrace a smarter, automated future. We are coding and creating the technology of tomorrow! 🤖⚙️
      </p>
  </div>
</Box>
  

</Box>

 {/* Vision*/}

<Box
  sx={{
    py: { xs: 8, md: 12 }, // Slightly responsive padding (less on mobile, more on desktop)
    px: 3,
    background: "linear-gradient(135deg, #b5ccef, #33394b)",
    textAlign: "center",
  }}
>
  {/* Inner Vision Card */}
  <Box
    sx={{
      width: { xs: "95%", md: "75%", lg: "60%" }, // Added lg: "60%" so it doesn't get too wide on massive screens
      margin: "0 auto",
      borderRadius: "18px",
      backgroundColor: "#a0c9f4",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)", // Adds a beautiful floating shadow over the gradient
    }}
  >
    <div className="flex flex-col items-center justify-center px-8 py-10 md:px-14 md:py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2d4223] mb-5">
        Robotics and Automation Society's Vision
      </h2>
      <p className="text-[#3a4535] text-base font-bold md:text-lg md:leading-relaxed max-w-3xl mx-auto font-medium">
        “To inspire and develop students in the fields of robotics, automation, and emerging technologies through education, research, teamwork, and industry collaboration while fostering creativity, leadership, and technological innovation.”
        </p>
    </div>
  </Box>
</Box>

 {/* Events*/}

<Box
      sx={{
        py: { xs: 8, md: 12 },
        
        background: "linear-gradient(180deg, #f9fafb 0%, #e4ebf5 100%)", 
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: 800,
            color: "#232542", 
            mb: 8,
            textAlign: "center",
            letterSpacing: "-0.5px",
          }}
        >
          Our Events
        </Typography>

        {/* alignItems="stretch" ensures both cards are the exact same height */}
        <Grid container spacing={5} alignItems="stretch">
          
          {/* CARD 01 */}
          <Grid item xs={12} >
            <Card
              sx={{
        minWidth: "350px", // Forces the card to stay this exact width
        maxWidth: "350px",
        height: "100%", 
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0, // Prevents the card from squishing
        scrollSnapAlign: "center", // Snaps into place when scrolling
      }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={TracerX}
                alt="TracerX robot"
                sx={{
                  width: "100%",
                  height: 280, // Reduced from 420 for a better card aspect ratio
                  objectFit: "cover",
                }}
              />

              {/* CONTENT */}
              <CardContent 
                sx={{ 
                  p: { xs: 4, md: 5 }, // More breathing room inside the card
                  display: "flex", 
                  flexDirection: "column", 
                  flexGrow: 1 // Pushes the button to the bottom 
                }}
              >
                <Typography sx={{ fontSize: "24px", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                  Tracer X – Line Tracing Robot Competition
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  Organized by the Robotics and Automation Society, Tracer X challenges participants to design autonomous robots capable of accurately following complex paths with speed and precision.
                  </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#16266b",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none", // Removes the default ALL CAPS from MUI buttons
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#122157",
                      boxShadow: "0 6px 15px rgba(22, 26, 107, 0.3)",
                    },
                  }}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* CARD 02 */}
          <Grid item xs={12} >
            <Card
              sx={{
        minWidth: "350px", // Forces the card to stay this exact width
        maxWidth: "350px",
        height: "100%",
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0, // Prevents the card from squishing
        scrollSnapAlign: "center", // Snaps into place when scrolling
      }}
            >
              <Box
                component="img"
                src={ArduinoWorkshop}
                alt="Arduino Workshop"
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                }}
              />

              <CardContent 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  display: "flex", 
                  flexDirection: "column", 
                  flexGrow: 1 
                }}
              >
                <Typography sx={{ fontSize: "24px", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                 Arduino workshop
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  The Arduino Workshop was designed to introduce students to the fundamentals of microcontrollers, electronics, and programming using the Arduino platform. The session provided hands-on experience in circuit building, sensor interfacing, and basic automation projects, helping participants develop practical skills in embedded systems and robotics.</Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#1d166b",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#131257",
                      boxShadow: "0 6px 15px rgba(38, 22, 107, 0.3)",
                    },
                  }}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} >
            <Card
              sx={{
        minWidth: "350px", // Forces the card to stay this exact width
        maxWidth: "350px",
        height: "100%",
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0, // Prevents the card from squishing
        scrollSnapAlign: "center", // Snaps into place when scrolling
      }}
            >
              <Box
                component="img"
                src={OpenHangar}
                alt="Open Hangar Workshop – UAVs & AUVs (upcoming)"
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                }}
              />

              <CardContent 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  display: "flex", 
                  flexDirection: "column", 
                  flexGrow: 1 
                }}
              >
                <Typography sx={{ fontSize: "24px", fontWeight: 700, color: "#1a1a1a", mb: 2 }}>
                 Open Hangar Workshop – UAVs & AUVs (upcoming)
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  An interactive workshop focused on Unmanned Aerial Vehicles (UAVs) and Autonomous Underwater Vehicles (AUVs), providing students with exposure to modern autonomous technologies, design concepts, control systems, and real-world applications in robotics and automation.
                   </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#1a166b",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#121c57",
                      boxShadow: "0 6px 15px rgba(22, 29, 107, 0.3)",
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


 {/* note*/}

<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
  <Container maxWidth="lg">

    {/* ==========================================
        MIC'S NOTE SECTION
    ========================================== */}
    <Box sx={{ mb: 6 }}>
      <Typography
        sx={{
          color: "#16306b",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontSize: "14px",
          mb: 1,
        }}
      >
        Society Leadership
      </Typography>

      <Typography
        sx={{
          color: "#0f2a14",
          fontSize: { xs: "36px", md: "46px" },
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        MIC's Note
      </Typography>
    </Box>

    <Grid container spacing={8} alignItems="center">

      {/* IMAGE */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          component="img"
          src={MICphoto}
          alt="MIC"
          sx={{
            width: "100%",
            height: { xs: 350, md: 450 },
            borderRadius: "16px",
            objectFit: "cover",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        />
      </Grid>

      {/* TEXT */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "32px" },
            color: "#1e293b",
            fontFamily: "Georgia, serif",
            mb: 1,
          }}
        >
          ENG. Isuru Lakmal
        </Typography>

        <Typography
          sx={{
            color: "#16266b",
            fontSize: "15px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Master in Charge, Robotics and Automation Society
        </Typography>

        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#16236b",
            mb: 4,
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            color: "#64748b",
            lineHeight: 1.9,
            fontSize: "16px",
            textAlign: "justify",
          }}
        >
          Today, the world stands at a critical juncture. The realities of climate change and environmental degradation are no longer distant threats, making the transition to renewable and sustainable energy our most urgent global priority.

          <br /><br />

          Over the past year, the Renewable Energy Society has been a beacon of innovation and awareness. I have watched our students dedicate their time to researching alternative energy sources, organizing awareness campaigns, and bringing theoretical science into practical reality.
        </Typography>
      </Grid>
    </Grid>

    {/* ==========================================
        PRESIDENT'S NOTE SECTION
    ========================================== */}

    <Box sx={{ mt: { xs: 10, md: 16 }, mb: 6 }}>
      <Typography
        sx={{
          color: "#0f172a",
          fontSize: { xs: "36px", md: "46px" },
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        President's Note
      </Typography>
    </Box>

    <Grid container spacing={8} alignItems="center">

      {/* IMAGE */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          component="img"
          src={RoboticClub_President}
          alt="President"
          sx={{
            width: "100%",
            height: { xs: 350, md: 450 },
            borderRadius: "16px",
            objectFit: "cover",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        />
      </Grid>

      {/* TEXT */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "32px" },
            color: "#1e293b",
            fontFamily: "Georgia, serif",
            mb: 1,
          }}
        >
          Mr. Dulnath Manthila
        </Typography>

        <Typography
          sx={{
            color: "#162d6b",
            fontSize: "15px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          President, Robotics and Automation Society
        </Typography>

        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#16276b",
            mb: 4,
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            color: "#64748b",
            lineHeight: 1.9,
            fontSize: "16px",
            textAlign: "justify",
          }}
        >
         “The future belongs to innovators. Through the Robotics and Automation Society, we strive to build a platform where ideas transform into technology, and passion evolves into innovation.”
          </Typography>
      </Grid>
    </Grid>

  </Container>
</Box>










  <Footer />
  
  </>
  
    
   
  );
};

export default Robotics_Club;