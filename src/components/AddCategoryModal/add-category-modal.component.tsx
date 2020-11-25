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

interface CategoryModalProps {
  categories: string[];
  category: string;
  openCategoryModal: boolean;
  handleClose: (modalType: string) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    modalType: string
  ) => void;
}

const AddCategoryModal = ({
  categories,
  category,
  openCategoryModal,
  handleClose,
  handleChange
}: CategoryModalProps) => {
  return (
    <Dialog
      open={openCategoryModal}
      onClose={() => handleClose('category')}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Add Category</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a category, please enter the category name here.
        </DialogContentText>
        <TextField
          id='standard-select-currency'
          select
          label='Select'
          value={category}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event, 'category')
          }
          helperText='Please select a category name'
          variant='outlined'
        >
          {categories.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleClose('category')}
          style={{ color: 'red' }}
        >
          Cancel
        </Button>
        <Button onClick={() => handleClose('category')}>Add Category</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryModal;
