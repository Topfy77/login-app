import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook'; 

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FacebookIcon color="primary" fontSize="large" style={{ marginRight: '8px' }} />
        <h1>Home</h1>
        
      </div>
    </div>
  );
}
