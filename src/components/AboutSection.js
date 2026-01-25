import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import './style/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Main Title */}
        <Typography
          variant="h2"
          component="h1"
          className="about-title"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: '#483d8b',
            fontSize: { xs: '28px', sm: '36px', md: '48px' }
          }}
        >
          About Me
        </Typography>

        {/* Main Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              className="about-card"
              sx={{
                p: 4,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #483d8b 0%, #6a5acd 100%)',
                color: 'white',
                height: '100%'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  pb: 2,
                  borderBottom: '2px solid rgba(255,255,255,0.3)'
                }}
              >
                Who Am I?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.95)'
                }}
              >
                Hello! I'm Waleed Ahmed, a passionate Computer Science student with a deep interest in software development and problem-solving. I believe in continuous learning and pushing the boundaries of what's possible through code.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.95)',
                  mt: 2
                }}
              >
                With a strong foundation in multiple programming languages and frameworks, I'm dedicated to building efficient, scalable, and user-friendly applications. Every project is an opportunity to learn something new and create lasting impact.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              className="about-card"
              sx={{
                p: 4,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6a5acd 0%, #483d8b 100%)',
                color: 'white',
                height: '100%'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  pb: 2,
                  borderBottom: '2px solid rgba(255,255,255,0.3)'
                }}
              >
                My Journey
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.95)'
                }}
              >
                I started my programming journey with a curiosity about how technology works. Since then, I've worked on diverse projects spanning web development, mobile applications, and backend systems.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.95)',
                  mt: 2
                }}
              >
                My passion lies in creating solutions that make a difference. I'm constantly exploring new technologies and best practices to enhance my skills and deliver exceptional results.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Interests Section */}
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: '#483d8b'
          }}
        >
          What I'm Interested In
        </Typography>

        <Grid container spacing={2} sx={{ mb: 6 }}>
          {[
            'Web Development',
            'Mobile Apps',
            'Backend Systems',
            'Database Design',
            'Cybersecurity',
            'Artificial Intelligence',
          ].map((interest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                className="interest-tag"
                sx={{
                  p: 2.5,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #76ff03 0%, #00ff88 100%)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(118, 255, 3, 0.3)'
                  }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    fontSize: '16px'
                  }}
                >
                  {interest}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #483d8b 0%, #6a5acd 100%)',
            borderRadius: '12px',
            color: 'white'
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Let's Connect!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.95)',
              mb: 3
            }}
          >
            Whether you have a project idea, want to collaborate, or just want to say hello, feel free to reach out through my social media or email.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            I'm always open to new opportunities and collaborations!
          </Typography>
        </Paper>
      </Container>
    </section>
  );
};

export default AboutSection;
