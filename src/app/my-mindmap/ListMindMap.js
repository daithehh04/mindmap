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
import ModalConfirmDelete from '~/components/ModalConfirmDelete';
import { postMindmap } from '~/services/mindmap';

const api = process.env.NEXT_PUBLIC_API;

function ListMindMap() {
  const [user, setUser] = useState('');
  const [fetchApi, setFetchApi] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { mutate } = useSWRConfig();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    setFetchApi(`${api}/mindmaps?user_id=${user?.sub}`);
  }, [user.sub]);

  const router = useRouter();
  const { data: mindmaps, error, isLoading } = useSWR(fetchApi, fetcher);
  console.log('mindmaps up: ', mindmaps);
  const id_mindmap = nanoid();
  const handleCreateMindmap = async () => {
    const dataPost = {
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
    try {
      setLoading(true);
      const res = await postMindmap(dataPost);
      const { response, data } = res;
      if (response.ok) {
        console.log('fetchApi', fetchApi);
        mutate(fetchApi);
        router.push(`/my-mindmap/${data.id}`);
      }
      console.log('responsePostData: ', response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading || isLoading) {
    return (
      <div className="flex min-h-[20vh] items-center justify-center ">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <button
        onClick={handleCreateMindmap}
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
          {typeof mindmaps === 'object' &&
          Object.keys(mindmaps).length &&
          !loading
            ? mindmaps?.map((m, i) => (
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
                    <button
                      className="ml-4"
                      onClick={() => setShowConfirm(true)}
                    >
                      <MdDelete fontSize={'1.6rem'} />
                    </button>
                    {showConfirm && (
                      <ModalConfirmDelete
                        id={m.id}
                        fetchApi={fetchApi}
                        onShowConfirm={setShowConfirm}
                      />
                    )}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
}

export default ListMindMap;
