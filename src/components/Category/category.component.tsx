import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import { PantryItem } from '../../pages/pantry/pantry.component';

import './category.styles.scss';

interface CategoryProps {
  pantryItem: PantryItem;
  handleClickOpen: (modalType: string) => void;
}

const Category = ({ pantryItem, handleClickOpen }: CategoryProps) => {
  return (
    <div className='category-component'>
      <div className='category-title'>{pantryItem.category}</div>
      <List>
        {pantryItem.items.map(item => {
          return (
            <ListItem key={item.itemName}>
              <ListItemText
                primary={item.itemName}
                secondary={`${item.itemQuantity} ${item.unitMeasure}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='edit'>
                  <EditIcon />
                </IconButton>
                <IconButton edge='end' aria-label='delete'>
                  <ClearIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <div className='add-button'>
        <IconButton aria-label='add'>
          <AddCircleOutlineIcon onClick={() => handleClickOpen('item')} />
        </IconButton>
      </div>
    </div>
  );
};

export default Category;
