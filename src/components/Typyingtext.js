import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const TypingEffect = ({ text, speed }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, speed, text]);
    return <Typography fontWeight={900} sx={{ fontSize: 40 }}>
        {currentText}
    </Typography>
};

export default TypingEffect;