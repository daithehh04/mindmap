import { IoWarningOutline } from 'react-icons/io5';
function ModalConfirmDelete({ onDelete, onShowConfirm, id }) {
  const handleDelete = async () => {
    await onDelete(id);
    onShowConfirm(false);
  };
  return (
    <div
      className="fixed inset-0 h-[100vh] w-full !z-50"
      style={{ background: 'rgba(17,24,39,0.8)' }}
    >
      <div className="bg-[#fff] !z-[51] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <div className="flex items-center gap-4 !opacity-100 text-black">
          <div className="p-3 border grid place-items-center border-solid border-[#333] rounded-full">
            <IoWarningOutline fontSize={'2rem'} color="red" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Bạn muốn xóa mindmap này?</h3>
            <h4 className="mt-2 text-lg font-thin">
              Nếu xóa bạn không thể phục hồi dữ liệu
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-3">
          <button
            className="px-5 py-2 rounded-md bg-[#ced6e0]"
            onClick={() => onShowConfirm(false)}
          >
            Không
          </button>
          <button
            className="px-5 py-2 rounded-md bg-[#f8d0d3f7] text-[#ff4757]"
            onClick={handleDelete}
          >
            Có xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
