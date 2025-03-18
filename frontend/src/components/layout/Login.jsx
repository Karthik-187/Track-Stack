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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
  const [role, setRole] = useState('VIEWER');

  // Add role change handler
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting login with:', { username, password, role });

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Invalid credentials');
      }

      // Get the token as text first
      const token = await response.text();
      
      // Store the token
      localStorage.setItem('token', token);
      
      // Decode JWT token to get role
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      const userRole = payload.role || role;
      
      localStorage.setItem('userRole', userRole);

      // Role-based navigation
      switch (userRole) {
        case 'ADMIN':
          navigate('/dashboard');
          break;
        case 'CONTRIBUTOR':
          navigate('/inventory');
          break;
        case 'VIEWER':
          navigate('/products');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(`Login failed: ${error.message}`);
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
              <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  value={role}
                  label="Role"
                  onChange={handleRoleChange}
                >
                  <MenuItem value="VIEWER">Viewer</MenuItem>
                  <MenuItem value="CONTRIBUTOR">Contributor</MenuItem>
                  <MenuItem value="ADMIN">Admin</MenuItem>
                </Select>
              </FormControl>

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
