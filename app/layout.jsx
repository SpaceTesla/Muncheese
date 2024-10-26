import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/components/Nav.jsx';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Muncheese - Cheesy Cravings, Satisfied Fast!',
  description: `From our gooey cheese-loaded burgers and melty quesadillas
     to crispy fries and indulgent cheesy dips, 
     every bite is a cheesy adventure waiting to happen`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
