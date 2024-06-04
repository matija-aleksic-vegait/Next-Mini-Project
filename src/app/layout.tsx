import type { Metadata } from 'next';
import '@css';

export const metadata: Metadata = {
  title: {
    default: 'VegaIT',
    template: 'VegaIT | %s',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../icons/vegait.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
