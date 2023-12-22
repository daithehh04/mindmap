import Header from '~/components/Header';
import Footer from '~/components/Footer';
import MyMindmap from './MyMindmap';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Mindmap - Collaborative Mind Mapping | Mindmap',
  description: 'The Ultimate Toolkit for Bringing Ideas to Life',
  openGraph: {
    title: 'Mindmap - Collaborative Mind Mapping | Mindmap',
    description: 'The Ultimate Toolkit for Bringing Ideas to Life',
  },
};
async function MindMap() {
  const data = await getSession();
  const user = data?.user;
  if (!user) {
    return redirect('/api/auth/login');
  }
  return (
    <>
      <Header />
      <div className="px-[30px] pb-[100px] pt-[120px]">
        <h2 className="heading-1 !text-4xl">My mindmap</h2>
        <MyMindmap user={user} />
      </div>
      <Footer />
    </>
  );
}

export default MindMap;
