
import * as React from 'react';
import { TableView } from './TableView';
import { Box, Button, Modal } from '@mui/material';

const _ = require('lodash')

// const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, };
const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', height: 'auto', bgcolor: 'background.paper', boxShadow: 24, p: 4, overflow: 'auto' };
export const TableViewPopUp = (props)=>{
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>
        {_.get(props,'buttonText','Open Table')}
      </Button>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        sx={{width: '100%',height: '100%'}}
      >
        <div
            style={{marginTop:'15%', marginRight:'30px', marginLeft:'30px'}}
          >
          <TableView
                dataList={_.get(props, 'dataList',[])}
            />
        </div>
      </Modal>
    </div>
  );
}