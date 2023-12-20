import { getSession } from '@auth0/nextjs-auth0';
import Navigation from './Navigation';

async function Header() {
  const userInfo = await getSession();
  const user = userInfo?.user;
  return (
    <>
      <Navigation user={user} />
    </>
  );
}

export default Header;
