// app/layout.tsx
import { type Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'typeface-poppins';
import clsx from 'clsx';
import Head from 'next/head';
import '@/styles/font.css';
import '@/styles/tailwind.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Apollo Dental Padur',
    default: 'Apollo Dental Padur',
  },
  description:
    'At Dental Hospital, we are committed to providing the highest quality dental care for you and your family. Discover our comprehensive services and meet our experienced team dedicated to your oral health.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const style = {
    background: '#ffffff',
    border: '1px solid #d6dae4',
    minHeight: '100vh',
  };

  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        poppins.variable,
        'font-poppins'
      )}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex min-h-full font-poppins">
        <div className="flex w-full flex-col" style={style}>
          {children}
        </div>
      </body>
    </html>
  );
}
