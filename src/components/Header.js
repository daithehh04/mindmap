import { getSession } from '@auth0/nextjs-auth0';
import Navigation from './Navigation';

async function Header() {
  const { user } = await getSession();
  return (
    <>
      <Navigation user={user} />
    </>
  );
}

export default Header;
