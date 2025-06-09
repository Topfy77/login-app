import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
            Reset Password
          </Typography>

          {submitted ? (
            <Typography color="green" align="center">
              ພວກເຮົາໄດ້ສົ່ງລີ້ງເເບບຟອມໃປໃນອີເມລຂອງທ່ານເເລ້ວ.
            </Typography> 
          ) : (
            <>
              <TextField
                label="Enter your email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                disabled={!email}
              >
                Send Reset Link
              </Button>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
