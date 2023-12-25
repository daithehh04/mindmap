import { DataProvider } from '~/app/context/DataProvider';
import Detail from './Detail';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

const api = process.env.NEXT_PUBLIC_API;
export async function generateMetadata({ params: { id } }) {
  const response = await fetch(`${api}/mindmaps/${id}`, {
    next: { revalidate: 30 },
  });
  const data = await response.json();
  return {
    title: data?.title?.slice(0, 64),
    description: data?.desc?.slice(0, 150),
    openGraph: {
      title: data?.title?.slice(0, 64),
      description: data?.desc?.slice(0, 150),
      images: [data?.img_seo],
    },
  };
}

async function MindmapDetail({ params: { id } }) {
  const data = await getSession();
  const user = data?.user;
  if (!user) {
    redirect('/api/auth/login');
  }
  return (
    <DataProvider>
      <Detail id={id} />
    </DataProvider>
  );
}

export default MindmapDetail;
