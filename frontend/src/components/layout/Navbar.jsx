import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'Inventory', path: '/inventory' },
    { text: 'Reports', path: '/reports' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Profile', path: '/profile' },
    { text: 'Sign In', path: '/login' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        width: '100%',
      }}
    >
      <Container 
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Toolbar 
          disableGutters 
          sx={{ 
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InventoryIcon 
                sx={{ 
                  display: { xs: 'none', md: 'flex' }, 
                  mr: 1,
                  color: 'primary.main'
                }} 
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  color: 'primary.main',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              >
                TrackStack
              </Typography>
            </Box>
          </motion.div>

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: {
                    width: 240,
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem 
                      button 
                      key={item.text}
                      onClick={() => {
                        navigate(item.path);
                        handleDrawerToggle();
                      }}
                      sx={{
                        backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: 'primary.main',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
