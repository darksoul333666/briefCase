import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import About from './sections/About';
import Projects from './sections/Projects';
const drawerWidth = 240;

export default function App({window, toggleTheme, mode}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const icon = mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column' }} bgcolor={'background.default'}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2  }} >
      <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
        {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Typography>
       <IconButton onClick={toggleTheme} sx={{ fontSize: 10, width: 40, height: 40 }}>
          { icon}
      </IconButton>
      </Box>
      <List>
        {[
          { text: 'ACERCA DE MI' },
          { text: 'ESPECIALIZACIÓN' },
          { text: 'SKILLS' },
          { text: 'PROYECTOS INSIGNIA' },
          { text: 'EXPERIENCIA LABORAL' },
          { text: 'CONTÁCTAME' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              {/* <ListItemText primary={item.text} /> */}
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
              {item.text}
            </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer> */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      <About/>
      <Projects/>
      </Box>
    </Box>
  );
}
