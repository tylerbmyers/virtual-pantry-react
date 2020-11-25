import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../../components/Category/category.component';

import './pantry.styles.scss';
import { Button } from '@material-ui/core';
import AddCategoryModal from '../../components/AddCategoryModal/add-category-modal.component';
import AddItemModal from '../../components/AddItemModal/add-item-modal.component';

export interface PantryItem {
  category: string;
  items: {
    itemName: string;
    itemQuantity: number;
    unitMeasure: string;
  }[];
}

const categories = [
  'Meats',
  'Dairy',
  'Snacks',
  'Spices',
  'Vegetables',
  'Fruit',
  'Other'
];

const unitMeasures = [
  'teaspoon',
  'tablespoon',
  'lb(s)',
  'oz',
  'container',
  'gallon(s)'
];

const Pantry = () => {
  const [pantryItems, setPantryItems] = useState([] as PantryItem[]);
  const [openCategoryModal, setCategoryModalOpen] = useState(false);
  const [openItemModal, setItemModalOpen] = useState(false);
  const [category, setCategory] = useState('Other');
  const [unitMeasure, setUnitMeasure] = useState('container');

  useEffect(() => {
    axios.get<PantryItem[]>('http://localhost:3001/pantry').then(response => {
      setPantryItems(response.data);
    });
  }, []);

  const handleClickOpen = (modalType: string) => {
    if (modalType === 'category') {
      setCategoryModalOpen(true);
    } else {
      setItemModalOpen(true);
    }
  };

  const handleClose = (modalType: string) => {
    if (modalType === 'category') {
      setCategoryModalOpen(false);
    } else {
      setItemModalOpen(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    modalType: string
  ) => {
    if (modalType === 'category') {
      setCategory(event.target.value);
    } else {
      setUnitMeasure(event.target.value);
    }
  };

  if (!pantryItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pantry-component'>
      <div className='title-container'>
        <div className='title'>My Pantry</div>
        <Button
          variant='contained'
          className='add-category-button'
          onClick={() => handleClickOpen('category')}
        >
          Add Category
        </Button>
      </div>
      <div className='content'>
        {pantryItems.map(pantryItem => {
          return (
            <Category
              key={pantryItem.category}
              pantryItem={pantryItem}
              handleClickOpen={handleClickOpen}
            />
          );
        })}
      </div>
      <AddCategoryModal
        {...{
          categories,
          category,
          openCategoryModal,
          handleClose,
          handleChange
        }}
      />
      <AddItemModal
        {...{
          unitMeasures,
          unitMeasure,
          openItemModal,
          handleClose,
          handleChange
        }}
      />
    </div>
  );
};

export default Pantry;
