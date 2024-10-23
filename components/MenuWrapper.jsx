'use client'; // Important: ensure it's a client component

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MenuWrapper = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/category');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories');
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    router.push(`#${categoryId}`); // Navigation to category
  };

  return (
    <div className={'menu-wrapper border-e mt-16'}>
      <h2 className={'text-xl mb-4 font-bold'}>Menu</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className={'flex flex-col opacity-80'}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={'py-3 cursor-pointer hover:opacity-100'}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuWrapper;
