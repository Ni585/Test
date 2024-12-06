import React, { useState } from 'react';
import { TextField, Paper, Button, Box, Typography } from '@mui/material';

const initialData = {
    "Item Name": "L1 LittleAngel-PopularPants",
    "HSN/SAC": 99112495,
    "Rate": 14,
    "Inter State Tax Rate": 12,
    "Opening Stock": 0,
    "Stock On Hand": 1170,
    "Purchase Rate": 7.95
};

export const Form = ()=>{
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = () => {
        console.log('Saved Data:', formData);
    };

    return (
        <Box sx={{ padding: '16px' }}>
            <Typography variant="h4" gutterBottom>
                Edit Item
            </Typography>
            <Paper sx={{ padding: '16px', marginBottom: '16px' }}>
                <TextField
                    fullWidth
                    label="Item Name"
                    name="Item Name"
                    value={formData["Item Name"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="HSN/SAC"
                    name="HSN/SAC"
                    value={formData["HSN/SAC"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Rate"
                    name="Rate"
                    value={formData["Rate"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Inter State Tax Rate"
                    name="Inter State Tax Rate"
                    value={formData["Inter State Tax Rate"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Opening Stock"
                    name="Opening Stock"
                    value={formData["Opening Stock"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Stock On Hand"
                    name="Stock On Hand"
                    value={formData["Stock On Hand"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Purchase Rate"
                    name="Purchase Rate"
                    value={formData["Purchase Rate"]}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button variant="contained" onClick={handleSave} sx={{ marginTop: '16px' }}>
                    Save
                </Button>
            </Paper>
        </Box>
    );
};