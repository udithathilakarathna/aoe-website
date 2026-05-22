import React from "react";
import "../club.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Clublogo from "../assets/aoe_logo.png";
import RE_Commitee from "../assets/RE_Club_Society commitee 2026.jpg";

import { Box, Typography } from "@mui/material";

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


      <Footer />
    </>
  );
};

export default RE_Club;