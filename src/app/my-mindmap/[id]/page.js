import { DataProvider } from '~/app/context/DataProvider';
import Detail from './Detail';

const api = process.env.NEXT_PUBLIC_API;
const getData = async (id) => {
  const response = await fetch(`${api}/mindmaps/${id}`, {
    cache: 'no-store',
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
  return (
    <DataProvider>
      <Detail id={id} />
    </DataProvider>
  );
}

export default MindmapDetail;
