import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './styles.css';

const abcGravity = localFont({
  src: [
    {
      path: '../../public/fonts/930aa7fdd4dc4fcafdc2.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-abc-gravity',
  display: 'swap',
});

const acidGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/1e6b37f27206a928a8d2.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/afef5c56776532b51181.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/e861a4b28072a7543250.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-acid-grotesk',
  display: 'swap',
});

const mackinac = localFont({
  src: [
    {
      path: '../../public/fonts/75074b2cc39dc5353d06.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/f2d01e571c719e55f630.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-mackinac',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PayJustNow for Business | Increase Revenue with Retail Solutions',
  description:
    "Let's get you paid! Increase your sales with split payment options and performance marketing. PayJustNow offers BNPL, Retail Credit, and Marketing Solutions for South African businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      className={`is-business site-loaded ${abcGravity.variable} ${acidGrotesk.variable} ${mackinac.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
