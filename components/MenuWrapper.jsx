'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MenuWrapper = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/category');
        const data = await response.json();
        setCategories(data);

        // Set the first category as selected by default
        if (data.length > 0) {
          setSelectedCategory(data[0].id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories');
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    const section = document.getElementById(categoryId);
    const offset = 100; // Adjust for navbar height

    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: 'smooth',
    });
    setSelectedCategory(categoryId); // Highlight selected category
  };

  // Debounced scroll listener to update selectedCategory based on scroll position
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        let closestCategory = selectedCategory;
        let closestOffset = Infinity;

        categories.forEach((category) => {
          const section = document.getElementById(category.id);
          if (section) {
            // Define a threshold so highlight changes only when section is close to the top
            const offset = Math.abs(section.getBoundingClientRect().top - 100);

            if (offset < closestOffset && offset < window.innerHeight / 2) {
              closestOffset = offset;
              closestCategory = category.id;
            }
          }
        });

        setSelectedCategory(closestCategory);
      }, 80); // Adjust debounce delay (in ms) for desired responsiveness
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories, selectedCategory]);

  return (
    <div className={'menu-wrapper fixed border-e mt-28 pr-4'}>
      <h2 className={'text-xl mb-4 font-bold'}>Menu</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className={'flex flex-col opacity-80'}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`py-3 cursor-pointer hover:opacity-100 ${
                selectedCategory === category.id
                  ? 'font-bold border-l-4 border-black pl-2' // Style for selected category
                  : ''
              }`}
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
