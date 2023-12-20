import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import Header from '~/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full home pt-[120px]">
        <section className="relative banner">
          <h2 className="text-center heading-2 ">It all starts with an idea</h2>
          <h1 className="text-center heading-1">
            Collaborative <br /> Mind Mapping
          </h1>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white py-6 px-8 rounded-full">
            <Link
              className="flex items-center gap-2 px-10 py-4 text-lg font-bold btn-primary"
              href={'/api/auth/login'}
            >
              <div className="bg-white  rounded-full grid place-items-center w-[36px] h-[36px]">
                <FcGoogle fontSize={'1.5rem'} />
              </div>
              Continue with Google
            </Link>
          </div>
        </section>
        <ul className="flex items-center justify-center gap-8 mt-8 mb-8 content">
          <li
            className="px-[20px] py-[30px] rounded-[40px] min-w-[250px] min-h-[200px] flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.05)' }}
          >
            <Image
              src={'./image/iconH-1.svg'}
              width={100}
              height={600}
              className="h-[3.75rem] w-auto object-cover"
              alt="icon"
            />
            <h4 className="mt-auto text-xl font-thin text-center black text-x">
              <p className="text-xl font-bold">Visualize</p>
              your ideas
            </h4>
          </li>
          <li
            className="px-[20px] py-[30px] rounded-[40px] min-w-[250px] min-h-[200px] flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.05)' }}
          >
            <Image
              src={'./image/iconH-2.svg'}
              width={100}
              height={600}
              className="h-[3.75rem] w-auto object-cover"
              alt="icon"
            />
            <h4 className="mt-auto text-xl font-thin text-center black text-x">
              <p className="text-xl font-bold">Collaborate</p>
              with your team
            </h4>
          </li>
          <li
            className="px-[20px] py-[30px] rounded-[40px] min-w-[250px] min-h-[200px] flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.05)' }}
          >
            <Image
              src={'./image/iconH-3.svg'}
              width={140}
              height={600}
              className="h-[3.75rem] w-auto object-cover"
              alt="icon"
            />
            <h4 className="mt-auto text-xl font-thin text-center black text-x">
              <p className="text-xl font-bold">Manage</p>
              your tasks
            </h4>
          </li>
          <li
            className="px-[20px] py-[30px] rounded-[40px] min-w-[250px] min-h-[200px] flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.05)' }}
          >
            <Image
              src={'./image/iconH-4.svg'}
              width={70}
              height={400}
              className="h-[3.75rem] w-auto object-cover"
              alt="icon"
            />
            <h4 className="mt-auto text-xl font-thin text-center black text-x">
              <p className="text-xl font-bold">Share</p>
              with the world
            </h4>
          </li>
        </ul>
        {/*  */}
        <section className="flex flex-col items-center my-[100px] content">
          <h2 className="tracking-wide heading-2">Add Context to Your Ideas</h2>
          <h3 className="heading-1 !text-6xl mt-2">Add. Link. Integrate.</h3>
          <p className="mt-8 text-xl font-normal tracking-wide text-center text-gray1">
            MindMeister’s web-based, online mind mapping software helps you
            capture, develop and share ideas visually. Once you’ve captured your
            ideas, add context to each topic with links, attachments, embeds and
            integrations. Do more with your ideas.
          </p>
          <Image
            src={'./image/chart.svg'}
            width={800}
            height={600}
            className="object-cover w-full h-auto mt-12"
            alt="chart"
          />
        </section>
      </main>
    </>
  );
}
