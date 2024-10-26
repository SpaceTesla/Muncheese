'use client';
import { useEffect, useState } from 'react';

import Loading from '@/components/Loading';
import MenuWrapper from '@/components/MenuWrapper';
import ItemsWrapper from '@/components/ItemsWrapper';
import CartWrapper from '@/components/CartWrapper';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a fetch call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="container mx-auto p-4">
      <MenuWrapper />
      <ItemsWrapper />
      <CartWrapper />
    </main>
  );
}
