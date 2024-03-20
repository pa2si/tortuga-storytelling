import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

// export const pageLinks = [
//   /*   {
//     id: 1,
//     url: '#home',
//     text: 'Home',
//   }, */
//   {
//     id: 1,
//     url: '#about',
//     text: 'About',
//   },
//   {
//     id: 2,
//     url: '#events',
//     text: 'Events',
//   },
//   {
//     id: 3,
//     url: '#programs',
//     text: 'Programs',
//   },
//   {
//     id: 4,
//     url: '#contact',
//     text: 'Contact',
//   },
// ];

export const languages = [
  {
    id: 1,
    url: '/de',
    text: 'DE',
  },
  {
    id: 2,
    url: '/en',
    text: 'EN',
  },
  {
    id: 3,
    url: '/es',
    text: 'ES',
  },
];

export const socialLinks = [
  {
    id: 1,
    url: 'https://www.instagram.com/tortuga.storytelling/',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com/johannaerzaehlt',
    icon: <FaFacebook />,
  },
];

export const email = [
  {
    id: 1,
    email: 'tortuga.storytelling@posteo.de',
    icon: <AiOutlineMail />,
  },
];
