import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '9iceMoney - Personal & Business Banking',
  description: 'Send money, pay bills, and take control of your finances with a seamless banking experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
