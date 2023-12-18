import { Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import 'reactflow/dist/style.css';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Home | Mindmap',
  description: 'Collaborative Mind Mapping',
  openGraph: {
    title: 'Home | Mindmap',
    description: 'Collaborative Mind Mapping',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={roboto.className} suppressHydrationWarning={true}>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
          <Toaster />
        </body>
      </UserProvider>
    </html>
  );
}
