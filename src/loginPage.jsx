import React, { useState } from 'react'; 
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress,
  Backdrop
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';  
import { useNavigate } from 'react-router-dom'; 


export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 
  const isPasswordValid = password.length >= 8;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (username === 'top@gmail.com' && password === '12345678') {
        navigate('/home'); 
      } else {
        setErrorMessage(' ອີເມລ ຫລື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ');
      }
    }, 2000);
  };

  const handleCloseMessageBox = () => {
    setErrorMessage('');
  };

  return (
    <>
      <Backdrop
        open={loading}
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          flexDirection: 'column'
        }}
      >
        <CircularProgress color="inherit" />
        <Typography sx={{ mt: 2 }}>Logging in...</Typography>
      </Backdrop>

      {errorMessage && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 6,
            textAlign: 'center',
            minWidth: 300,
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseMessageBox}
            sx={{ textTransform: 'none' }}
          >
            OK
          </Button>
        </Box>
      )}

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
            <Typography
              variant="h5"
              align="center"
              sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 1 
              }}
            >
              <FacebookIcon color="primary" fontSize="large" />
              Login
            </Typography>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!isPasswordValid && password.length > 0}
              helperText={
                !isPasswordValid && password.length > 0
                  ? 'ກະລຸນາພີມຕົວເລກ ຫຼື ຕົວໜັງສື ໄຫ້ບໍ່ຕ່ຳກວ່າ 8'
                  : ''
              }
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              variant="contained"
              fullWidth
              disabled={(password.length > 0 && !isPasswordValid) || loading}
              onClick={handleLogin}
              sx={{
                backgroundColor: '#1877f2',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '16px',
                mb: 1,
                height: '40px',
                '&:hover': {
                  backgroundColor: '#166fe5',
                }
              }}
            >
              Log in
            </Button>

            <Typography align="center" sx={{ mb: 2 }}>
              <Link href="/forgot-password" underline="hover" color="#1877f2">
                Forgotten password?
              </Link>
            </Typography>

            <Box sx={{ borderTop: '1px solid #ddd', mt: 2, mb: 2 }} />
          </Paper>

          <Typography align="center" sx={{ mt: 3 }}>
            <b>
              <Link href="#" underline="hover" color="inherit">
                Create a Page
              </Link>
            </b>{' '}
            for a celebrity, brand or business.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
