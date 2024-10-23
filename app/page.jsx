import MenuWrapper from '@/components/MenuWrapper';
import ItemsWrapper from '@/components/ItemsWrapper';
import CartWrapper from '@/components/CartWrapper';

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-[2fr_6fr_3fr] gap-4 p-4">
      <MenuWrapper />
      <ItemsWrapper />
      <CartWrapper />
    </main>
  );
}
