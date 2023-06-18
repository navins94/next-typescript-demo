import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout';
import Title from '@/components/Title';
import ContentComponent from '@/components/ContentComponent';
import Accordion from '@/components/Accordion';
import Marquee from '@/components/Marquee';
import data from './api/data';

export default function IndexPage() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const magicRef = useRef<HTMLDivElement>(null);

  const accordionItems = [
    {
      title: 'Lorem ipsum dolor sit amet ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (magicRef.current && sceneRef.current) {
        const magicWHalf = magicRef.current.clientWidth / 2;
        const sceneRect = sceneRef.current.getBoundingClientRect();
        const sceneOffsetLeft = sceneRect.left + window.scrollX;
        const sceneOffsetTop = sceneRect.top + window.scrollY;
        magicRef.current.style.left = `${
          e.pageX - sceneOffsetLeft - magicWHalf
        }px`;
        magicRef.current.style.top = `${
          e.pageY - sceneOffsetTop - magicWHalf
        }px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Demo">
      <main>
        <section className="container">
          <Title
            text="lorem ipsum"
            level="h1"
            className="title my-6 text-4xl font-bold uppercase leading-none lg:text-9xl "
          />
          <div className="grid grid-cols-1 justify-evenly gap-x-4 gap-y-10 lg:grid-cols-3">
            {data['top'].map((item, index) => (
              <ContentComponent key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="scene my-8 py-24" ref={sceneRef}>
          <div className="container ">
            <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
              <div>
                <Title
                  text="About us"
                  level="h2"
                  className="title my-6 w-1/2 text-4xl font-bold uppercase leading-none lg:text-9xl"
                />
                <div className="mt-5 space-y-1 text-lg opacity-70">
                  <p>Lorem</p>
                  <p>Lorem</p>
                </div>
              </div>
              <div>
                <p className="mt-10 text-lg opacity-70 lg:mt-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div ref={magicRef} className="magic"></div>
          </div>
        </section>
        <Marquee />
        <section className="container py-10">
          <Title
            text="lorem ipsum dolor set"
            level="h2"
            className="title my-6 w-3/4 text-4xl font-bold uppercase leading-none lg:text-9xl"
          />
          <div className="grid grid-cols-1 justify-evenly gap-x-4 gap-y-10 lg:grid-cols-3">
            {data['bottom'].map((item, index) => (
              <ContentComponent key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="container mb-10 py-24">
          <Title
            text="lorem ipsum dolor"
            level="h2"
            className="title mb-10 mt-6  text-4xl font-bold uppercase leading-none lg:text-9xl"
          />
          <Accordion items={accordionItems} />
        </section>
      </main>
    </Layout>
  );
}
