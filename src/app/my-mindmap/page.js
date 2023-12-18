import Header from '~/components/Header';
import ListMindMap from './ListMindMap';

export const metadata = {
  title: 'Mindmap - Collaborative Mind Mapping | Mindmap',
  description: 'The Ultimate Toolkit for Bringing Ideas to Life',
  openGraph: {
    title: 'Mindmap - Collaborative Mind Mapping | Mindmap',
    description: 'The Ultimate Toolkit for Bringing Ideas to Life',
  },
};
function MindMap() {
  return (
    <>
      <Header />
      <div className="px-[30px] pb-[100px] pt-[120px]">
        <h2 className="heading-1 !text-4xl">My mindmap</h2>
        <ListMindMap />
      </div>
    </>
  );
}

export default MindMap;
