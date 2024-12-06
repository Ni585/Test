import * as React from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import { useState } from 'react';
const _ = require("lodash"); 

const paginationModel = { page: 0, pageSize: 5 };
export const TableView = (props)=>{
    const [dataList, setDataList] = useState([]);
    const [searchText, setSearchText] = useState(''); 
    const [filteredRows, setFilteredRows] = useState([]);
    const [columns, setColumns] = useState([]); 
    const [rows, setRows] = useState([]);
    
    React.useEffect(()=>{
        setDataList( _.get(props,'dataList', []));
    }, [props])

    React.useEffect(()=>{
        const newColumns = []     
        dataList.some((data) => { Object.keys(data).forEach((val) => {newColumns.push({field: val,headerName: <b>{String(val).toLocaleUpperCase()}</b>,flex: 1});});
            return true; // This will break out of the loop after the first iteration
        });
        setColumns(newColumns)

        const newRows = []; 
        dataList.forEach((data, idx) => { 
            newRows.push({ ...data, id: idx }); 
        }); 
        setRows(newRows); 
        setFilteredRows(newRows);

    }, [dataList])

    
    // setFilteredRows(rows);
    const handleSearch = (event) => { 
        const value = event.target.value.toLowerCase(); 
        setSearchText(value); 
        const filtered = rows.filter((row) => Object.values(row).some((cell) => String(cell).toLowerCase().includes(value) ) ); 
        setFilteredRows(filtered); 
    };

    return (
        <Paper style={{width: 'auto', margin:'10px'}}>
            
            <TextField 
                label="Search Table" variant="filled" value={searchText} 
                onChange={handleSearch} style={{ marginBottom: '16px', width: '100%' }} />
            <DataGrid
                rows={filteredRows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ 
                    border: 0,
                    width: '100%',
                    // '& .MuiDataGrid-cell': { whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.5', },
                    // '& .header-cell': { whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.5', },
                }} 
            />
        </Paper>
    );
}