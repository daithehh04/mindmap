import { DataProvider } from '~/app/context/DataProvider';
import Detail from './Detail';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

const api = process.env.NEXT_PUBLIC_API;
const getData = async (id) => {
  const response = await fetch(`${api}/mindmaps/${id}`, {
    next: { revalidate: 60 },
  });
  if (response.status === 200) {
    return response.json();
  }
};
export async function generateMetadata({ params: { id } }) {
  const data = await getData(id);
  return {
    title: data?.title_seo?.slice(0, 64) || 'title mindmap',
    description: data?.desc_seo?.slice(0, 150) || 'description mindmap',
    openGraph: {
      title: data?.title_seo?.slice(0, 64) || 'title mindmap',
      description: data?.desc_seo?.slice(0, 150) || 'description mindmap',
      images: [data?.img_seo] || '',
    },
  };
}

async function MindmapDetail({ params: { id } }) {
  // const data = await getSession();
  // const user = data?.user;
  // if (!user) {
  //   redirect('/api/auth/login');
  // }
  return (
    <DataProvider>
      <Detail id={id} />
    </DataProvider>
  );
}

export default MindmapDetail;
