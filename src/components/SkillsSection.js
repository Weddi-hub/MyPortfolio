import React from 'react';
import { LinearProgress, Box, Typography, Container, Grid, Paper } from '@mui/material';
import '../components/style/SkillsSection.css';

const SkillsSection = () => {
  // Skill data - easily modifiable progress values
  const skillsData = [
    { category: 'Frontend', skills: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 100 },
      { name: 'CSS', level: 90 }
    ]},
    { category: 'Mobile', skills: [
      { name: 'Flutter', level: 89 },
      { name: 'Android XML', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Kotlin', level: 62 }
    ]},
    { category: 'Backend & Other', skills: [
      { name: 'Express JS', level: 82 },
      { name: 'Node JS', level: 82 },
      { name: 'C++', level: 90 },
      { name: 'C# ', level: 72 }
    ]}
  ];

  return (
    <section id="skills" className='skills-section'>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          className='skills-title'
          sx={{ 
            textAlign: 'center', 
            mb: 6,
            fontWeight: 'bold',
            color: '#483d8b',
            fontSize: { xs: '28px', sm: '36px', md: '48px' }
          }}
        >
          My Technical Skills
        </Typography>
        
        <Grid container spacing={4}>
          {skillsData.map((skillCategory, categoryIndex) => (
            <Grid item xs={12} sm={6} md={4} key={categoryIndex}>
              <Paper 
                elevation={3}
                className='skill-card'
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #483d8b 0%, #6a5acd 100%)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 2,
                    borderBottom: '2px solid rgba(255,255,255,0.3)',
                    pb: 1
                  }}
                >
                  {skillCategory.category}
                </Typography>
                
                {skillCategory.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex} sx={{ mb: skillIndex === skillCategory.skills.length - 1 ? 0 : 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography 
                        variant="body2" 
                        sx={{ color: 'white', fontWeight: 500 }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level}
                      sx={{
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#76ff03',
                          borderRadius: '4px'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SkillsSection;
