import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
} from '@mui/material';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchDashboardData = async () => {
      try {
        // Replace with actual API endpoint
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Container>
    );
  }

  return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        {/* Dashboard Widgets */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Total Purchase Due
              </Typography>
              <Typography variant="h5">₹25493000</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Total Sales Due
              </Typography>
              <Typography variant="h5">₹363655</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Total Sale Amount
              </Typography>
              <Typography variant="h5">₹31991489.5</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Total Sale Amount
              </Typography>
              <Typography variant="h5">₹3320000</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Customer and Supplier Counts */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'orange', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Customers
              </Typography>
              <Typography variant="h5">
                100
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'skyblue', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Suppliers
              </Typography>
              <Typography variant="h5">
                100
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'navy', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Purchase Invoice
              </Typography>
              <Typography variant="h5">
                100
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'green', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Sales Invoice
              </Typography>
              <Typography variant="h5">
                105
              </Typography>
            </Box>
          </Grid>
        </Grid>


        {/* Purchase & Sales Chart */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'medium' }}>
                Purchase & Sales
              </Typography>
              <img src="https://via.placeholder.com/800x400" alt="Purchase & Sales Chart" style={{ width: '100%' }} />
            </Box>
          </Grid>
        </Grid>

        {/* Recently Added Products Table */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'medium' }}>
                Recently Added Products
              </Typography>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Sno</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Products</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '8px' }}>1</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                      Apple Earpods
                    </td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>₹73969.6</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '8px' }}>2</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                      iPhone 11
                    </td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                      ₹55486.33
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '8px' }}>3</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>samsung</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                      ₹43350.07
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '8px' }}>4</td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                      Macbook Pro
                    </td>
                    <td style={{ textAlign: 'left', padding: '8px' }}>
                      ₹24153.83
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  };

Dashboard.propTypes = {
  data: PropTypes.shape({
    recentActivities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired
      })
    ),
    quickActions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired
      })
    )
  })
};

export default Dashboard;
