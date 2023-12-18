'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LuKeyRound } from 'react-icons/lu';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
function Avatar({ user }) {
  const [show, setShow] = useState(false);
  const refMenu = useRef();
  const handleOutsideClick = (e) => {
    if (refMenu.current && !refMenu.current.contains(e.target)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative bg-white !z-50" ref={refMenu}>
      <div
        className="avatar p-[2px] border-[2px] border-solid border-[#ccc] rounded-full"
        onClick={() => setShow(!show)}
      >
        <Image
          src={user?.picture}
          alt="avatar"
          width={46}
          height={46}
          className="object-contain rounded-full border border-solid border-[#ccc] cursor-pointer"
        />
      </div>
      <div
        className={`min-w-[18rem] dropdown-avt flex flex-col items-center justify-center absolute top-[4rem] right-0 bg-white p-3 border border-solid border-[#ccc] rounded-lg text-black shadow-lg opacity-0 invisible ${
          show && 'show-avatar'
        }`}
      >
        <div className="p-1 border border-solid border-[#ccc] rounded-full mt-4">
          <Image
            src={user?.picture}
            alt="avatar"
            width={80}
            height={80}
            className="object-contain rounded-full border border-solid border-[#ccc]"
          />
        </div>
        <h3 className="mt-2 text-lg">{user?.name}</h3>
        <h4 className="mb-1 font-thin">{user?.email}</h4>
        {user?.email_verified && (
          <span className="text-[#1dd1a1] font-medium mb-2 bg-[#d4f3ebd9] px-2 py-1 rounded-md flex items-center gap-1">
            <RiVerifiedBadgeFill fontSize={'1.3rem'} />
            Verified
          </span>
        )}
        <div
          className="w-full border-t border-solid border-blue1"
          onClick={() => setShow(false)}
        >
          <Link
            href={'/api/auth/logout'}
            className="flex items-center justify-center w-full gap-1 p-2 mt-2 mb-2 text-lg font-thin rounded-lg hover:bg-blue1"
          >
            <LuKeyRound fontSize={'1.4rem'} />
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
