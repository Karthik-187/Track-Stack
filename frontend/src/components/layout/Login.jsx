import { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Link,
  InputAdornment,
  Container,
  Grid,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
  borderRadius: 15,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  padding: '30px',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users');  // Changed from 8080 to 5000
      const data = await response.json();
      const users = data || [];

      // Check if user exists and password matches
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) {
        alert('Invalid username or password');
        return;
      }

      // Successful login
      alert('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  };

  return (
    <Container maxWidth="sm" component="main" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <GradientBox>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="subtitle1" component="p">
              Please sign in to continue
            </Typography>
          </GradientBox>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
              padding: '30px',
              gap: '20px',
            }}
          >
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                type="submit"
                endIcon={<ArrowForwardIcon />}
                fullWidth
                sx={{
                  marginTop: 2,
                  background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #21cbf3 30%, #2196f3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .6)',
                  },
                }}
              >
                Sign In
              </Button>
            </form>
            <Link href="#" variant="body2" onClick={() => navigate('/register')}>
              {"Don't have an account? Register"}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
