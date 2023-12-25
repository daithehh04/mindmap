'use client';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '~/utils/fetcher';
import moment from 'moment';
import { nanoid } from 'nanoid';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Loading from '~/components/Loading';
import ModalConfirmDelete from '~/components/ModalConfirmDelete';
import { getMindmaps, postMindmap } from '~/services/mindmap';
import toast from 'react-hot-toast';

const api = process.env.NEXT_PUBLIC_API;

function ListMindMap({ user }) {
  const fetchApi = `${api}/mindmaps?user_id=${user?.sub}`;
  const [loading, setLoading] = useState(false);
  const [dataMaps, setDataMaps] = useState([]);
  const [idRemove, setIdRemove] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const { mutate } = useSWRConfig();

  const router = useRouter();
  // const { data: mindmaps, error, isLoading } = useSWR(fetchApi, fetcher);
  const getData = useCallback(async () => {
    const res = await getMindmaps(user?.sub);
    const data = await res.json();
    setDataMaps(data);
  }, [user?.sub]);
  useEffect(() => {
    getData();
  }, [user, getData]);
  const handleCreateMindmap = async () => {
    const id_mindmap = nanoid();
    const dataPost = {
      id: id_mindmap,
      user_id: user?.sub,
      user: user,
      title: 'Tiêu đề mindmap không tên',
      img_seo:
        'https://cdn5.mindmeister.com/assets/library/general/mm-logout-illustration_220727-f35a7063c1cb3191481037c2e66edc4999ec2e6e83f4b4f15c3af6ca43753682.png',
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
      await postMindmap(dataPost);
      mutate(fetchApi);
      toast.success('Create mindmap success!');
      setDataMaps([...dataMaps, dataPost]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push(`/my-mindmap/${id_mindmap}`);
      router.refresh();
    }
  };

  const handleRemove = (m) => {
    setIdRemove(m.id);
    setShowConfirm(true);
  };

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
          {
            dataMaps?.length
              ? dataMaps?.map((m, i) => (
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
                        <FaEdit
                          fontSize={'1.5rem'}
                          className="hover:text-[#3498db]"
                        />
                      </Link>
                      <button className="ml-4" onClick={() => handleRemove(m)}>
                        <MdDelete
                          fontSize={'1.6rem'}
                          className="hover:text-[#e74c3c]"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              : null
            // <span className="block absolute mt-6 italic text-xl text-gray1 font-thin text-center left-[50%] -translate-x-1/2">
            //   Chưa có mindmaps
            // </span>
          }
        </tbody>
      </table>
      {loading && (
        <div
          className={`fixed opacity-60 bg-white w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full `}
        >
          <Loading />
        </div>
      )}
      {showConfirm && (
        <ModalConfirmDelete
          onLoading={setLoading}
          onRemove={setDataMaps}
          dataMaps={dataMaps}
          id={idRemove}
          fetchApi={fetchApi}
          onShowConfirm={setShowConfirm}
        />
      )}
    </>
  );
}

export default ListMindMap;
