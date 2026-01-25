import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { GitHub, Star, ForkRight, Launch } from '@mui/icons-material';
import Layout from '../components/layout/Layout';
import './style/WorkPage.css';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        // Fetch all repos (100 max per page, get first 2 pages)
        const response1 = await fetch('https://api.github.com/users/Weddi-hub/repos?sort=stars&order=desc&per_page=100&page=1');
        const response2 = await fetch('https://api.github.com/users/Weddi-hub/repos?sort=stars&order=desc&per_page=100&page=2');
        
        if (!response1.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data1 = await response1.json();
        const data2 = response2.ok ? await response2.json() : [];
        const allRepos = [...data1, ...data2];
        
        // Filter and sort - show all repos sorted by stars (filter out archived)
        const filteredProjects = allRepos
          .filter(repo => !repo.archived) // Only non-archived projects
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 15); // Limit to 15 projects
        
        setProjects(filteredProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub projects:', err);
        setError('Unable to fetch projects. Please try again later.');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      React: '#61dafb',
      'C#': '#239120',
      Java: '#b07219',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      TypeScript: '#3178c6',
      Kotlin: '#7f52ff',
      PHP: '#777bb4',
      Dart: '#00b4ab',
      Swift: '#fa7343',
    };
    return colors[language] || '#888888';
  };

  return (
    <Layout>
      <section id="work" className="work-section">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Header */}
          <Box className="work-header" sx={{ mb: 6, textAlign: 'center' }}>
            <Stack direction="row" justifyContent="center" alignItems="center" gap={1} sx={{ mb: 2 }}>
              <GitHub sx={{ fontSize: 40, color: '#333' }} />
              <Typography
                variant="h2"
                component="h1"
                className="work-title"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                My Projects
              </Typography>
            </Stack>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                fontWeight: 300,
                fontSize: { xs: '0.9rem', md: '1.1rem' },
              }}
            >
              Explore my latest work and contributions from GitHub
            </Typography>
          </Box>

          {/* Loading State */}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <Stack alignItems="center" gap={2}>
                <CircularProgress size={60} />
                <Typography>Loading projects...</Typography>
              </Stack>
            </Box>
          )}

          {/* Error State */}
          {error && !loading && (
            <Alert severity="error" sx={{ mb: 4 }}>
              {error}
            </Alert>
          )}

          {/* Projects Grid */}
          {!loading && projects.length > 0 && (
            <Grid container spacing={3}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card
                    className="project-card"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 28px rgba(102, 126, 234, 0.25)',
                      },
                    }}
                  >
                    {/* Card Header with Language Badge */}
                    <Box sx={{ p: 2.5, backgroundColor: '#f8f9ff', borderBottom: '1px solid #e0e0e0' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: '#1a1a1a',
                            wordBreak: 'break-word',
                            flex: 1,
                            pr: 1,
                          }}
                        >
                          {project.name}
                        </Typography>
                      </Stack>
                      {project.language && (
                        <Stack direction="row" gap={1} sx={{ mt: 1.5 }}>
                          <Chip
                            label={project.language}
                            size="small"
                            sx={{
                              backgroundColor: getLanguageColor(project.language),
                              color: '#fff',
                              fontWeight: 'bold',
                              fontSize: '0.75rem',
                            }}
                          />
                        </Stack>
                      )}
                    </Box>

                    {/* Card Content */}
                    <CardContent sx={{ flex: 1, pt: 2.5 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#555',
                          lineHeight: 1.6,
                          mb: 2,
                          minHeight: '60px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Stats */}
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          mt: 2,
                          pt: 2,
                          borderTop: '1px solid #eee',
                        }}
                      >
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <Star sx={{ fontSize: '18px', color: '#ffc107' }} />
                          <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333' }}>
                            {project.stargazers_count}
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={0.5}>
                          <ForkRight sx={{ fontSize: '18px', color: '#666' }} />
                          <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333' }}>
                            {project.forks_count}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>

                    {/* Card Actions */}
                    <CardActions sx={{ pt: 0, px: 2.5, pb: 2.5 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        endIcon={<Launch />}
                        onClick={() => window.open(project.html_url, '_blank')}
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: '#fff',
                          fontWeight: 'bold',
                          textTransform: 'none',
                          fontSize: '0.95rem',
                          py: 1,
                          '&:hover': {
                            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.4)',
                            transform: 'scale(1.02)',
                          },
                        }}
                      >
                        View Repository
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* No Projects State */}
          {!loading && projects.length === 0 && !error && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <GitHub sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
              <Typography variant="h6" color="textSecondary">
                No projects found
              </Typography>
            </Box>
          )}

          {/* View All on GitHub Button */}
          {!loading && projects.length > 0 && (
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Button
                size="large"
                variant="outlined"
                endIcon={<Launch />}
                onClick={() => window.open('https://github.com/Weddi-hub', '_blank')}
                sx={{
                  borderColor: '#667eea',
                  color: '#667eea',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#667eea',
                    color: '#fff',
                  },
                }}
              >
                View All Projects on GitHub
              </Button>
            </Box>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Work;