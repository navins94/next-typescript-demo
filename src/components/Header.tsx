import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './logo.svg';
import Marquee from './Marquee';

const MENU_ITEMS = [
  {
    label: 'GENESIS PASS',
    link: 'genesis-pass',
    isComingSoon: false,
  },
  {
    label: 'SERVICES',
    link: 'services',
    isComingSoon: false,
  },
  {
    label: 'PROJECTS',
    link: 'projects',
    isComingSoon: false,
  },
  {
    label: 'NFT',
    link: 'nft',
    isComingSoon: false,
  },
  {
    label: 'FAQ',
    link: 'faq',
    isComingSoon: false,
  },
  {
    label: 'PLATFORM',
    link: '#',
    isComingSoon: true,
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative mb-3 flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link href="/">
              <div className="flex items-center">
                <Image src={Logo} alt="Alkimi Logo" />
                <p className="pl-4">{navbarOpen ? 'Menu' : 'Lorem'}</p>
              </div>
            </Link>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              'lg:display-none absolute left-0 top-0 z-[1]  mt-[60px] h-[calc(100vh-60px)] w-full flex-grow items-center overflow-hidden bg-black' +
              (navbarOpen ? ' flex flex-col' : ' hidden')
            }
          >
            <ul className="flex w-full flex-1 list-none flex-col justify-center lg:ml-auto lg:flex-row">
              {MENU_ITEMS.map((item) => (
                <li
                  className={`flex w-full justify-between p-4 ${
                    item.isComingSoon ? 'opacity-40' : ''
                  }`}
                  key={item.link}
                >
                  <Link href={'/' + item.link}>
                    <span className="text-lg font-bold">{item.label}</span>
                  </Link>
                  {item.isComingSoon && (
                    <span className="text-lg font-bold">COMING SOON</span>
                  )}
                </li>
              ))}
            </ul>
            <Marquee />
          </div>
        </div>
      </nav>
    </>
  );
}
