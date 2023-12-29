// App.js

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App({ toggleTheme, mode }) {
  const icon = mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />;

  return (
    <Box sx={{minHeight: '100vh'}} color={'primary.main'} bgcolor={'background.default'} >
      <Typography fontWeight={900} sx={{ fontSize: 50 }}>
        Este es un texto con la fuente Nunito-Black
      </Typography>

      <Typography fontWeight={700} sx={{ fontSize: 24 }}>
        Este es un texto con la fuente Nunito-Bold
      </Typography>

      <Typography fontWeight={400} sx={{ fontSize: 24 }}>
        Este es un texto con la fuente Nunito-Regular
      </Typography>

      <Button onClick={toggleTheme} variant="contained" color="primary" sx={{ mt: 2 }}>
        Cambiar Tema
      </Button>

      <IconButton aria-label="toggle-theme" onClick={toggleTheme} sx={{ mt: 2 }}>
        {icon}
      </IconButton>
    </Box>
  );
}

export default App;
