// Remove the import for Inter
// import { Inter } from 'next/font/google';

import '../globals.css';
import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 metadata Threads Application',
};

// Remove the inter variable
// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        {/* Remove the className={inter.className} from the body */}
        <body>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
