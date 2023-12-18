'use client';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { FaSave } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { fetcher } from '~/utils/fetcher';
import Flow from '../Flow';
import { useDataMindmap } from '~/app/context/DataProvider';
import ContentEditable from 'react-contenteditable';
import toast from 'react-hot-toast';
import { useUser } from '@auth0/nextjs-auth0/client';
import ModalShare from '~/components/ModalShare';
import Link from 'next/link';
const api = process.env.NEXT_PUBLIC_API;

function Detail({ id }) {
  const { user } = useUser();
  const [show, setShow] = useState(false);
  const { dataMindmap } = useDataMindmap();
  const { data, error, isLoading } = useSWR(`${api}/mindmaps/${id}`, fetcher);
  console.log('data-client', data);
  const checkUser = data?.user_id === user?.sub;
  const titleRef = useRef('');
  const descRef = useRef('');
  useEffect(() => {
    titleRef.current = data?.title;
    descRef.current = data?.desc;
  }, [data]);
  useEffect(() => {
    document.title = titleRef.current;
  }, [titleRef, data]);
  const updateMindmap = async (data) => {
    try {
      const response = await fetch(`${api}/mindmaps/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    const dataUpdate = {
      ...dataMindmap,
      title: titleRef.current,
      desc: descRef.current,
    };
    const data = await updateMindmap(dataUpdate);
    if (data) {
      toast.success('Update success!');
    } else {
      toast.error('Some thing went wrong!');
    }
  };

  const handleChangeTitle = (evt) => {
    titleRef.current = evt.target.value;
    if (evt.target.value !== '') {
      document.title = titleRef.current;
    } else {
      document.title = 'Không có tiêu đề mindmap';
    }
  };
  const handleChangeDesc = (evt) => {
    descRef.current = evt.target.value;
  };

  return (
    <>
      <div className="flex items-center mt-4 mb-2 px-[35px] gap-6">
        <div className="w-[90%] flex items-end gap-8">
          <Link
            href={'/my-mindmap'}
            className="flex items-center gap-1 px-6 py-2 mb-3 text-black bg-white border border-solid rounded-full shadow-xl border-[#ddd] w-max"
          >
            <IoIosArrowBack fontSize={'1.3rem'} />
            my-mindmap
          </Link>
          {!user || (user && !checkUser) ? (
            <div className="flex flex-col">
              <h4 className="heading-1 !text-3xl outline-none">
                {titleRef.current}
              </h4>
              <h5 className="mt-2 text-xl font-thin text-black outline-none">
                {descRef.current}
              </h5>
            </div>
          ) : (
            <div className="flex flex-col">
              <ContentEditable
                className="heading-1 !text-3xl outline-none"
                html={titleRef.current || ''}
                onChange={handleChangeTitle}
              />
              <ContentEditable
                html={descRef.current || ''}
                className="mt-2 text-xl font-thin text-black outline-none"
                onChange={handleChangeDesc}
              />
            </div>
          )}
        </div>
        {!user || (user && !checkUser) ? (
          <></>
        ) : (
          <div className="flex gap-6 ml-auto w-[40%] justify-end">
            <button
              className="btn-primary !rounded-md h-12 px-4 flex gap-2 items-center"
              onClick={handleUpdate}
            >
              <FaSave fontSize={'1.4rem'} />
              Lưu thay đổi
            </button>
            <button
              className="btn-secondary !rounded-md h-12 px-4 flex gap-2 items-center"
              onClick={() => setShow(true)}
            >
              <FaShare fontSize={'1.4rem'} />
              Chia sẻ
            </button>
          </div>
        )}
      </div>
      <div className="h-[calc(100vh-6rem)]">
        <Flow id={id} />
        {show && (
          <ModalShare
            onShow={setShow}
            data={data}
            onUpdateMindmap={updateMindmap}
          />
        )}
      </div>
    </>
  );
}

export default Detail;
