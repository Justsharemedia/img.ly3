import type { Metadata } from 'next';
import './root.css';
import '../styles/index.css'; // Path to your new index.css file


export const metadata: Metadata = {
  title: 'CE.SDK Showcase',
  description: 'Build using the CE.SDK'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh' }}>{children}</body>
    </html>
  );
}
