import React, { useState, useEffect } from 'react'; 
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

// เปลี่ยนเป็น named export เพื่อไม่ชนกับ default export ในไฟล์เดียวกัน
export function HoverButton() {
  return (
    <Button
      sx={{
        bgcolor: 'primary.main',
        color: 'red',
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'yellow',
        },
      }}
    >
      Hover me!
    </Button>
  );
}

export const ShowProduct = () => {
  const [products, setProducts] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>Show Product</Typography>
      <Table>
        <TableHead sx={{ bgcolor: 'primary.light' }}>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>price</TableCell>
            <TableCell>Hover Info</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p) => (
            <TableRow
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.pro_name}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>
                {hoveredId === p.id && (
                  <Typography variant="body2" color="primary">
                    ກຳລັງເບີ່ງ {p.id}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const UpdateProduct = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>Update Product</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        add product
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>product:</TableCell>
            <TableCell>price:</TableCell>
            <TableCell>option:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[{ id: 1, name: 'iPhone 15', price: 35000 }].map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>
                <Button variant="outlined" size="small" sx={{ mr: 1 }}>Edit</Button>
                <Button variant="outlined" color="error" size="small">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const AddUser = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>Add User</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add user
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name:</TableCell>
            <TableCell>email:</TableCell>
            <TableCell>optin:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[{ id: 1, name: 'John Doe', email: 'john@example.com' }].map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="outlined" size="small" sx={{ mr: 1 }}>Edit</Button>
                <Button variant="outlined" color="error" size="small">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default function HomePage() {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'show':
        return <ShowProduct />;
      case 'update':
        return <UpdateProduct />;
      case 'adduser':
        return <AddUser />;
      default:
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FacebookIcon
              color="primary"
              fontSize="large"
              style={{ marginRight: 9, marginLeft: 10 }}
            />
            <Typography variant="h4">Home</Typography>
          </div>
        );
    }
  };

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
        {/* Sidebar */}
        <Box component="nav" sx={{ width: 200, bgcolor: 'grey.200', p: 2 }}>
          {/* เปลี่ยนความกว้าง sidebar เป็น 200px เพื่อให้ข้อความแสดงเต็ม */}
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Menu
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedMenu('show')}>
                <ListItemText primary="Show Product" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedMenu('update')}>
                <ListItemText primary="Update Product" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedMenu('adduser')}>
                <ListItemText primary="Add User" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        {/* Main Content */}
        <Box component="main" sx={{ flex: 1, p: 3, bgcolor: '#f9f9f9' }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
