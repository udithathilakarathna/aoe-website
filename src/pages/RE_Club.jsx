import React from "react";
import "../club.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Clublogo from "../assets/aoe_logo.png";
import RE_Commitee from "../assets/RE_Club_Society_commitee 2026.jpg";
import Badge_Ceremony from "../assets/Badge_ceremony_RE.jpg";
import WAGSARA from "../assets/WAGSARA.png";
import MICphoto from "../assets/prabath.webp";
import REClub_President from "../assets/REClub_President.png";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";



const RE_Club = () => {

const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/aoensbm/', '_blank');
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          py: 10,
          px: 3,
          background: "linear-gradient(135deg, #e4eee4, #b3e0b3)",
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
            src={Clublogo}
            alt="Renewable Energy Society"
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
          RENEWABLE ENERGY <br />
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
          Ready to power the future? ⚡ The Renewable Energy Society is a community of forward-thinkers dedicated to green innovation and sustainability. We unite passionate minds to explore clean technology, drive environmental action, and shape a cleaner planet. Join us, collaborate, and be the spark that lights up tomorrow! 🌱🌍
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
      background: "linear-gradient(135deg, #4c6b16, #6fbf4b)",
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
      border: "2px solid #4c6b16",
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



<Box  sx={{
          py: 10,
          px: 3,
          background: "linear-gradient(135deg, #f2f6f2, #e8ece8)",
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
    src={RE_Commitee}
    alt="Renewable Energy Society Committee 2025/26"
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
    width: { xs: "95%", md: "75%" }, // 95% on mobile, 75% on desktop
    margin: "0 auto", // Centers the Box horizontally on the page
    borderRadius: "18px",
    backgroundColor: "#f9fafb", // Matches Tailwind's bg-gray-50
    overflow: "hidden", // Keeps everything neat inside the rounded corners
  }}
>
  <div className="flex flex-col items-center justify-center px-8 py-10 md:px-12 text-center">
    <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">
      The Renewable Energy Society Committee 2025/26
    </h2>
    <p className="text-[#525252] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
      Meet the minds powering our mission! The 2025/26 Renewable Energy Society Committee is a dedicated team of innovators championing sustainability. Together, we spearhead green initiatives, organize impactful events, and inspire our community to embrace a cleaner, brighter future. We are leading the charge for sustainable change! 🌱⚡
    </p>
  </div>
</Box>
  

</Box>





<Box
  sx={{
    py: { xs: 8, md: 12 }, // Slightly responsive padding (less on mobile, more on desktop)
    px: 3,
    background: "linear-gradient(135deg, #b5efb5, #334b33)",
    textAlign: "center",
  }}
>
  {/* Inner Vision Card */}
  <Box
    sx={{
      width: { xs: "95%", md: "75%", lg: "60%" }, // Added lg: "60%" so it doesn't get too wide on massive screens
      margin: "0 auto",
      borderRadius: "18px",
      backgroundColor: "#ceecc4",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)", // Adds a beautiful floating shadow over the gradient
    }}
  >
    <div className="flex flex-col items-center justify-center px-8 py-10 md:px-14 md:py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2d4223] mb-5">
        Renewable Energy Society's Vision
      </h2>
      <p className="text-[#3a4535] text-base font-bold md:text-lg md:leading-relaxed max-w-3xl mx-auto font-medium">
        To become a leading student society within the Faculty of Engineering that empowers future engineers to promote renewable energy, sustainability, and technological innovation for a greener and more responsible future.  
      </p>
    </div>
  </Box>
</Box>
<Box
      sx={{
        py: { xs: 8, md: 12 },
        // A soft, fresh gradient background to complement the green theme
        background: "linear-gradient(180deg, #f9fafb 0%, #eaf5e4 100%)", 
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: 800,
            color: "#2d4223", // Matches the Vision section heading
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
        minWidth: "450px", // Forces the card to stay this exact width
        maxWidth: "450px",
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
                src={Badge_Ceremony}
                alt="Badging Ceremony"
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
                  Badging Ceremony 2026
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  The Renewable Energy Society successfully held its Badging Ceremony in collaboration with the Robotics and Automation Society on 15th May 2026.
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#4c6b16",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none", // Removes the default ALL CAPS from MUI buttons
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#3d5712",
                      boxShadow: "0 6px 15px rgba(76, 107, 22, 0.3)",
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
        minWidth: "450px", // Forces the card to stay this exact width
        maxWidth: "450px",
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
                src={WAGSARA}
                alt="WAGSARA 2025"
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
                  WAGSARA 2025
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  The Renewable Energy Society successfully organized WAGSARA 2025, bringing together brilliant minds to discuss the future of sustainable technology.
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#4c6b16",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#3d5712",
                      boxShadow: "0 6px 15px rgba(76, 107, 22, 0.3)",
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


<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
  <Container maxWidth="lg">

    {/* ==========================================
        MIC'S NOTE SECTION
    ========================================== */}
    <Box sx={{ mb: 6 }}>
      <Typography
        sx={{
          color: "#4c6b16",
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
          color: "#0f172a",
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
          ENG. PRABHATH BUDDIKA
        </Typography>

        <Typography
          sx={{
            color: "#4c6b16",
            fontSize: "15px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Master in Charge, Renewable Energy Society
        </Typography>

        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#4c6b16",
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
          src={REClub_President}
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
          Mr. Chamika 123456
        </Typography>

        <Typography
          sx={{
            color: "#4c6b16",
            fontSize: "15px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          President, Renewable Energy Society
        </Typography>

        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#4c6b16",
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
          As the President of the Renewable Energy Society of the Faculty of Engineering, NSBM Green University, is a great honour to lead a team of passionate engineering undergraduates to advance renewable energy, sustainability and innovation. With the inspiration from NSBM's green university environment, our society strives to provide meaningful opportunities for students to build technical knowledge, leadership, teamwork and awareness through events, projects and collaborations. I sincerely appreciate the commitment of our newly appointed committee members and hope to collaborate with them to build an active and impactful Renewable Energy Society in the Faculty of Engineering.</Typography>
      </Grid>
    </Grid>

  </Container>
</Box>




      <Footer />
    </>
  );
};

export default RE_Club;