import React from 'react';
import { Box, Typography, IconButton, Dialog, Stack, Chip } from '@mui/material';
import { Phone, Close, Email } from '@mui/icons-material';
import './style/ContactModal.css';

const ContactModal = ({ open, onClose }) => {
  const phoneNumber = '+923105437611';
  const emailAddress = 'Weddi5455@gmail.com';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${emailAddress}`, '_blank');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          overflow: 'visible',
        },
      }}
      TransitionProps={{
        className: 'contact-modal-animation',
      }}
    >
      <Box className="contact-modal-container">
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          className="contact-close-btn"
          sx={{
            position: 'absolute',
            top: -15,
            right: -15,
            backgroundColor: '#667eea',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#764ba2',
              transform: 'scale(1.1)',
            },
            width: 50,
            height: 50,
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          }}
        >
          <Close />
        </IconButton>

        {/* Phone Icon */}
        <Box className="contact-icon-wrapper">
          <Phone sx={{ fontSize: 50, color: '#fff' }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          component="h2"
          className="contact-title"
          sx={{
            fontWeight: 'bold',
            marginTop: 3,
            marginBottom: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Let's Connect
        </Typography>

        {/* Message */}
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            textAlign: 'center',
            marginBottom: 3,
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
        >
          Seems you like to contact me! 📱
          <br />
          Here's my number:
        </Typography>

        {/* Phone Number Display */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ marginBottom: 2 }}
        >
          <Chip
            label={phoneNumber}
            icon={<Phone />}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '20px 10px',
              height: 'auto',
              '& .MuiChip-icon': {
                color: '#fff',
              },
            }}
          />
        </Stack>

        {/* Email Display */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ marginBottom: 3 }}
        >
          <Chip
            label={emailAddress}
            icon={<Email />}
            sx={{
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '20px 10px',
              height: 'auto',
              '& .MuiChip-icon': {
                color: '#fff',
              },
            }}
          />
        </Stack>

        {/* Call Button */}
        <button
          onClick={handleCall}
          className="contact-call-btn"
          style={{
            width: '100%',
            padding: '14px 20px',
            marginBottom: 12,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 28px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
          }}
        >
          📞 Call Me
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmail}
          className="contact-email-btn"
          style={{
            width: '100%',
            padding: '14px 20px',
            marginBottom: 20,
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 28px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
          }}
        >
          ✉️ Send Email
        </button>

        {/* Footer Message */}
        <Typography
          variant="caption"
          sx={{
            color: '#999',
            textAlign: 'center',
            display: 'block',
            fontSize: '0.85rem',
          }}
        >
          Available on WhatsApp, Email & Phone Call
        </Typography>
      </Box>
    </Dialog>
  );
};

export default ContactModal;
