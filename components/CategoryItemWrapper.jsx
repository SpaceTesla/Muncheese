import React from 'react';
import Image from 'next/image';

const CategoryItemWrapper = ({ category }) => {
  return (
    <div className={'category-item-wrapper shadow rounded-xl overflow-hidden'}>
      <h3
        className={
          'text-2xl text-white bg-blue-950 px-4 mt-auto pb-4 font-semibold flex items-end gradient-overlay'
        }
        style={{
          backgroundImage: `url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '10rem',
          zIndex: 2,
        }}
      >
        <span className={'z-10'}>{category.name}</span>
      </h3>

      <ul className={'flex flex-col flex-wrap px-4'}>
        {category.items.map((item) => (
          <li
            key={item.id}
            className={
              'item border-b last:border-none py-8 flex flex-col justify-center gap-2'
            }
          >
            <p className={'text-md font-semibold'}>{item.name}</p>
            <p className={'text-md text-gray-500'}>&#x20B9;{item.price}</p>
            <p className={'text-sm text-gray-500'}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItemWrapper;
