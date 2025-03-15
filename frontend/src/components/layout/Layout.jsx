import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from '../common/ScrollToTop.jsx';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Navbar />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        {children}
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout; 