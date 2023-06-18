import Layout from '@/components/layout';
import Title from '@/components/Title';
import ContentComponent from '@/components/ContentComponent';
import data from './api/data';

export default function IndexPage() {
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
            {data.map((item, index) => (
              <ContentComponent key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="container my-24">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
