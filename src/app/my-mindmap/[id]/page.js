import { DataProvider } from '~/app/context/DataProvider';
import Detail from './Detail';
import { getSession } from '@auth0/nextjs-auth0';

const api = process.env.NEXT_PUBLIC_API;
export async function generateMetadata({ params: { id } }) {
  const response = await fetch(`${api}/mindmaps/${id}`, {
    next: { revalidate: 120 },
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
  const { user } = await getSession();
  return (
    <DataProvider>
      <Detail id={id} user={user} />
    </DataProvider>
  );
}

export default MindmapDetail;
