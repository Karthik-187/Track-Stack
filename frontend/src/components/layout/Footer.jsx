import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a237e',
        color: 'white',
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide comprehensive inventory management solutions to help businesses 
              streamline their operations and maximize efficiency.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/products" color="inherit" display="block">Products</Link>
            <Link href="/inventory" color="inherit" display="block">Inventory</Link>
            <Link href="/reports" color="inherit" display="block">Reports</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: Team-9@inventory.com<br />
              Phone: 9398717032<br />
              Address: Hyderabad
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Inventory Management System. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 