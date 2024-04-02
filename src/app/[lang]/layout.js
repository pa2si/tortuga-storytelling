import './globals.css';
import Header from './_sections/Header/Header';

import { indieFlower, kalam, abhayaLibre, playpenSans } from './fonts';

import { AppProvider } from '@/utils/context';

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tortugastorytelling.de'
  ),
  title: {
    default: 'Tortuga Storytelling',
    template: '%s | Tortuga Storytelling',
    siteName: 'Tortuga Storytelling',
  },
};

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({ children, params }) {
  return (
    <html className="scroll-smooth" lang={params.lang}>
      <body
        className={`${playpenSans.variable} ${indieFlower.variable} ${kalam.variable} ${abhayaLibre.variable}`}
      >
        <AppProvider>
          <Header params={params} />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
