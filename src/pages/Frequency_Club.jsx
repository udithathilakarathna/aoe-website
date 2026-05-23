import React from "react";
import "../club.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Clublogo from "../assets/BandLogo.PNG";
import BandCommitee from "../assets/BandCommitee.jpg";

import Padura from "../assets/Padura.jpeg";
import FusionEventBand from "../assets/FusionEventBand.jpg";
import MICphoto from "../assets/Nipuni.jpg";
import Band_President from "../assets/BandPresident.jpg";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";



const Frequency_Club = () => {

 const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/frequency_band.25/', '_blank');
  };



  return (
    <>
      <Navbar />

     {/* logo , club name and club welcome */}

      <Box
          sx={{
            py: 10,
            px: 3,
            background: "linear-gradient(135deg, #888888, #bcbcbc)",
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
              color: "#0f1012",
              textAlign: "center",
              mb: 3,
            }}
          >
            FREQUENCY BAND <br />
            OF NSBM
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
              color: "#32353a",
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            Welcome to Frequency, the official music band of the Engineering Faculty! We blend technical precision with artistic passion, giving future engineers a vibrant creative outlet. From acoustic sessions to electrifying campus concerts, our talented student musicians unite the faculty, proving that great minds can engineer unforgettable melodies and harmonies.🎶🎙️
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
        background: "linear-gradient(135deg, #81848b, #3e3f4b)",
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
        border: "2px solid #4a4c56",
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
          background: "linear-gradient(135deg, #fafafb, #e3e4e5)",
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
    src={BandCommitee}
    alt="Band Committee 2025/26"
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
      Frequency Band Committee 2026/27
    </h2>
    <p className="text-[#525252] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
      "The heartbeat of Frequency lies in our passionate committee members. Balancing rigorous engineering studies with a love for the arts, this team works tirelessly behind the scenes. They handle everything from event logistics to audio engineering, ensuring every performance hits the perfect note and brings our faculty together. 🎸⚡"
       </p>
  </div>
</Box>
  

</Box>

 {/* vision*/}

<Box
  sx={{
    py: { xs: 8, md: 12 }, // Slightly responsive padding (less on mobile, more on desktop)
    px: 3,
    background: "linear-gradient(135deg, #bcbcbc, #0e0e0e)",
    textAlign: "center",
  }}
>
  {/* Inner Vision Card */}
  <Box
    sx={{
      width: { xs: "95%", md: "75%", lg: "60%" }, // Added lg: "60%" so it doesn't get too wide on massive screens
      margin: "0 auto",
      borderRadius: "18px",
      backgroundColor: "#c4c4c4",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)", // Adds a beautiful floating shadow over the gradient
    }}
  >
    <div className="flex flex-col items-center justify-center px-8 py-10 md:px-14 md:py-16 text-center">
      <h2 className="fw-bold text-white mb-4 display-6">
        Bands Vision 
      </h2>
      <p className="text-[#3a4535] text-base font-bold md:text-lg md:leading-relaxed max-w-3xl mx-auto font-medium">
       " Vision of the Frequency Band: To be the creative heartbeat of the Faculty of Engineering at NSBM Green University, inspiring students through music that bridges tradition and modernity. The band envisions a vibrant platform where engineering minds unite in rhythm, fostering collaboration, cultural pride, and artistic innovation. By harmonizing diverse talents, Frequency strives to uplift the university community and showcase the power of music as both expression and connection. "
        </p>
    </div>
  </Box>
</Box>

 {/* events*/}

<Box
      sx={{
        py: { xs: 8, md: 12 },
        
        background: "linear-gradient(180deg, #f9fafb 0%, #a4a4a4 100%)", 
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
        minWidth: "550px", // Forces the card to stay this exact width
        maxWidth: "550px",
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
                src={Padura}
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
                  පැදුර
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  
                  Where nostalgia meets rhythm. This is a journey back in time🎷. An enchanting unplugged cultural evening that celebrates the richness of Sri Lankan heritage. Set in an intimate atmosphere adorned with traditional woven mats, Padura brings together acoustic melodies and communal storytelling to create a heartfelt experience. 
                  
                  </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#505152",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none", // Removes the default ALL CAPS from MUI buttons
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#585858",
                      boxShadow: "0 6px 15px rgba(71, 71, 71, 0.3)",
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
        minWidth: "550px", // Forces the card to stay this exact width
        maxWidth: "550px",
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
                src={FusionEventBand}
                alt="FusionEventBand)"
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
                 Fusion 2025
                </Typography>

                <Typography sx={{ color: "#525252", fontSize: "16px", lineHeight: 1.8, mb: 4, flexGrow: 1 }}>
                  
                  A Signature Experience: Hosted by the Frequency Band of the Faculty of Engineering at NSBM Green University, Fusion is a vibrant cultural showcase where tradition meets modern artistry. By blending Sri Lankan rhythms with contemporary sounds, the event creates an electrifying atmosphere that celebrates creativity, diversity, and innovation. 
                  
                  </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#535354",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#535353",
                      boxShadow: "0 6px 15px rgba(90, 90, 92, 0.3)",
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


 {/* Note*/}

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
          Ms. Nipuni Fernando
        </Typography>

        <Typography
          sx={{
            color: "#4d4d4c",
            fontSize: "15px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Master in Charge, Frequency Band 
        </Typography>

        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#575853",
            mb: 4,
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            color: "#515151",
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
          color: "#17181a",
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
          src={Band_President}
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
            color: "#1e1e1f",
            fontFamily: "Georgia, serif",
            mb: 1,
          }}
        >
          Mr. Sandil Dissanayake 
        </Typography>

        <Typography
          sx={{
            color: "#474747",
            fontSize: "15px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          President, Frequency Band 
        </Typography>

        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#4f4d4d",
            mb: 4,
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            color: "#434141",
            lineHeight: 1.9,
            fontSize: "16px",
            textAlign: "justify",
          }}
        >
        “Frequency”, the official music band of the Faculty of Engineering, is a platform where engineering students who are passionate about music can perform and showcase their talents and skills.
As a band, we represent the spirit of our faculty through musical performances and events. Our band is committed to enhancing the university experience by contributing to orientations, open days, and other faculty events.
We encourage our band members to develop teamwork, musical abilities, and positive personal qualities while working together as a united team.

As the President of the Faculty of Engineering Music Band, I am proud to lead a group of talented musicians who continuously work hard to success of the band.

        
         </Typography>
      </Grid>
    </Grid>

  </Container>
</Box>












      <Footer />
    </>
  );
};

export default Frequency_Club;