'use client';
import React, { useState, useEffect } from 'react';
import CategoryItemWrapper from '@/components/CategoryItemWrapper.jsx';

const ItemsWrapper = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) {
          throw new Error('Network response was not ok:' + response);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div
      className={
        'item-wrapper mt-20 max-w-screen-sm flex flex-col mx-auto gap-8'
      }
    >
      {categories.map((category) => (
        <div key={category.id} id={category.id}>
          <CategoryItemWrapper category={category} />
        </div>
      ))}
    </div>
  );
};

export default ItemsWrapper;
