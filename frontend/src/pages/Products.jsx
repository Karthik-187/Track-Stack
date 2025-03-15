import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { productImages } from '../assets/productImages';

const products = [
  {
    id: 1,
    name: "Samsung 4K Smart TV",
    category: "Electronics",
    price: 45999,
    stock: 15,
    image: productImages.samsungTV,
    description: "55-inch 4K Ultra HD Smart LED TV"
  },
  {
    id: 2,
    name: "Bosch Washing Machine",
    category: "Appliances",
    price: 32499,
    stock: 8,
    image: productImages.boschWasher,
    description: "8 KG Front Load Washing Machine"
  },
  {
    id: 3,
    name: "HP Pavilion Laptop",
    category: "Electronics",
    price: 56999,
    stock: 12,
    image: productImages.hpLaptop,
    description: "15.6 inch, 8GB RAM, 512GB SSD"
  },
  {
    id: 4,
    name: "Sony PlayStation 5",
    category: "Electronics",
    price: 49990,
    stock: 5,
    image: productImages.ps5,
    description: "Next-gen gaming console with DualSense controller"
  },
  {
    id: 5,
    name: "LG Refrigerator",
    category: "Appliances",
    price: 28990,
    stock: 10,
    image: productImages.lgFridge,
    description: "260L Double Door Smart Inverter Refrigerator"
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Appliances'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Products Catalog
        </Typography>
        
        {/* Search and Filter Section */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: 300 }}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                variant={selectedCategory === category ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ 
                  objectFit: 'contain',
                  p: 2,
                  backgroundColor: '#f5f5f5'
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ₹{product.price.toLocaleString('en-IN')}
                  </Typography>
                  <Chip 
                    label={`Stock: ${product.stock}`}
                    color={product.stock > 10 ? "success" : product.stock > 5 ? "warning" : "error"}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products; 