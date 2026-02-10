import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Phone } from '@mui/icons-material';
import {Link, useLocation, useNavigate} from "react-router-dom";
import ContactModal from '../ContactModal';
import '../style/HS.css'

// Import your logo image
import logoImage from '../images/W.png'; // Adjust the path to your image

const Header = () => {

  const [mobileOpen , setMobileopen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const HandleDrawerToggle = () =>{
    setMobileopen(!mobileOpen);
  }

  // Smooth scroll function
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    setMobileopen(false);
    
    if (location.pathname === '/') {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  // Smooth scroll to About
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    setMobileopen(false);
    
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  // Smooth scroll to Home
  const handleScrollToHome = (e) => {
    e.preventDefault();
    setMobileopen(false);
    
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  }

  // Navigate to Work page and scroll to top
  const handleScrollToWork = (e) => {
    e.preventDefault();
    setMobileopen(false);
    
    navigate('/Work');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  // Smooth scroll to Ratings
  const handleScrollToRatings = (e) => {
    e.preventDefault();
    setMobileopen(false);
    
    if (location.pathname === '/') {
      const ratingsSection = document.getElementById('ratings');
      if (ratingsSection) {
        ratingsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const ratingsSection = document.getElementById('ratings');
        if (ratingsSection) {
          ratingsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
  const drawer = (
    <Box onClick={HandleDrawerToggle} sx={{textAlign : 'center' , color:'white'}}>

          <Typography variant='h6' component='div' sx={{flexGrow:1, display: 'flex', alignItems: 'center', justifyContent: 'center'}} > 
            <img 
              src={logoImage} 
              alt="Logo" 
              style={{ 
                width: '26px', 
                height: '26px', 
                marginRight: '8px',
                verticalAlign: 'middle',
                minWidth: '26px'
              }} 
            />
            <span style={{ fontSize: '18px', fontWeight: 600 }}>WEDDI</span>
          </Typography>
          <Divider/>
                <ul className='mob_menu'>
                      <li>
                      <a href="#" onClick={handleScrollToHome} style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
                      </li> 
                      <li>
                      <a href="#" onClick={handleScrollToAbout} style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
                      </li>
                      <li>
                      <a href="#" onClick={handleScrollToSkills} style={{ textDecoration: 'none', color: 'inherit' }}>Skills</a>
                      </li>
                      <li>
                      <a href="#" onClick={handleScrollToWork} style={{ textDecoration: 'none', color: 'inherit' }}>Work</a>
                      </li>
                      <li>
                      <a href="#" onClick={handleScrollToRatings} style={{ textDecoration: 'none', color: 'inherit' }}>Ratings</a>
                      </li>
                </ul>

    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={ {bgcolor :"darkslateblue"} }>
          <Toolbar>
            <IconButton 
            sx={{color:'white' , mr:2 ,display :{sm:'none'}}}
             aria-label='open drawer' 
             edge='start'
             onClick={HandleDrawerToggle}
             >
            <MenuOpenIcon/>
            </IconButton>
          <Typography variant='h6' component='div' sx={{flexGrow:1, display: 'flex', alignItems: 'center'}} > 
            <img 
              src={logoImage} 
              alt="Logo" 
              style={{ 
                width: '28px', 
                height: '28px', 
                marginRight: '8px',
                verticalAlign: 'middle',
                minWidth: '28px'
              }} 
            />
            <span style={{ fontSize: 'clamp(14px, 4vw, 20px)', fontWeight: 600 }}>WEDDI</span>
          </Typography>

            <Box sx={{
              display: { xs: "none", sm: "flex" }, 
              flex: 1, 
              justifyContent: 'flex-start', 
              marginLeft: 2,
              alignItems: 'center'
            }}>
                <ul className='Nav_menu' style={{
                  display: 'flex',
                  flexDirection: 'row',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  gap: '25px',
                  alignItems: 'center',
                  width: '100%'
                }}>
                      <li style={{ margin: 0, listStyle: 'none' }}>
                      <a href="#" onClick={handleScrollToHome} style={{ 
                        textDecoration: 'none', 
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1ecc35';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'white';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}>Home</a>
                      </li> 
                      <li style={{ margin: 0, listStyle: 'none' }}>
                      <a href="#" onClick={handleScrollToAbout} style={{ 
                        textDecoration: 'none', 
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1ecc35';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'white';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}>About</a>
                      </li>
                      <li style={{ margin: 0, listStyle: 'none' }}>
                      <a href="#" onClick={handleScrollToSkills} style={{ 
                        textDecoration: 'none', 
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1ecc35';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'white';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}>Skills</a>
                      </li>
                      <li style={{ margin: 0, listStyle: 'none' }}>
                      <a href="#" onClick={handleScrollToWork} style={{ 
                        textDecoration: 'none', 
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1ecc35';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'white';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}>Work</a>
                      </li>
                      <li style={{ margin: 0, listStyle: 'none' }}>
                      <a href="#" onClick={handleScrollToRatings} style={{ 
                        textDecoration: 'none', 
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1ecc35';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'white';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}>Ratings</a>
                      </li>
                </ul>
            </Box>

            {/* Phone Contact Icon */}
            <IconButton
              onClick={() => setContactOpen(true)}
              sx={{
                color: '#fff',
                marginLeft: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              title="Contact Me"
            >
              <Phone />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
        <Drawer 
        variant='temporary' 
        open={mobileOpen} 
        onClose={HandleDrawerToggle}
        sx={{display : { xs : 'block' , sm : 'none'},
        "& .MuiDrawer-paper" : {
          boxSizing: "border-box",
          width : "260px",
          height : '100%',
          bgcolor: 'darkslateblue'
        }

      }
        }
        >
          {drawer}
        </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>

      {/* Contact Modal */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
        
    </div>
  )
}

export default Header