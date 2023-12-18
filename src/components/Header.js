'use client';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from './Loading';

function Header() {
  const pathname = usePathname();
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const { user, error, isLoading } = useUser();

  if (user && !isLoading) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    // Thêm sự kiện cuộn
    window.addEventListener('scroll', handleScroll);
    // Xóa sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>{error.message}</div>;
  return (
    <header
      className={`fixed top-0 w-full z-20 header bg-[#fff] header ${
        isHeaderActive ? 'active' : ''
      }`}
    >
      <div className="flex items-center justify-between px-8 py-3 mx-auto">
        <Link href={'/'} className="logo">
          <Image src="/image/logo.svg" alt="logo" width={120} height={350} />
        </Link>
        <nav className="flex items-center gap-6 px-4 py-3 rounded-full bg-gray backdrop-blur-md ">
          <Link
            href={'/'}
            className={`${
              pathname === '/' && 'bg-[#f2f2f2]'
            } px-8 py-2 rounded-full text-black nav-link hover:bg-[#f2f2f2]`}
          >
            Home
          </Link>
          <Link
            href={'/features'}
            className={`${
              pathname === '/features' && 'bg-[#f2f2f2]'
            } px-8 py-2 rounded-full text-black nav-link hover:bg-[#f2f2f2]`}
          >
            Features
          </Link>
          <Link
            href={'/price'}
            className={`${
              pathname === '/price' && 'bg-[#f2f2f2]'
            } px-8 py-2 rounded-full text-black nav-link hover:bg-[#f2f2f2]`}
          >
            Price
          </Link>
          <Link
            href={'/contact'}
            className={`${
              pathname === '/contact' && 'bg-[#f2f2f2]'
            } px-8 py-2 rounded-full text-black nav-link hover:bg-[#f2f2f2]`}
          >
            Contact
          </Link>
          <Link
            href={'/my-mindmap'}
            className={`${
              pathname === '/my-mindmap' && 'bg-[#f2f2f2]'
            } px-8 py-2 rounded-full text-black nav-link hover:bg-[#f2f2f2]`}
          >
            Mindmap
          </Link>
        </nav>
        {!user ? (
          <div className="flex items-center gap-6 login">
            <Link href={'/api/auth/login'} className="text-blue">
              Log In
            </Link>
            <Link
              href={'/api/auth/login'}
              className="flex items-center h-12 gap-2 px-6 btn-primary"
            >
              Sign Up <IoArrowForward fontSize={'22px'} />
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-blue">Hi, {user.name}</h3>
            <Link
              href={'/api/auth/logout'}
              className="flex items-center h-12 gap-2 px-6 btn-primary"
            >
              Log out <IoArrowForward fontSize={'22px'} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
