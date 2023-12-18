import { DataProvider } from '~/app/context/DataProvider';
import Detail from './Detail';

const api = process.env.NEXT_PUBLIC_API;
export async function generateMetadata({ params: { id } }) {
  const response = await fetch(`${api}/mindmaps/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return {
    title: data?.title,
    description: data?.desc,
    openGraph: {
      title: data?.title,
      description: data?.desc,
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
