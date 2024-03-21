import { Playpen_Sans } from 'next/font/google';
import { Indie_Flower } from 'next/font/google';
import { Kalam } from 'next/font/google';
import { Abhaya_Libre } from 'next/font/google';

export const playpenSans = Playpen_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-playpenSans',
  adjustFontFallback: false,
});

export const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-indieFlower',
});

export const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-kalam',
});

export const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-abhayaLibre',
});
