import { FaArrowRight } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { PiBroomBold } from 'react-icons/pi';
import { FaChartLine } from 'react-icons/fa';
import { SiStarship } from 'react-icons/si';
import { GrGroup } from 'react-icons/gr';
import { RxShare1 } from 'react-icons/rx';
import { ImEmbed } from 'react-icons/im';
import { LuLaptop2 } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import Header from '~/components/Header';

export const metadata = {
  title: 'Feature | Mindmap',
  description: 'The Ultimate Toolkit for Bringing Ideas to Life',
  openGraph: {
    title: 'Feature | Mindmap',
    description: 'The Ultimate Toolkit for Bringing Ideas to Life',
  },
};
function Features() {
  return (
    <>
      <Header />
      <section className="features mt-[120px]">
        <div className="content">
          <h2 className="heading-2 text-gray">
            The Ultimate Toolkit for Bringing Ideas to Life
          </h2>
          <h1 className="mt-3 text-black heading-1">All The Features.</h1>
          <p className="text-xl font-normal text-gray1 mt-7 leading-[1.5]">
            From your first brainstorming session to your final presentation,
            MindMeister’s extensive feature set fuels your creativity every step
            of the way. Learn more about mind mapping essentials, features for
            collaboration and sharing, team management functionality and
            possibilities for mapping on mobile.
          </p>
        </div>
        <div className="flex items-center justify-center list-features mt-[60px]">
          <div className="flex flex-wrap gap-8 content">
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <FcIdea fontSize={'2rem'} />
              <span className="text-xl">Essentials</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <PiBroomBold fontSize={'2rem'} color="orange" />
              <span className="text-xl">Styling</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <SiStarship fontSize={'2rem'} color="#00aaff" />
              <span className="text-xl">Advanced Features</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <FaChartLine fontSize={'2rem'} color="#ffd828" />
              <span className="text-xl">Collaboration</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <ImEmbed fontSize={'2rem'} color="#9e7af2" />
              <span className="text-xl">Integrations & Embeds</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <GrGroup fontSize={'2rem'} color="#f9578d" />
              <span className="text-xl">Teams</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <RxShare1 fontSize={'2rem'} color="#3dcc3d" />
              <span className="text-xl">Sharing</span>
              <FaArrowRight color="#aaa" />
            </button>
            <button className="bg-[#fff] hover:shadow-lg transition-all flex items-center gap-2 px-[36px] py-[18px] rounded-[99px] border border-solid border-[#ccc]">
              <LuLaptop2 fontSize={'2rem'} color="#2cd8d8" />
              <span className="text-xl">On the go</span>
              <FaArrowRight color="#aaa" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center pt-2 pb-16">
          <Image
            src={'/image/ui-glass.png'}
            width={600}
            height={400}
            alt="img"
          />
          <h2 className="heading-2">Build a Better Mind Map</h2>
          <h3 className="heading-1 !text-6xl py-4">
            Try MindMeister for Free.
          </h3>
          <Link
            href={'/api/auth/login'}
            className="flex items-center gap-2 px-10 py-6 mt-6 text-xl font-bold btn-primary"
          >
            Sign up today <FaArrowRightLong fontSize={'1.6rem'} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Features;
