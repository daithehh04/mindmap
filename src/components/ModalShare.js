'use client';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa6';
import { FiClipboard } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import CopyToClipboard from 'react-copy-to-clipboard';
import { updateMindmap } from '~/services/mindmap';
import { useSWRConfig } from 'swr';
const api = process.env.NEXT_PUBLIC_API;

function ModalShare({ onShow, data, id }) {
  const currentPath = window.location.href;
  const { mutate } = useSWRConfig();
  const fetchApi = `${api}/mindmaps/${id}`;
  const [form, setForm] = useState({
    title_seo: data.title_seo,
    desc_seo: data.desc_seo,
    img_seo: data.img_seo,
  });
  const [mode, setMode] = useState(1);
  const [copied, setCopied] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async () => {
    let dataUpdate;
    if (parseInt(mode) === 1) {
      dataUpdate = {
        ...data,
        ...form,
        status: 1,
      };
    } else {
      dataUpdate = {
        ...data,
        status: 0,
      };
    }
    try {
      const res = await updateMindmap(dataUpdate, id);
      mutate(fetchApi);
      let text = 'public';
      if (+mode === 0) {
        text = 'private';
      }
      toast.success(`Change mode ${text} success !`);
    } catch (error) {
      console.log(error);
    }
    onShow(false);
  };
  const onCopy = useCallback(() => {
    setCopied(true);
    toast.success('Copied !');
  }, []);
  return (
    <>
      <div
        className="fixed top-0 left-0 !z-[199] w-full overflow-y-auto text-black"
        id="modal"
      >
        <div className="flex items-center justify-center px-4 pt-4 pb-20 text-center min-h-[100vh] sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div
              className="absolute inset-0 opacity-75"
              style={{ background: 'rgb(17 24 39)' }}
              onClick={() => onShow(false)}
            ></div>
            <div
              className="inline-block overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center sm:align-middle sm:max-w-lg sm:w-full fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex items-center justify-center gap-4 px-4 pt-5 mode">
                <div className="flex items-center mr-4">
                  <input
                    id="radio1"
                    type="radio"
                    name="radio"
                    className="hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio1"
                    className="flex items-center cursor-pointer"
                    onClick={() => setMode(0)}
                  >
                    <span className="inline-block w-4 h-4 mr-1 border rounded-full border-grey"></span>
                    Riêng tư
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="radio2"
                    type="radio"
                    name="radio"
                    className="hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio2"
                    className="flex items-center cursor-pointer"
                    onClick={() => setMode(1)}
                  >
                    <span className="inline-block w-4 h-4 mr-1 border rounded-full border-grey"></span>
                    Công khai
                  </label>
                </div>
              </div>
              <div className="px-4 pt-2 pb-2 bg-white public">
                <div className="flex items-center justify-between">
                  <label className="font-medium text-[0.875rem] text-[#6B7280]">
                    Liên kết chia sẻ
                  </label>
                  <CopyToClipboard onCopy={onCopy} text={currentPath}>
                    <button className="relative cursor-default">
                      <FiClipboard
                        fontSize={'1.2rem'}
                        className={`clipboard cursor-pointer ${
                          copied && 'text-blue'
                        }`}
                      />
                      <p className="copy absolute right-[-10px] opacity-0 transition-all p-1 px-2 text-xs text-white bg-black rounded-md whitespace-nowrap bottom-6">
                        {copied ? 'Copied success !' : 'Copy to clipboard !'}
                      </p>
                    </button>
                  </CopyToClipboard>
                </div>
                <input
                  defaultValue={currentPath}
                  type="text"
                  readOnly
                  className="w-full p-2 mt-1 mb-3 rounded outline-none bg-[#f5f8fa] font-normal transition-all focus:outline-2 focus:outline-blue"
                />
                <label className="font-medium text-[0.875rem] text-[#6B7280]">
                  Tiêu đề
                </label>
                <input
                  defaultValue={data?.title_seo}
                  type="text"
                  name="title_seo"
                  onChange={handleChange}
                  className="w-full p-2 mt-1 mb-3 rounded font-normal  outline-none bg-[#f5f8fa] transition-all focus:outline-2 focus:outline-blue"
                />
                <label className="font-medium text-[0.875rem] text-[#6B7280]">
                  Mô tả
                </label>
                <textarea
                  name="desc_seo"
                  id=""
                  rows="3"
                  onChange={handleChange}
                  defaultValue={data?.desc_seo}
                  className="w-full p-1 mt-1 mb-1 rounded font-normal  outline-none bg-[#f5f8fa] transition-all focus:outline-2 focus:outline-blue"
                ></textarea>
                <label className="font-medium text-[0.875rem] text-[#6B7280]">
                  Ảnh chia sẻ
                </label>
                <input
                  name="img_seo"
                  defaultValue={data?.img_seo}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-2 mt-1 font-normal  mb-3 rounded outline-none bg-[#f5f8fa] transition-all focus:outline-2 focus:outline-blue"
                />
              </div>
              <div className="px-4 pt-2 pb-2 bg-white private">
                <p className="font-normal">
                  Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này
                </p>
              </div>
              <div className="flex justify-end px-4 py-3 text-right bg-blue1">
                <button
                  type="button"
                  className="flex items-center px-4 py-2 mr-2 text-white rounded bg-[#535d7e] hover:bg-[#3a4157]"
                  onClick={() => onShow(false)}
                >
                  <MdClose fontSize={'1.2rem'} /> Cancel
                </button>
                <button
                  onClick={handleSave}
                  type="button"
                  className="btn-primary !rounded flex items-center gap-1 px-4 py-2 mr-2 text-white "
                >
                  <FaPlus fontSize={'1.2rem'} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalShare;
