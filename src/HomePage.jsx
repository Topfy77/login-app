// HomePage.js
import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        component="header"
        sx={{
          height: 70,
          bgcolor: 'primary.main',
          color: 'white',
          px: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">MY APP</Typography>
      </Box>

      {/* Sidebar + Content */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar as Nav */}
        <Box
          component="nav"
          sx={{ width: 100, bgcolor: 'grey.400', p: 2 }}
        >
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            About
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            {/* เพิ่มเมนูอื่น ๆ ได้ตามต้องการ */}
          </List>
        </Box>

        {/* Content */}
        <Box
          component="main"
          sx={{ flex: 1, p: 3, bgcolor: '#f9f9f9' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FacebookIcon
              color="primary"
              fontSize="large"
              style={{ marginRight: '9px', marginLeft:'10px' }}
            />
            <Typography variant="h4">Home</Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
