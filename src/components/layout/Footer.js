import { Box, Typography, IconButton, Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

const Footer = () => {
  const email = 'Weddi5455@gmail.com';

  // Social media links
  const socialLinks = {
    github: 'https://github.com/Weddi-hub',
    linkedin: 'https://www.linkedin.com/in/waleed-ahmed-322120374',
    instagram: 'https://www.instagram.com/weddi_0/',
    email: `mailto:${email}`
  };

  // Handle email click
  const handleEmailClick = () => {
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`, '_blank');
  };

  // Handle social links
  const handleSocialClick = (platform) => {
    if (platform === 'email') {
      handleEmailClick();
    } else {
      window.open(socialLinks[platform], '_blank');
    }
  };

  return (
    <>
      <Box 
        sx={{ 
          textAlign: "center", 
          color: 'white', 
          bgcolor: 'darkslateblue',
          p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          width: '100%',
          position: 'relative',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        {/* Icons Section - Responsive */}
        <Box 
          sx={{ 
            my: { xs: 1, sm: 2, md: 3 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 1, sm: 2, md: 3 }, // Responsive gap between icons
            "& svg": {
              fontSize: { xs: '20px', sm: '24px', md: '28px' }, // Responsive icon size
              cursor: 'pointer',
              transition: 'all 400ms',
              '&:hover': {
                color: "blue",
                transform: "translateY(-5px)",
              }
            }
          }}
        >
          {/* For mobile: Stack vertically on very small screens */}
          <Stack 
            direction="row" // Always horizontal/row
            spacing={{ xs: 1, sm: 2, md: 3 }}
            alignItems="center"
            justifyContent="center"
            width="100%"
            sx={{ flexWrap: 'wrap' }}
          >
            <IconButton 
              color="inherit" 
              aria-label="Instagram"
              onClick={() => handleSocialClick('instagram')}
              sx={{ 
                p: { xs: 0.5, sm: 1 },
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
            
            <IconButton 
              color="inherit" 
              aria-label="LinkedIn"
              onClick={() => handleSocialClick('linkedin')}
              sx={{ 
                p: { xs: 0.5, sm: 1 },
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            
            <IconButton 
              color="inherit" 
              aria-label="GitHub"
              onClick={() => handleSocialClick('github')}
              sx={{ 
                p: { xs: 0.5, sm: 1 },
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            
            <IconButton 
              color="inherit" 
              aria-label="Email"
              onClick={handleEmailClick}
              sx={{ 
                p: { xs: 0.5, sm: 1 },
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <MailIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Box>

        {/* Text Section - Responsive */}
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { 
              xs: '0.75rem',   // Mobile
              sm: '0.875rem',  // Tablet
              md: '1rem'       // Desktop
            },
            mt: { xs: 1, sm: 2 },
            px: { xs: 1, sm: 2 },
            fontWeight: 300,
            letterSpacing: { xs: 0.5, sm: 1 }
          }}
        >
          All Rights Reserved &copy; WEDDI PORTFOLIO
        </Typography>

        {/* Optional: Add copyright year and extra info */}
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            fontSize: { xs: '0.625rem', sm: '0.75rem' },
            mt: { xs: 0.5, sm: 1 },
            opacity: 0.8
          }}
        >
          {new Date().getFullYear()} • Made with ❤️
        </Typography>
      </Box>
    </>
  )
}

export default Footer