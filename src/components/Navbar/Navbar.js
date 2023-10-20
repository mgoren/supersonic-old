import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Container, Menu, Link, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import ColorModeToggle from 'components/ColorModeToggle';

const pages = [
  { title: 'Home', path: '/' },
  // { title: 'Welcome', path: '/welcome' },
  { title: 'Bands & Callers', path: '/staff' },
  // { title: 'Schedule', path: '/schedule' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'Payment Info', path: '/waystopay' },
  { title: 'Registration', path: '/registration' }
];

const row1 = pages.slice(0, 5);
const row2 = pages.slice(5);

export default function Navbar({ toggleColorMode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* hamburger menu for xs and sm screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" aria-label="navigation menu" aria-controls="menu-appbar" aria-haspopup="true">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Link
                  component={RouterLink}
                  to={page.path}
                  key={page.title}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={handleCloseNavMenu}
                >
                  <ListItem>
                    <Typography textAlign="center">{page.title}</Typography>
                  </ListItem>
                </Link>
              ))}
            </Menu>
            <ListItem sx={{ my: 2, color: 'inherit', display: 'block' }}>
              <Typography textAlign="center">ECD Ball 2023</Typography>
            </ListItem>
          </Box>

          {/* 2 line navbar for md screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', lg: 'none' }, flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 0 }}>
              <PageLinks pages={row1} onClick={handleCloseNavMenu} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <PageLinks pages={row2} onClick={handleCloseNavMenu} />
            </Box>
          </Box>

          {/* 1 line navbar for lg and up screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <PageLinks pages={pages} onClick={handleCloseNavMenu} />
          </Box>

          {/* color mode toggle always goes to the right */}
          <ColorModeToggle toggleColorMode={toggleColorMode} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}

const PageLinks = ({ pages, onClick }) => (
  pages.map((page) => (
    <Link
      component={RouterLink}
      to={page.path}
      key={page.title}
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={onClick}
    >
      <ListItem sx={{ my: 1, color: 'inherit', display: 'block', pt: 0, pb: 0 }}>
        {page.title}
      </ListItem>
    </Link>
  ))
);
