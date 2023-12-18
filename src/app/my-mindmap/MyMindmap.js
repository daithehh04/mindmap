import { getSession } from '@auth0/nextjs-auth0';
import ListMindMap from './ListMindMap';
async function MyMindmap() {
  const { user } = await getSession();
  return (
    <div>
      <ListMindMap user={user} />
    </div>
  );
}

export default MyMindmap;
