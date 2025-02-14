import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  IconButton,
  Tooltip,
  Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const initialInventory = [
  {
    id: 1,
    name: "Samsung 4K Smart TV",
    sku: "TV-SAM-4K-55",
    quantity: 15,
    reorderPoint: 5,
    costPrice: 38000,
    sellingPrice: 45999,
    supplier: "Samsung India",
    lastUpdated: "2024-03-15",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Bosch Washing Machine",
    sku: "WM-BOSCH-8KG",
    quantity: 8,
    reorderPoint: 3,
    costPrice: 28000,
    sellingPrice: 32499,
    supplier: "Bosch Home",
    lastUpdated: "2024-03-14",
    category: "Appliances"
  },
  {
    id: 3,
    name: "HP Pavilion Laptop",
    sku: "HP-PAV-15-12",
    quantity: 12,
    reorderPoint: 4,
    costPrice: 48000,
    sellingPrice: 56999,
    supplier: "HP India",
    lastUpdated: "2024-03-15",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Sony PlayStation 5",
    sku: "PS5-SONY-01",
    quantity: 5,
    reorderPoint: 3,
    costPrice: 41990,
    sellingPrice: 49990,
    supplier: "Sony India",
    lastUpdated: "2024-03-15",
    category: "Electronics"
  },
  {
    id: 5,
    name: "LG Refrigerator",
    sku: "LG-REF-260L",
    quantity: 10,
    reorderPoint: 4,
    costPrice: 24000,
    sellingPrice: 28990,
    supplier: "LG Electronics",
    lastUpdated: "2024-03-15",
    category: "Appliances"
  },
  {
    id: 6,
    name: "Apple iPad Air",
    sku: "IPAD-AIR-64",
    quantity: 15,
    reorderPoint: 5,
    costPrice: 46900,
    sellingPrice: 54900,
    supplier: "Apple India",
    lastUpdated: "2024-03-15",
    category: "Electronics"
  }
];

const Inventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleQuantityChange = (id, change) => {
    setInventory(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        if (newQuantity < 0) {
          setAlert({
            severity: 'error',
            message: 'Quantity cannot be negative!'
          });
          return item;
        }
        return { ...item, quantity: newQuantity, lastUpdated: new Date().toISOString().split('T')[0] };
      }
      return item;
    }));
  };

  const calculateProfit = (item) => {
    return ((item.sellingPrice - item.costPrice) / item.costPrice * 100).toFixed(2);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Inventory Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedItem(null);
            setOpenDialog(true);
          }}
        >
          Add New Item
        </Button>
      </Box>

      {alert && (
        <Alert 
          severity={alert.severity} 
          sx={{ mb: 2 }}
          onClose={() => setAlert(null)}
        >
          {alert.message}
        </Alert>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Cost Price (₹)</TableCell>
              <TableCell align="right">Selling Price (₹)</TableCell>
              <TableCell align="right">Profit Margin</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  backgroundColor: 
                    item.quantity <= item.reorderPoint 
                      ? 'rgba(255, 0, 0, 0.1)' 
                      : 'inherit'
                }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <IconButton 
                      size="small" 
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      <TrendingDownIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton 
                      size="small" 
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      <TrendingUpIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  {item.costPrice.toLocaleString('en-IN')}
                </TableCell>
                <TableCell align="right">
                  {item.sellingPrice.toLocaleString('en-IN')}
                </TableCell>
                <TableCell align="right">
                  <Chip
                    label={`${calculateProfit(item)}%`}
                    color={
                      calculateProfit(item) > 20 
                        ? "success" 
                        : calculateProfit(item) > 10 
                          ? "warning" 
                          : "error"
                    }
                  />
                </TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
                <TableCell align="center">
                  <IconButton 
                    color="primary"
                    onClick={() => {
                      setSelectedItem(item);
                      setOpenDialog(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error"
                    onClick={() => {
                      setInventory(prev => prev.filter(i => i.id !== item.id));
                      setAlert({
                        severity: 'success',
                        message: 'Item deleted successfully!'
                      });
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Inventory; 