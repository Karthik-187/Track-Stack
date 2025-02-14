import { Box, Typography, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Paper 
      elevation={0}
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        background: 'linear-gradient(135deg, #1a237e 0%, #0288d1 100%)',
        color: 'white',
        borderRadius: 0,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        },
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          py: { xs: '2rem', md: '4rem' },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          component={motion.div}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: 3
            }}
          >
            Inventory Management System
          </Typography>
          <Typography 
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }
            }}
          >
            Transform your business with our powerful and intelligent inventory solution
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Header; 