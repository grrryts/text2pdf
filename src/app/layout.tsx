import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { PdfViewerProvider } from '@/lib/providers';
import { ReduxStoreProvider } from '@/lib/store/provider';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Text 2 PDF',
  description: 'Convert text to PDF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxStoreProvider>
          <PdfViewerProvider>{children}</PdfViewerProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
