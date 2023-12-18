'use client';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '~/utils/fetcher';
import moment from 'moment';
import { nanoid } from 'nanoid';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Loading from '~/components/Loading';

const api = process.env.NEXT_PUBLIC_API;

const postMindmap = async (dataMindmap) => {
  try {
    const response = await fetch(`${api}/mindmaps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataMindmap),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

function ListMindMap() {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  const router = useRouter();
  const {
    data: mindmaps,
    error,
    isLoading,
    mutate,
  } = useSWR(`${api}/mindmaps?user_id=${user?.sub}`, fetcher);
  console.log('mindmaps', mindmaps);
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  const id_mindmap = nanoid();
  const deleteMindmap = async (id) => {
    try {
      const data = await fetch(`${api}/mindmaps/${id}`, {
        method: 'DELETE',
      });
      mutate(mindmaps);
      console.log(data);
      if (data.ok) {
        toast.success('Delete success!');
      } else {
        toast.error('Some thing went wrong!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostMindmap = async () => {
    const data = {
      id: id_mindmap,
      user_id: user?.sub,
      user: user,
      title: 'Tiêu đề mindmap không tên',
      status: 0,
      desc: 'Chưa có mô tả',
      created_at: moment().format('DD/MM/YYYY HH:mm:ss'),
      nodes: [
        {
          id: '0',
          type: 'textUpdater',
          data: { value: 'My mindmap' },
          position: { x: 0, y: 0 },
        },
      ],
      edges: [],
    };
    mutate(mindmaps);
    const dataMap = await postMindmap(data);
    console.log(dataMap);
    if (dataMap) {
      router.push(`/my-mindmap/${dataMap.id}`);
    } else {
      toast.error('Some thing went wrong !');
    }
  };

  return (
    <>
      <button
        onClick={handlePostMindmap}
        className="px-8 mt-4 mb-12 flex gap-1 w-max items-center btn-primary py-3 !rounded-lg"
      >
        <FiPlusCircle />
        Create new
      </button>
      <table className="w-full text-black">
        <thead>
          <tr className="text-xl bg-blue1">
            <th className="p-4 text-left border border-gray">Tên</th>
            <th className="p-4 text-left border border-gray">Tạo lúc</th>
            <th className="p-4 text-left border border-gray">Trạng thái</th>
            <th className="p-4 text-left border border-gray">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {mindmaps &&
            mindmaps?.map((m, i) => (
              <tr key={i}>
                <td className="w-[70%] border border-gray p-2">
                  <h2 className="text-xl">{m.title} </h2>
                  <p className="font-thin">{m.desc}</p>
                </td>
                <td className="p-2 border border-gray">{m.created_at}</td>
                <td className="p-2 border border-gray">
                  <span className="font-medium text-[#FC427B] block text-center">
                    {+m.status === 0 ? 'Private' : 'Public'}
                  </span>
                </td>
                <td className="p-2 border border-gray">
                  <Link
                    href={`/my-mindmap/${m.id}`}
                    className="inline-block ml-2"
                  >
                    <FaEdit fontSize={'1.6rem'} />
                  </Link>
                  <button className="ml-4" onClick={() => deleteMindmap(m.id)}>
                    <MdDelete fontSize={'1.6rem'} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ListMindMap;
