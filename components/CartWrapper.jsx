import React from 'react';
import Image from 'next/image';

const CartWrapper = () => {
  return (
    <div
      className={
        'fixed z-10 right-12 top-28 flex flex-col items-center justify-center bg-white w-80 h-80 shadow-lg rounded-lg p-8 gap-4'
      }
    >
      <div className={'cart-desc text-center text-gray-300'}>
        Your Cart is empty
      </div>
      <Image
        src={'/assets/cart.png'}
        alt={'cart image'}
        width={150}
        height={150}
      />
    </div>
  );
};
export default CartWrapper;
