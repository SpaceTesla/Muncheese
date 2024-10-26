import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Nav = () => {
  return (
    <div
      className={
        'navbar flex justify-between align-middle border-b px-16 py-4 items-center fixed top-0 w-full bg-ghost-white z-10'
      }
    >
      <div className="logo-wrapper">
        <Image
          className={'muncheese-logo'}
          src="/assets/logo.jpg"
          alt="Muncheese logo"
          width={50}
          height={50}
          priority={true}
        />
      </div>
      <div className="options-wrapper flex gap-6 h-12">
        <input
          type="text"
          placeholder="Search for food"
          className="search-box rounded-lg shadow-md px-4 w-80 border focus:outline-none"
        />
        <div className="flex items-center justify-center px-4 space-x-2 bg-white rounded-lg shadow-md border">
          <Label htmlFor="veg-only">Veg only</Label>
          <Switch id="veg-only" className={'checked:bg-success-success'} />
        </div>
      </div>
    </div>
  );
};
export default Nav;
