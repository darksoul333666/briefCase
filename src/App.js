import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={900} sx={{ fontSize: 50 }}>
        Este es un texto con la fuente Nunito-Black
      </Typography>

      <Typography fontWeight={700} sx={{ fontSize: 24 }}>
        Este es un texto con la fuente Nunito-Bold
      </Typography>

      <Typography fontWeight={400} sx={{ fontSize: 24 }}>
        Este es un texto con la fuente Nunito-Regular
      </Typography>
      </Box>
  );
}

export default App;
