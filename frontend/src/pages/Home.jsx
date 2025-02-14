import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SyncIcon from '@mui/icons-material/Sync';

const features = [
  {
    icon: <InventoryIcon sx={{ fontSize: 40 }} />,
    title: 'Real-time Stock Tracking',
    description: 'Monitor your inventory levels in real-time. Get instant updates on stock movements and maintain optimal inventory levels.'
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive analytics. Track sales trends, predict demand, and optimize stock levels.'
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
    title: 'Smart Alerts',
    description: 'Receive instant notifications for low stock, reorder points, and potential stockouts. Stay ahead of inventory challenges.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Secure Management',
    description: 'Enterprise-grade security for your inventory data. Role-based access control and detailed audit trails.'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Performance Metrics',
    description: 'Track key performance indicators, inventory turnover rates, and efficiency metrics to optimize your operations.'
  },
  {
    icon: <SyncIcon sx={{ fontSize: 40 }} />,
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing systems. Compatible with major e-commerce platforms and accounting software.'
  }
];

const Home = () => {
  return (
    <Container 
      maxWidth="lg"
      sx={{
        py: 6,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Welcome Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 3,
            background: 'linear-gradient(45deg, #1a237e 30%, #0288d1 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Transform Your Inventory Management
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Streamline your operations with our powerful inventory management system 
          Get real-time insights and take control of your stock
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <CardContent>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: 'primary.main' 
                }}>
                  {feature.icon}
                  <Typography variant="h5" component="h2" sx={{ ml: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Stats Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Grid container spacing={4}>
          {[
            { number: '99.9%', label: 'Uptime' },
            { number: '50K+', label: 'Products Managed' },
            { number: '24/7', label: 'Support' },
            { number: '100+', label: 'Happy Clients' }
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card 
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ py: 3 }}
              >
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {stat.number}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 