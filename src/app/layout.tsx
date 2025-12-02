import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HAMI',
  description: 'Muldum Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}