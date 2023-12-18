import { DataProvider } from '~/app/context/DataProvider';
import Detail from './Detail';

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

function MindmapDetail({ params: { id } }) {
  return (
    <DataProvider>
      <Detail id={id} />
    </DataProvider>
  );
}

export default MindmapDetail;
