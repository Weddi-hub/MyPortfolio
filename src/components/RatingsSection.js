import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid, 
  Rating, 
  Stack,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import { Star, Send, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { database } from '../firebase-config';
import { ref, push, onValue } from 'firebase/database';
import './style/RatingsSection.css';

const RatingsSection = () => {
  // Form states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Display states
  const [ratings, setRatings] = useState([]);
  const [loadingRatings, setLoadingRatings] = useState(true);
  const [sliderIndex, setSliderIndex] = useState(0);

  // Fetch ratings from Firebase
  useEffect(() => {
    const ratingsRef = ref(database, 'ratings');
    
    const unsubscribe = onValue(
      ratingsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const ratingsArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));
          // Sort by newest first
          ratingsArray.sort((a, b) => b.timestamp - a.timestamp);
          setRatings(ratingsArray);
        } else {
          setRatings([]);
        }
        setLoadingRatings(false);
      },
      (error) => {
        console.error('Error fetching ratings:', error);
        setLoadingRatings(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Handle form submission
  const handleSubmitRating = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim()) {
      setSubmitError('Please enter your name');
      return;
    }
    if (rating === 0) {
      setSubmitError('Please select a rating');
      return;
    }
    if (!feedback.trim()) {
      setSubmitError('Please provide your feedback');
      return;
    }
    if (feedback.trim().length < 10) {
      setSubmitError('Feedback must be at least 10 characters');
      return;
    }

    setLoading(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const ratingsRef = ref(database, 'ratings');
      await push(ratingsRef, {
        name: name.trim(),
        company: company.trim() || 'Not specified',
        rating: rating,
        feedback: feedback.trim(),
        timestamp: Date.now()
      });

      // Reset form
      setName('');
      setCompany('');
      setRating(0);
      setFeedback('');
      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting rating:', error);
      setSubmitError('Failed to submit rating. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ratings" className="ratings-section">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box className="ratings-header" sx={{ mb: 6, textAlign: 'center' }}>
          <Stack direction="row" justifyContent="center" alignItems="center" gap={1} sx={{ mb: 2 }}>
            <Star sx={{ fontSize: 40, color: '#FFB800' }} />
            <Typography
              variant="h2"
              component="h1"
              className="ratings-title"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Client Ratings
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
            Share your experience and help others learn about my work
          </Typography>
        </Box>

        {/* Form Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              className="rating-form-container"
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: '#333',
                }}
              >
                Submit Your Feedback
              </Typography>

              {submitSuccess && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you! Your rating has been submitted successfully! 🎉
                </Alert>
              )}

              {submitError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {submitError}
                </Alert>
              )}

              <form onSubmit={handleSubmitRating}>
                <Stack spacing={2.5}>
                  {/* Name Input */}
                  <TextField
                    fullWidth
                    label="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#667eea',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#667eea',
                        },
                      },
                    }}
                    disabled={loading}
                  />

                  {/* Company Input */}
                  <TextField
                    fullWidth
                    label="Company/Organization (Optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your company name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#667eea',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#667eea',
                        },
                      },
                    }}
                    disabled={loading}
                  />

                  {/* Rating Selector */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', color: '#333' }}>
                      Your Rating:
                    </Typography>
                    <Rating
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                      size="large"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#FFB800',
                        },
                        '& .MuiRating-iconHover': {
                          color: '#FFC107',
                        },
                      }}
                      disabled={loading}
                    />
                    {rating > 0 && (
                      <Typography sx={{ color: '#667eea', fontWeight: 'bold' }}>
                        {rating}/5
                      </Typography>
                    )}
                  </Box>

                  {/* Feedback Textarea */}
                  <TextField
                    fullWidth
                    label="Your Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your experience working with me..."
                    variant="outlined"
                    multiline
                    rows={5}
                    helperText={`${feedback.length}/300 characters`}
                    inputProps={{ maxLength: 300 }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#667eea',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#667eea',
                        },
                      },
                    }}
                    disabled={loading}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={24} /> : <Send />}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '12px 24px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 28px rgba(102, 126, 234, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {loading ? 'Submitting...' : 'Submit Rating'}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '12px',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Why Leave a Rating?
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Star sx={{ color: '#FFB800', minWidth: '24px' }} />
                  <Typography>
                    <strong>Help others</strong> - Your feedback helps potential clients make informed decisions
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Star sx={{ color: '#FFB800', minWidth: '24px' }} />
                  <Typography>
                    <strong>Honest feedback</strong> - Share your genuine experience with my work
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Star sx={{ color: '#FFB800', minWidth: '24px' }} />
                  <Typography>
                    <strong>Improve quality</strong> - Your insights help me provide even better service
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Star sx={{ color: '#FFB800', minWidth: '24px' }} />
                  <Typography>
                    <strong>Build trust</strong> - Real testimonials build credibility
                  </Typography>
                </Box>
              </Stack>

              <Box sx={{ mt: 4, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
                <Typography sx={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                  ⏱️ Takes less than 2 minutes to submit your rating. Your feedback is valuable and appreciated!
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Ratings Display Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              color: '#333',
            }}
          >
            Client Testimonials
          </Typography>

          {loadingRatings ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <Stack alignItems="center" gap={2}>
                <CircularProgress size={60} />
                <Typography>Loading testimonials...</Typography>
              </Stack>
            </Box>
          ) : ratings.length === 0 ? (
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              }}
            >
              <Typography sx={{ color: '#666', fontSize: '1.1rem' }}>
                No ratings yet. Be the first to leave a review! ⭐
              </Typography>
            </Paper>
          ) : (
            <Box>
              {/* Slider Container */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Previous Button */}
                <IconButton
                  onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))}
                  disabled={sliderIndex === 0}
                  sx={{
                    color: '#667eea',
                    '&:disabled': { color: '#ccc' },
                    '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.1)' },
                  }}
                >
                  <ChevronLeft sx={{ fontSize: '32px' }} />
                </IconButton>

                {/* Ratings Slider */}
                <Box
                  sx={{
                    flex: 1,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 3,
                      transition: 'transform 0.3s ease',
                      transform: `translateX(-${sliderIndex * 100}%)`,
                    }}
                  >
                    {ratings.map((ratingItem) => (
                      <Box
                        key={ratingItem.id}
                        sx={{
                          minWidth: '100%',
                          flexShrink: 0,
                          display: 'flex',
                          justifyContent: 'center',
                          pr: 2,
                          pl: 2,
                        }}
                      >
                        <Card
                          className="rating-card"
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 24px 48px rgba(102, 126, 234, 0.4)',
                            },
                            borderRadius: '16px',
                            border: '1px solid rgba(102, 126, 234, 0.15)',
                            minHeight: '380px',
                            maxWidth: '500px',
                            width: '100%',
                            background: 'white',
                            boxShadow: '0 8px 24px rgba(102, 126, 234, 0.12)',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Gradient Top Border */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '4px',
                              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                            }}
                          />

                          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 3 }}>
                            {/* Rating Badge */}
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 2,
                                pb: 2,
                                borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 0.5,
                                  backgroundColor: 'rgba(255, 184, 0, 0.1)',
                                  padding: '6px 12px',
                                  borderRadius: '20px',
                                }}
                              >
                                <Rating
                                  value={ratingItem.rating}
                                  readOnly
                                  size="small"
                                  sx={{
                                    '& .MuiRating-iconFilled': {
                                      color: '#FFB800',
                                    },
                                  }}
                                />
                                <Typography
                                  sx={{
                                    fontWeight: 'bold',
                                    color: '#FFB800',
                                    fontSize: '0.9rem',
                                    ml: 0.5,
                                  }}
                                >
                                  {ratingItem.rating}.0
                                </Typography>
                              </Box>
                            </Box>

                            {/* Client Info */}
                            <Box sx={{ mb: 2 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: '700',
                                  color: '#1a1a1a',
                                  mb: 0.3,
                                  fontSize: '1.15rem',
                                  letterSpacing: '-0.3px',
                                }}
                              >
                                {ratingItem.name}
                              </Typography>
                              <Typography
                                sx={{
                                  color: '#667eea',
                                  fontSize: '0.9rem',
                                  fontWeight: '600',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.5px',
                                }}
                              >
                                {ratingItem.company || 'Client'}
                              </Typography>
                            </Box>

                            {/* Feedback with Quote Icon */}
                            <Box sx={{ mb: 2, flexGrow: 1 }}>
                              <Typography
                                sx={{
                                  fontSize: '0.95rem',
                                  color: '#333',
                                  lineHeight: 1.7,
                                  fontStyle: 'italic',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 5,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  backgroundColor: 'rgba(102, 126, 234, 0.05)',
                                  padding: '12px 14px',
                                  borderLeft: '3px solid #667eea',
                                  borderRadius: '4px',
                                  minHeight: '95px',
                                }}
                              >
                                "{ratingItem.feedback}"
                              </Typography>
                            </Box>

                            {/* Timestamp */}
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                pt: 2,
                                borderTop: '1px solid rgba(102, 126, 234, 0.1)',
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  color: '#999',
                                  fontSize: '0.8rem',
                                  fontWeight: '500',
                                }}
                              >
                                {new Date(ratingItem.timestamp).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </Typography>
                              <Box
                                sx={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                }}
                              />
                            </Box>
                          </CardContent>
                        </Card>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Next Button */}
                <IconButton
                  onClick={() => setSliderIndex(Math.min(ratings.length - 1, sliderIndex + 1))}
                  disabled={sliderIndex === ratings.length - 1}
                  sx={{
                    color: '#667eea',
                    '&:disabled': { color: '#ccc' },
                    '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.1)' },
                  }}
                >
                  <ChevronRight sx={{ fontSize: '32px' }} />
                </IconButton>
              </Box>

              {/* Slider Indicators */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                  mt: 3,
                }}
              >
                {ratings.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setSliderIndex(index)}
                    sx={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: index === sliderIndex ? '#667eea' : '#ddd',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#667eea',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* Average Rating Summary */}
        {ratings.length > 0 && (
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Overall Rating
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                {(
                  ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
                ).toFixed(1)}
              </Typography>
              <Box>
                <Rating
                  value={ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length}
                  readOnly
                  size="large"
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#FFB800',
                    },
                  }}
                />
                <Typography sx={{ fontSize: '0.9rem', mt: 1 }}>
                  Based on {ratings.length} review{ratings.length !== 1 ? 's' : ''}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default RatingsSection;
