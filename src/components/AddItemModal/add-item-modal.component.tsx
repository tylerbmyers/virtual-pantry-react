import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  MenuItem,
  DialogActions,
  Button
} from '@material-ui/core';
import React from 'react';

import './add-item-modal.styles.scss';

interface ItemModalProps {
  unitMeasures: string[];
  unitMeasure: string;
  openItemModal: boolean;
  handleClose: (modalType: string) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    modalType: string
  ) => void;
}

const AddItemModal = ({
  unitMeasures,
  unitMeasure,
  openItemModal,
  handleClose,
  handleChange
}: ItemModalProps) => {
  return (
    <Dialog
      open={openItemModal}
      onClose={() => handleClose('item')}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Add Item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add an item, please enter the item information here.
        </DialogContentText>
        <form className='add-item-form'>
          <TextField
            id='outlined-basic'
            label='Item Name'
            variant='outlined'
            className='form-field'
          />
          <TextField
            className='form-field'
            id='standard-select-currency'
            select
            label='Select'
            value={unitMeasure}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event, 'item')
            }
            helperText='Please select a category name'
            variant='outlined'
          >
            {unitMeasures.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose('item')} style={{ color: 'red' }}>
          Cancel
        </Button>
        <Button onClick={() => handleClose('item')}>Add Category</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemModal;
